export class User {
  constructor(_id = "", name = "", email = "", password = "") {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  _id: string;
  name: string;
  email: string;
  password: string;
}
