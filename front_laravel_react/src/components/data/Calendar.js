import React,{ useContext, useEffect,useState } from "react";
import axios from "axios";
import { AppContext } from "../../contexts/AppContext";
import { Row,Col } from 'react-bootstrap';
import Calendarobject from './Calendarobject.js';
import Tab from './Tab.js';
import ModalForm from './modal/ModalForm.js';
import Spin from './Spin.js';
// import { useMediaQuery } from 'react-responsive';


function Calendar(props) {
    const appContext = useContext(AppContext);
    const {
        userName
      } = appContext;
      const [calendararray, setCalendararray] = useState(null);
      const [month, setMonth] = useState(null);
      const [dayweek, setDayweek] = useState(null);
      const [token, setToken] = useState(localStorage.getItem('User_Token'));

    async function fetchData() {
      let hostName = "";
      if (process.env.NODE_ENV === "development") {
        hostName = "http://localhost:8000/";
      } else if (process.env.NODE_ENV === "production") {
        hostName = "http://localhost:8000/";
      }
      axios.defaults.withCredentials = true;
      axios.defaults.headers.post['Content-Type'] ='application/json';
      axios.defaults.headers.post['Accept'] ='application/json';
      axios.defaults.headers.post['Authorization'] =`Bearer ${token}`;
      return axios.post(hostName + "api/user/time").then(
          (response) => {
                  // ==========
                  //  Calendar
                  // ==========
                  setCalendararray(response.data.calendar);
                  setMonth(response.data.month);
                  setDayweek(response.data.dayofweek);
                  // console.log("calendar",calendararray);  
                  console.log("b",response);
          },
          (error) => {
            console.warn(error);
          }
          );
      }
    
      useEffect(() => {
        fetchData();
      },[]);
  
  // data for modal component   
  const [dataprop, setDataprop] = useState(null);
  const [seleacted, setSelected] = useState(null);    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (row,d) => {
    setShow(true);
    row.hasOwnProperty(userName)?setDataprop(row[userName]):setDataprop(null);
    setSelected(d);
    // console.log('dataprop',dataprop,d)
  }
  return (
    <Row className='' style={{height:"65vh"}}>
      {/* <h3>{useMediaQuery({ query: `(max-width: 760px)` })}</h3> */}
      {calendararray===null?<Col className="d-flex align-items-center justify-content-center"><Spin/></Col>:
      <Col sm={{span:10 , offset:1}}  >
        <Row className="glass" style={{overflow:'auto',height:'25em'}}>
          {props.flag==='cal'?
            <Col sm="12" md={{span:8 , offset:2}} style={{overflow:'auto'}} >
              <h4>{month} ماه</h4>
              <Calendarobject dayNum={dayweek} calarray={calendararray} onShow={handleShow} modalData={[dataprop, setDataprop]} />
            </Col>
            :
            <Col sm="12" md={{span:8 , offset:2}}  >
              <h4> جدول {month}ماه</h4>
              <Tab Name={userName} dayNum={dayweek} calarray={calendararray}/>
            </Col>}
        </Row>
        <Row>
          <Col>
              <ModalForm show={show} onClose={handleClose} modalData={dataprop} day={seleacted} month={month}/>
          </Col>
        </Row>
      </Col>
        
      
      }
      
    </Row>
  )
}

export default Calendar