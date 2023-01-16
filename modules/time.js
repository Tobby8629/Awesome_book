import { DateTime } from "./luxon.js";

 export const date = (Taker) => {
    const now = DateTime.now();
    let hours = now.hour;
    const ampm = hours >= 12 ? 'pm' : 'am';
    Taker.innerText = `${now.monthLong} ${now.day}th ${now.year}, ${now.hour}:${now.minute}${ampm}` 
  }