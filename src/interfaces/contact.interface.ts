export interface ICreateContact {
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
}
export interface IContact extends ICreateContact {
  _id: string;
}
