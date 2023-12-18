import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TableContributionCell from './TableContributionCell';

const TableGraph = () => {

  const [data, setdata] = useState({});
  const [check, setCheck] = useState("");

  async function getdata() {
    try {
      const { data } = await axios('https://dpg.gg/test/calendar.json');
      setdata(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata()
  }, [])

  function subtractDayFromDate(date) {
    const resDate = new Date(date);
    function decreasing() {
      const result = new Date(resDate);
      resDate.setDate(resDate.getDate() - 1);

      return result;
    }
    return decreasing;
  }



  function addDaysToDate(date, days) {
    const result = new Date(date);
    result.setDate(date.getDate() + days);
    const dateObj = {
      date: result,
      weekDay: result.getDay(),
    }
    return dateObj;
  }



  function getDateObj(date) {
    const today = new Date(date);
    const formattedDate = {
      date: date,
      weekDay: today.getDay(),
    }
    return formattedDate;
  }



  function dateFormatting(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0')

    return `${year}-${month}-${day}`;
  }



  function renderCells() {
    let date = getDateObj(new Date());
    if (date.weekDay !== 0) {
      date = addDaysToDate(new Date(), 7 - date.weekDay);
    }

    const getMinusOneDay = subtractDayFromDate(date.date);
    const table = [];

    for (let i = 0; i < 51; i++) {
      const columns = [];
      for (let j = 0; j < 7; j++) {
        columns.push(getMinusOneDay());
      }
      table.push(columns.reverse());
    }
    return table.reverse();
  }



  return (
    <div className='table__graph'>
      {/* WeekDays */}
      <div className="table__graph_column">
        <div className="table__graph_item week-mo">
          Пн
        </div>
        <div className="table__graph_item week-we">
          Ср
        </div>
        <div className="table__graph_item week-fr">
          Пт
        </div>
      </div>
      {/* WeekDays */}
      {
        data ?
          renderCells()?.map((e, i) => (
            <div className="table__graph_column" key={i}>
              {
                e?.map((e, i) => <TableContributionCell key={i} date={e} data={data[`${dateFormatting(e)}`]} check={check} setCheck={setCheck} />)
              }
            </div>
          ))
          : null
      }
    </div>
  );
};

export default TableGraph;