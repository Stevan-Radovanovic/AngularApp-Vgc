export class News {
  constructor(
    public title: string,
    public text: string,
    public pictureUrl: string
  ) {
    this.pictureUrl = pictureUrl;
    this.text = text;
    this.title = title;
  }
}
