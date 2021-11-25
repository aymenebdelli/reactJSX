import React from 'react';
import MyImage from '../src/istockphoto2.jpg';
import './App.css';

function App() {
  return (
    <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
      <h1 className='title red' >Aymen Ebdelli</h1>
      <br />
      <img src={MyImage} alt='istockphoto2' width='50%' style={{position:'relative' , left:'380px'}}/>
      <br />
      <img src='/istockphoto1.jpg' alt='istockphoto1'  width='50%' style={{position:'relative' , left:'380px'}}/>
      <br/>
      <video width='700' height='500' controls style={{position:'relative' , left:'380px'}}>
        <source src='https://media.istockphoto.com/videos/night-city-time-lapsepanning-left-video-id849372376' type='video/mp4' ></source>
      </video>
    </div>
  );
}

export default App;
