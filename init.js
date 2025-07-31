/**
 * Auto Copyright
 * このファイルは QWEL Project の一部です。
 * Part of the QWEL Project © QWEL.DESIGN 2025
 * Licensed under GPL v3 – see https://qwel.design/
 */

class AutoCopyright {
  constructor(startYear, companyName, elem) {
    elem ||= document.querySelector('.footer__copyright');
    if (elem) elem.innerHTML = this.generate(startYear, companyName);
  }

  generate(startYear, companyName) {
    const currentYear = new Date().getFullYear();
    return `&copy; ${startYear} - ${currentYear} ${companyName}`;
  }
}

new AutoCopyright(2019, 'QWEL.DESIGN');


import PICCalendar from './js/PICCalendar.js';

new PICCalendar({
  url1: 'https://www.googleapis.com/calendar/v3/calendars/judo.kunimi@gmail.com/events?key=AIzaSyCzV_fotoaP1uy5WBuud7CYjJCqi9Ct4-c',
  url2: 'https://tools.qwel.design/pic-calendar/'
});
