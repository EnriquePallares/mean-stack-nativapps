export class Student {
  constructor(
    _id = "",
    name = "",
    lastname = "",
    age = 0,
    email = "",
    courseAssocciated = []
  ) {
    this._id = _id;
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.email = email;
    this.courseAssocciated = courseAssocciated;
  }

  _id: string;
  name: string;
  lastname: string;
  age: number;
  email: string;
  courseAssocciated: Array<any>;
}
