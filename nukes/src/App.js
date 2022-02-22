// import logo from './logo.svg';
import './App.css';
// import {useState} from "react";
import { useSpring, animated as a } from 'react-spring';
// import { useState } from "react";
// import Hii from './Routes/exp';
import Navbar from './Navbar';

function App() {
  // const [vis, setvis] = useState(false);
  const props = useSpring({ to: { opacity: 1 ,fontSize:80}, from: { opacity: 0,fontSize:100 }, duration:3000});
  
  const misk = useSpring({
    from: {
      opacity: 0,

      color:"gray",
    },
    to: {
      opacity: 1,
      color: "white",
    },
    duration:2000,
  })

const gradients = useSpring({
  from: {
          marginTop: 100,
          opacity:0,
    fontSize: 0,
            y:1000
        },
  to: {
          marginTop: 100,
          opacity:1,
    fontSize:15,
    color: "#c70039",
            y:0
  },
  duration: "13s",
    })





  
  return (<div className='App flex flex-col justify-center items-center bg-black'>
    <Navbar/>
    <div className=' h-96  flex flex-col justify-center items-center w-full bg-black text-white font-mono'>
    <a.h1 style={props}>hello world <strong className="animate-ping">[^‿^]</strong> .</a.h1>
    <a.p className=" w-full" style={misk}>
        hello is something i wanted to say that , it's been 60 minuites and<br /> <a.strong style={gradients}>i haven't said something for a lot of time</a.strong>
      </a.p>
      </div>
  </div>);
}
export default App;
