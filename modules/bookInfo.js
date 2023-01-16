export default class BookInfo {
  constructor(author, title, id = Math.floor(Math.random() * 1000)) {
    this.author = author;
    this.title = title;
    this.id = id;
  }
}