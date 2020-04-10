export class Profile {
  constructor(
    public email: string,
    public imageUrl: string,
    public userName: string
  ) {
    this.email = email;
    this.imageUrl = imageUrl;
    this.userName = userName;
  }
}
