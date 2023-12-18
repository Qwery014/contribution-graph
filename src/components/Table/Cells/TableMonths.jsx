import React from 'react';
import { months } from '../../../helpers/consts';

const TableMonths = () => {

  function monthCounter() {
    const today = new Date()
    let monthIndex = today.getMonth();

    return function monthIndReturn() {
      if (monthIndex > 10) {
        monthIndex = -1;
      }
      monthIndex += 1;
      return months[monthIndex];
    }
  }


  function monthLimit() {
    const monthsArray = [];
    const mm = monthCounter();

    for (let i = 0; i < 12; i++) {
      monthsArray.push(mm())
    }
    return monthsArray;
  }

  return (
    <div className="table__month_list">
      <div></div>
      {
        monthLimit()?.map((e, i) => <div key={i} className='table__month_item'>{e}</div>)
      }

    </div>
  );
};

export default TableMonths;