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
            <th>تاید شده</th> 
            <th >ساعت کاری</th> 
            <th>روز</th>                  
        </tr>
      </thead>
      <tbody>
        {/* {form()} */}
        {props.calarray.forEach((item,i)=>{
          
        })
        }
      </tbody>
    </Table>
  )
}

export default Tab