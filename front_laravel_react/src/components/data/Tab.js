import React from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
// function form(){
//   let rows = [];
//   let array=props.calarray;
//   array.forEach((row, i) => {
//     rows
//   })

// }
function Tab(props) {
  return (
    <Table borderless size="sm">
      <thead>
        <tr>
            <th>تاید شده🖊</th> 
            <th >ساعت کاری⏲</th> 
            <th>روز📅</th>                  
        </tr>
      </thead>
      <tbody>
        {/* <tr><td className="calendar-day">hhh</td></tr> */}
        {/* {form()} */}
        {props.calarray.map((item,i)=>
          <tr key={i} data={item.data}>
            <td className="calendar-day" >
              {/* {console.warn(item)} */}
              {item.data.hasOwnProperty(props.Name)?item.data[props.Name]['val']===true?'🟢':'🟡':'-'}
            </td>
            <td className="calendar-day" >
              {/* {console.warn(item.data)} */}
              {item.data.hasOwnProperty(props.Name)?item.data[props.Name]['H']:'--:--'}
            </td>
            <td className="calendar-day" >
              #{item.dayNum}
            </td>
          </tr>
        )
        }
      </tbody>
    </Table>
  )
}

export default Tab