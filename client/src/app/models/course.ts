export class Course {
  constructor(
    _id = "",
    name = "",
    startTime = "",
    endTime = "",
    dateIni = "",
    dateFin = ""
  ) {
    this._id = _id;
    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.dateIni = dateIni;
    this.dateFin = dateFin;
  }

  _id: string;
  name: string;
  startTime: string;
  endTime: string;
  dateIni: string;
  dateFin: string;
}
