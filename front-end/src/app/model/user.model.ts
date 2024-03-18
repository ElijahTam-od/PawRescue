export class User {

  id: number = 0;

  username: string;

  password: string;

  usertype: string;

  request: string;

  constructor(id: number, username: string, password: string, usertype: string, request: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.usertype = usertype;
    this.request = request;
  }
}
