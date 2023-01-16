import { DateTime } from './luxon.js';

const date = (Taker) => {
  const now = DateTime.now();
  const hours = now.hour;
  const ampm = hours >= 12 ? 'pm' : 'am';
  Taker.innerText = `${now.monthLong} ${now.day}th ${now.year}, ${now.hour}:${now.minute}${ampm}`;
};

export default date;