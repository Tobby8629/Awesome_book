import BookInfo from "./bookInfo.js";
import {clone} from "./display.js"

export default class BookList {
    constructor(){
      this.lists = [];
    }
    //Add to the list of book
    Addbook(writer,book,all){
      const receive = new BookInfo(writer,book)

    //push the received info into the this.list array
      this.lists.push(receive);

    //display the array in the dom
      this.lists.map((boo)=>(
        clone(all,boo)
      ))
    //push to localstorage
      localStorage.setItem('array', JSON.stringify(this.lists));
    }

    delbook(id){
     this.lists = this.lists.filter(book => book.id != id);
    }
    toReload(rest,all){
      this.lists.push.apply(this.lists,rest);
      this.lists.map((boo)=>(
        clone(all,boo)
      ))
    }
  }

