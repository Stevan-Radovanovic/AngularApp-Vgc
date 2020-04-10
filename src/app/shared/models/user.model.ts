export class User {
  constructor(
    public email: string,
    public password: string,
    public token: string,
    public tokenExpirationDate: Date
  ) {
    this.email = email;
    this.password = password;
    this.token = token;
    this.tokenExpirationDate = tokenExpirationDate;
  }

  getToken() {
    return this.token;
  }
}
