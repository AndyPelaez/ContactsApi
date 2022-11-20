import { IContact, ICreateContact } from "../interfaces/contact.interface";
import { requestWithSupertest } from "../test-server";
import { expectedContactModel, randomPhoneNumber } from "./utils.functions";

const contactUrl = "/contacts";

const contactsToCreate: ICreateContact[] = [
  {
    address: "Washington, United States",
    email: "pedro@gmail.com",
    name: "Pedro Luis",
    phoneNumber: randomPhoneNumber(),
  },
  {
    address: "Florida, United States",
    email: "derek@gmail.com",
    name: "Derek Perez",
    phoneNumber: randomPhoneNumber(),
  },
];

const contactToPost: ICreateContact = {
  address: "Washington, United States",
  email: "raul@gmail.com",
  name: "Raúl Paz",
  phoneNumber: randomPhoneNumber(),
};

const contactToUpdate: ICreateContact = {
  address: "New York, United States",
  email: "juan@gmail.com",
  name: "Juan Perez",
  phoneNumber: randomPhoneNumber(),
};

describe("Contact Endpoints", () => {
  let createdContacts: IContact[] = [];

  beforeAll(async () => {
    for (const contact of contactsToCreate) {
      const response = await requestWithSupertest
        .post(contactUrl)
        .send(contact);
      createdContacts.push(response.body);
    }
  });

  afterAll(async () => {
    for (const contact of createdContacts) {
      await requestWithSupertest.delete(`${contactUrl}/${contact._id}`);
    }
  });

  it("POST /contacts/id should add a contact", () => {
    return requestWithSupertest
      .post(contactUrl)
      .send(contactToPost)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(expectedContactModel());
        createdContacts.push(response.body);
      });
  });

  it("GET /contacts without queries should show all contacts", async () => {
    await requestWithSupertest
      .get(contactUrl)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([expectedContactModel()] || [])
        );
      });
  });

  it("GET /contacts with a query should show contacts that match", async () => {
    await requestWithSupertest
      .get(contactUrl)
      .query({ query: "Pedro" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const { body } = response;
        expect(body).toEqual(
          expect.arrayContaining([expectedContactModel()] || [])
        );
        expect(
          (body as IContact[]).find((c) => c.name === "Pedro Luis")
        ).not.toBeUndefined();
      });
  });
  it("GET /contacts with a query array should show contacts that match", async () => {
    await requestWithSupertest
      .get(contactUrl)
      .query({ query: ["pedro", "florida"] })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const { body } = response;
        expect(body).toEqual(
          expect.arrayContaining([expectedContactModel()] || [])
        );
        expect(
          (body as IContact[]).find((c) => c.name === "Pedro Luis")
        ).not.toBeUndefined();
        expect(
          (body as IContact[]).find(
            (c) => c.address === "Florida, United States"
          )
        ).not.toBeUndefined();
      });
  });

  it("GET /contacts/id should show a contact", () => {
    return requestWithSupertest
      .get(`${contactUrl}/${createdContacts[0]._id}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(expectedContactModel());
      });
  });

  it("PATCH /contacts/id should update a contact", () => {
    return requestWithSupertest
      .patch(`${contactUrl}/${createdContacts[0]._id}`)
      .send({ ...createdContacts, ...contactToUpdate })
      .expect("Content-Type", /json/)
      .expect(200)
      .then(() => {
        requestWithSupertest
          .get(`${contactUrl}/${createdContacts[0]._id}`)
          .then((response) => {
            const { address, email, name, phoneNumber } =
              response.body as IContact;
            expect(address).toEqual(contactToUpdate.address);
            expect(email).toEqual(contactToUpdate.email);
            expect(name).toEqual(contactToUpdate.name);
            expect(phoneNumber).toEqual(contactToUpdate.phoneNumber);
          });
      });
  });

  it("DELETE /contacts/id should delete a contact", () => {
    return requestWithSupertest
      .delete(`${contactUrl}/${createdContacts[0]._id}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        createdContacts.shift();
      });
  });
});
