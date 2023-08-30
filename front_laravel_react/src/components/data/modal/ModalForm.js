import React,{useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import datapost from './accessdata';
import './ModalForm.css';

function ModalForm(props) {
  
  function hourFormat(e) {
    let h = parseInt(e.target.value);
    if(e.target.matches('#startHour')){
      h>parseInt(end_h)&&(h=parseInt(end_h));
      h<0 && (h=0);
      isNaN(h)&&(h=0);
    }else{
      h>23&&(h=23);
      h<parseInt(start_h)&&(h=parseInt(start_h));
      isNaN(h)&&(h=23);
    }
    e.target.matches('#startHour')?setStart_h(h):setEnd_h(h);
  }
  function minFormat(e) {
    let m = parseInt(e.target.value);
    m>59&&(m=59);
    m<0 && (m=0);
    isNaN(m)&&(m=0);
    e.target.matches('#startMin')?setStart_m(m):setEnd_m(m);
  }
  function stringToTime(){
    console.log('modalData=>',props.modalData);
    if(props.modalData!==null){
      const text=props.modalData.H;
      const time=text.split('-');
      let t1=time[0].split(':');
      let t2=time[1].split(':');
      setStart_h(parseInt(t1[0]));
      setStart_m(parseInt(t1[1]));
      setEnd_h(parseInt(t2[0]));
      setEnd_m(parseInt(t2[1]));
    }else{
      setStart_h(parseInt(0));
      setStart_m(parseInt(0));
      setEnd_h(parseInt(0));
      setEnd_m(parseInt(0));
    }
  }
  useEffect(() => {
    //Runs on every render
    stringToTime();
  },[props.modalData]);

  // const save = (e) => {
  //   e.preventDefault();

  //   let hostName = "";
  //     if (process.env.NODE_ENV === "development") {
  //       hostName = "http://localhost:8000/";
  //     } else if (process.env.NODE_ENV === "production") {
  //       hostName = "http://localhost:8000/";
  //     }
      
  //   axios.defaults.withCredentials = true;
  //   axios.defaults.headers.post['Content-Type'] ='application/json';
  //   axios.defaults.headers.post['Accept'] ='application/json';
  //   axios.defaults.withCredentials = true;
    
  //       axios
  //         .post(hostName + "api/saveDay", {
  //           name: userNameInput,
  //           email: userEmail,
  //           password: userPassword,
  //         })
  //         .then(
  //           (response) => {
  //             console.log("User_Token",response.data);
  //             localStorage.setItem("User_Token", JSON.stringify(response.data.access_token));
  //             setToken(localStorage.getItem("User_Token"));
  //             localStorage.setItem("User_data", JSON.stringify(response.data.user));
  //           },    
  //   );
  // };

  const [start_h, setStart_h] = useState(0);
  const [start_m, setStart_m] = useState(0);
  const [end_h, setEnd_h] = useState(0);
  const [end_m, setEnd_m] = useState(0);

  return (
    <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>روز {props.day.num}ام {props.month} ماه</Modal.Title>
        </Modal.Header>
        {/* onSubmit={(e) => save(e)} */}
        <Form onSubmit={(e) => {datapost(e,start_h,start_m,end_h,end_m)}}>
        <Modal.Body>
            <input type="hidden" name="daynum" id='daynum' value={props.day.full} />
            <Form.Group className="mb-3" id="">

              <Form.Label className='timeLable'>شروع ساعت کاری</Form.Label>
              <div className='Timeplace'>
                <div className='hourPlace'>
                  <div className='hr_up'
                  onClick={() =>start_h===23||parseInt(start_h)>=parseInt(end_h)?setStart_h(0):setStart_h(parseInt(start_h)+1)}
                  ></div>
                      <Form.Control
                        name='start-hour'
                        type="input"
                        // pattern="[0-9]+"
                        value={start_h<10?'0'+start_h:start_h}
                        onChange={hourFormat}
                        className='hour'
                        id='startHour'
                      />
                  <div className='hr_down'
                  onClick={() =>start_h===0?(setStart_h(end_h),setStart_m(end_m)):setStart_h(start_h-1)}
                  ></div>
                </div>
                  
                  <div className='seperator'>:</div>

                <div className='minPlace'>
                  <div className='min_up'
                  onClick={() =>{
                    if(start_m===59){
                      setStart_m(0);
                      start_h===23?setStart_h(0):setStart_h(start_h+1)
                    }
                    else
                    setStart_m(parseInt(start_m)+1);
                  }}
                  ></div>
                      <Form.Control
                        name='start-min'
                        type="text"
                        pattern="[0-9]+"
                        value={start_m<10?'0'+start_m:start_m}
                        onChange={minFormat}
                        autoFocus
                        className='min'
                        id='startMin'
                      />
                  <div className='min_down'
                  onClick={() =>start_m===0?setStart_m(59):setStart_m(start_m-1)}
                  ></div>
                </div>  
                  
              </div>
              {/* <div class="break"></div>  */}
              {/* <Form.Control
                type="time"
                placeholder={`${props.modalData? props.modalData.user:"null"}`}
                autoFocus
              /> */}
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="endTime">
              <Form.Label className='timeLable'>پایان ساعت کاری</Form.Label>
              <div className='Timeplace'>
                <div className='hourPlace'>
                    <div className='hr_up'
                    onClick={() =>end_h===23?(setEnd_h(start_h),setEnd_m(start_m)):setEnd_h(parseInt(end_h)+1)}
                    ></div>
                        <Form.Control
                          name='end-hour'
                          type="text"
                          pattern="[0-9]+"
                          value={end_h<10?'0'+end_h:end_h}
                          onChange={hourFormat}
                          className='hour'
                          id='endHour'
                        />
                    <div className='hr_down'
                    onClick={() =>end_h===0||parseInt(end_h)<=parseInt(start_h)?setEnd_h(23):setEnd_h(end_h-1)}
                    ></div>
                </div>
                
                <div className='seperator'>:</div>

                <div className='minPlace'>
                  <div className='min_up'
                  onClick={() =>{
                    if(end_m===59){
                      setEnd_m(0);
                      end_h===23?setEnd_h(0):setEnd_h(end_h+1)
                    }
                    else
                    setEnd_m(parseInt(end_m)+1);
                  }}
                  ></div>
                      <Form.Control
                        name='end-min'
                        type="text"
                        pattern="[0-9]+"
                        value={end_m<10?'0'+end_m:end_m}
                        onChange={minFormat}
                        autoFocus
                        className='min'
                        id='endMin'
                      />
                  <div className='min_down'
                  onClick={() =>end_m===0?setEnd_m(59):setEnd_m(end_m-1)}
                  ></div>
                </div>
                
              </div>
              
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="control id"
            >
              <Form.Label id='text'>توضیحات تکمیلی</Form.Label>
              <Form.Control name='do' as="textarea" rows={3} />
            </Form.Group>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            بستن
          </Button>
          <Button variant="primary" type="submit" value="submit">
            ذخیره تغیرات
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
  )
}
export default ModalForm