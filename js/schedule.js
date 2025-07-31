/**
 * Schedule
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

import Calendar from './calendar.js';

export default class Schedule extends Calendar {
  makeCalendar(year, month) {
    super.makeCalendar(year, month);
    this.fetch(this.options.url1); 
  }

  async fetch(url) {
    const res = await fetch(`${url}`);
    const data = await res.json();
    
    //console.log(data.items);

    this.render(data.items);
  }


  render(data) {
    data.forEach((dt) => {
      const elem = document.querySelector(`[data-date="${dt.start.date}"]`);
      // カレンダーの内容を表示
      if (elem) {
        const span = elem.querySelector('.calendar__value');
        span.textContent = dt.summary;
      }
    });
  }
}
