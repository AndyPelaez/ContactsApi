import { IContact, ICreateContact } from "../interfaces/contact.interface";
import { requestWithSupertest } from "../test-server";
import { expectedContactModel, randomPhoneNumber } from "./utils.functions";

const contactUrl = "/contacts";

const contactToCreate: ICreateContact = {
  address: "Washington, United States",
  email: "derek@gmail.com",
  name: "Derek Perez",
  phoneNumber: randomPhoneNumber(),
};

const contactToUpdate: ICreateContact = {
  address: "New York, United States",
  email: "juan@gmail.com",
  name: "Juan Perez",
  phoneNumber: randomPhoneNumber(),
};

describe("Contact Endpoints", () => {
  let createdContact: IContact;

  beforeAll(async () => {
    const response = await requestWithSupertest
      .post(contactUrl)
      .send(contactToCreate);
    createdContact = response.body;
  });

  it("POST /contacts/id should add a contact", () => {
    return requestWithSupertest
      .post(contactUrl)
      .send(contactToCreate)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(expectedContactModel());
        requestWithSupertest
          .delete(`${contactUrl}/${response.body._id}`)
          .expect(200)
          .then();
      });
  });

  it("GET /contacts should show all contacts", async () => {
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

  it("GET /contacts/id should show a contact", () => {
    return requestWithSupertest
      .get(`${contactUrl}/${createdContact._id}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(expectedContactModel());
      });
  });

  it("PATCH /contacts/id should update a contact", () => {
    return requestWithSupertest
      .patch(`${contactUrl}/${createdContact._id}`)
      .send({ ...createdContact, ...contactToUpdate })
      .expect("Content-Type", /json/)
      .expect(200)
      .then(() => {
        requestWithSupertest
          .get(`${contactUrl}/${createdContact._id}`)
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
      .delete(`${contactUrl}/${createdContact._id}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then();
  });
});
