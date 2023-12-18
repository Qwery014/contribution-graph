import React, { useEffect, useState } from 'react';
import { colors, daysOfWeek, fullMonths } from '../../../helpers/consts';

const TableContributionCell = ({ date, data, check, setCheck }) => {

  const [formattedDate, setFormattedDate] = useState("")

  function dateFormatting(date) {
    const year = date.getFullYear();
    const month = (date.getMonth());
    const day = date.getDate().toString().padStart(2, '0');
    const weekDay = date.getDay();

    return `${daysOfWeek[weekDay]}, ${fullMonths[month]} ${day}, ${year}`;
  }
  useEffect(() => {
    setFormattedDate(dateFormatting(date))
  }, [])

  function colorPicker() {
    if (!data) {
      return colors[0];
    } else if (data <= 9) {
      return colors[1];
    } else if (data <= 19) {
      return colors[2];
    } else if (data <= 29) {
      return colors[3];
    } else if (data >= 30) {
      return colors[4];
    } else {
      return colors[0];
    }
  }

  return (
    <div className='table__graph_item'>
      <input type="checkbox" name="cell" className='checkbox' id={formattedDate} checked={check === formattedDate} onClick={() => setCheck(check != formattedDate ? formattedDate : "")} />
      <label className="table__graph_cell" htmlFor={formattedDate} style={{ backgroundColor: colorPicker(data) }}></label>
      <div className="table__graph_tooltip">
        <p>{data ? data : "No"} contributions</p>
        <p>{formattedDate}</p>
        <div className="table__graph_tooltip-corner"></div>
      </div>
    </div>
  );
};

export default TableContributionCell;