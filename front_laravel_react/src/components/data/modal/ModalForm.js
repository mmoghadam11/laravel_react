import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './ModalForm.css';

function ModalForm(props) {
  
  function hourFormat(e) {
    let h = parseInt(e.target.value);
    h>23&&(h=23);
    h<0 && (h=0);
    isNaN(h)&&(h=0);
    e.target.matches('#startHour')?setStart_h(h):setEnd_h(h); 
  }
  function minFormat(e) {
    let m = parseInt(e.target.value);
    m>59&&(m=59);
    m<0 && (m=0);
    isNaN(m)&&(m=0);
    e.target.matches('#startMin')?setStart_m(m):setEnd_m(m);
  }
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
          <Modal.Title>روز {props.day}ام {props.month} ماه</Modal.Title>
        </Modal.Header>
        {/* onSubmit={(e) => save(e)} */}
        <Form >
        <Modal.Body>
          
            <Form.Group className="mb-3" id="">

              <Form.Label className='timeLable'>شروع ساعت کاری</Form.Label>
              <div className='Timeplace'>
                <div className='hourPlace'>
                  <div className='hr_up'
                  onClick={() =>start_h===23?setStart_h(0):setStart_h(parseInt(start_h)+1)}
                  ></div>
                      <Form.Control
                        type="input"
                        // pattern="[0-9]+"
                        value={start_h<10?'0'+start_h:start_h}
                        onChange={hourFormat}
                        className='hour'
                        id='startHour'
                      />
                  <div className='hr_down'
                  onClick={() =>start_h===0?setStart_h(23):setStart_h(start_h-1)}
                  ></div>
                </div>
                  
                  <div className='seperator'>:</div>

                <div className='minPlace'>
                  <div className='min_up'
                  onClick={() =>{
                    if(start_m===59){
                      setStart_m(0);
                      start_h===0?setStart_h(23):setStart_h(start_h-1)
                    }
                    else
                    setStart_m(parseInt(start_m)+1);
                  }}
                  ></div>
                      <Form.Control
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
                    onClick={() =>end_h===23?setEnd_h(0):setEnd_h(parseInt(end_h)+1)}
                    ></div>
                        <Form.Control
                          type="text"
                          pattern="[0-9]+"
                          value={end_h<10?'0'+end_h:end_h}
                          onChange={hourFormat}
                          className='hour'
                          id='endHour'
                        />
                    <div className='hr_down'
                    onClick={() =>end_h===0?setEnd_h(23):setEnd_h(end_h-1)}
                    ></div>
                </div>
                
                <div className='seperator'>:</div>

                <div className='minPlace'>
                  <div className='min_up'
                  onClick={() =>{
                    if(end_m===59){
                      setEnd_m(0);
                      end_h===0?setEnd_h(23):setEnd_h(end_h-1)
                    }
                    else
                    setEnd_m(parseInt(end_m)+1);
                  }}
                  ></div>
                      <Form.Control
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
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            بستن
          </Button>
          <Button variant="primary" onClick={props.onClose}>
            ذخیره تغیرات
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
  )
}
export default ModalForm