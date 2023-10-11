export class User{
  name:string;
  profession: string;
  email: string;
  phone: string;
  constructor(name: string, profession: string, email:string, phone:string){
    this.name = name;
    this.profession = profession;
    this.email = email;
    this.phone = phone;
  }
}
