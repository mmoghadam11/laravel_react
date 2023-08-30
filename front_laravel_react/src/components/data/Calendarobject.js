import React,{useState } from "react";
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

    

function Calendarobject(props) {
    const [weeksday, setWeeksday] = useState(['شنبه','یکشنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنج‌شنبه','جمعه']);
    

    // mage empty days
    function empty(){
        let blanks = [];
        for (let i = 0; i < props.dayNum; i++) {
          blanks.push(
            <td key={i+200} className="calendar-day empty">{""}</td>
          );
        }
        return blanks;
    }
    // manage days of month
    function days(){
        let rows = [];
        let cells = empty();
        let array=props.calarray;

        // console.log(array);
        array!==null&&array.forEach((row, i) => {
            if (row.day !== 'شنبه') {
              cells.push(
                <td key={i+"1000"} className="calendar-day" data={row.data}>
                  {/* {console.log(row.data)} */}
                    <Button  variant={`${row.flag? "outline-dark" :""} d-inline rounded-circle`} onClick={() =>props.onShow(row.data,row.dayNum,row.time)} >
                            {row.dayNum}
                    </Button>
                </td>
                ); // if index not equal 7 that means not go to next week
            } else {
              rows.push(<tr key={'+'+i}>{cells}</tr>); // when reach next week we contain all td in last week to rows 
              cells = []; // empty container 
              cells.push(
                <td key={i} className="calendar-day" data={row.data}>
                    <Button  variant={`${row.flag? "outline-dark":""} d-inline rounded-circle`} onClick={() =>props.onShow(row.data,row.dayNum,row.time)} >
                            {row.dayNum}
                    </Button>
                </td>
                ); // in current loop we still push current row to new container
            }
            if (i === array.length - 1) { // when end loop we add remain date
              rows.push(<tr key={'++'+i}>{cells}</tr>);
            }
          });
        return rows;
    }




  return (
    <Table borderless size="sm">
      <thead>
        <tr>
          {weeksday.map((day, index) => (
            <th key={index+'+'}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {days()}
      </tbody>
    </Table>
  )
}

export default Calendarobject