import React,{useEffect} from 'react';
import Vnavbar from './Masterlayout/Vnavbar';
import Vsidebar from './Masterlayout/Vsidebar';
import Vfooter from './Masterlayout/Vfooter';
import image from '../image/videoimg.png';
import { useHistory } from 'react-router-dom';


export default function Landing() {
  const history = useHistory() 
  // window.location.reload();
  function join(e){
  //  e.preventDefault();
    history.push(`/main`);
    window.location.reload(false);
  }
  return (
    <div id="root">
      <div id="main-wrapper">
        <Vnavbar />
        <Vsidebar />
        <div class="content-body">
          {/* <!-- row --> */}
          <div class="container-fluid">
            <div className='row' style={{ marginLeft: '2%' }}>
              <div style={{ marginTop: '5%' }} className='col-sm-6 '>
                <h1 style={{ marginBottom: '1.5rem' }}>Realcoderz Meet</h1>
                <p style={{ fontSize: '17px' }}>It's an online plateform that allows users from diffrent locations to hold face to face  <br></br>meetting without having to move to a single location together and even share files.</p>
                <p style={{ marginTop:'2%' }}>let's meet through us.</p>
                <div style={{ marginRight: '5px',marginTop:'4%' }}>   
                <button type="button" onClick={(e)=>{console.log('hii');join();}} class="btn btn-primary">Join meetting</button> &nbsp;&nbsp; 
                <button type="submit" class="btn btn-primary">Create meetting</button>
                </div>
              </div>
              <div className='col-sm-6 mt-3'>
                <img src={image} style={{ width: '100%', height: '100%' }}></img>
              </div>
            </div>
          </div>
        </div>
        <Vfooter />
      </div>
    </div>
  )
}
