export const expectedContactModel = () =>
  expect.objectContaining({
    _id: expect.any(String),
    name: expect.any(String),
    address: expect.any(String),
    email: expect.any(String),
    phoneNumber: expect.any(String),
  });
  
export const expectedValidationErrorModel = () =>
  expect.objectContaining({
    fields: expect.any(Array),
    messages: expect.any(Array),
  });


export const randomPhoneNumber = () =>
  Math.round(Math.random() * Math.pow(10, 10)).toString();
