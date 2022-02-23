// import logo from './logo.svg';
import './App.css';
// import {useState} from "react";
import { useSpring, animated as a } from 'react-spring';
// import { useState } from "react";
// import Hii from './Routes/exp';
import Navbar from './Navbar';
import mainPhoto from './mainPhoto.png';
import { FaLongArrowAltRight } from "react-icons/fa";
function App() {
  // const [vis, setvis] = useState(false);
  const props = useSpring({ to: { opacity: 1 ,fontSize:60}, from: { opacity: 0,fontSize:100 }, duration:3000});
  
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
  duration: 1000,
    })

  const flower = useSpring({
    from: {
      opacity: 0,
      y: -100,
      fontSize:0,
    },
    to: {
      opacity: 1,
      y: 0,
      fontSize:100,
    },
    delay:2000,
    
})
  const gaara = useSpring({
      from: {
      opacity: 0,
      y: -100,
      
    },
    to: {
      opacity: 1,
      y: 10,
    },
    delay:3000,
    
})
  const gaara2 = useSpring({
      from: {
      opacity: 0,
      y: -100,
      rotate:-180
      
    },
    to: {
      opacity: 1,
      y: 10,
      rotate:-30
    },
    delay:3900,
    
})
  const gart2 = useSpring({
    from: {
    x:0
    },
    to: {
      x:13
    },
    delay:4000
})

  return (<div className='App flex flex-col justify-center items-center bg-black'>
    <Navbar/>
    <div className=' h-96  flex wrap flex-col justify-center items-center w-full bg-inherit text-white font-mono'>
    <a.h1 style={props}>hello world <strong className="animate-ping font04">[^‿^]</strong> .</a.h1>
    <a.p className=" w-full" style={misk}>
        hello is something i wanted to say that , it's been 60 minuites and<br /> <a.strong style={gradients}>i haven't said something for a lot of time</a.strong>
      </a.p>
    </div>
    
    
    
    <div className="transition01 w-full h-[90rem] text-white  font03 px-2 justify-center" >
      <a.div className="font02 w-full flex justify-center   text-9xl  animate-pulse" style={flower} >About ME !</a.div>
      <a.div style={gaara}>im a commerce student from far away land of bhiwandi , 
      My Real name is Mosmi Kathawale. im a passionate developer , artist and an absolutely awesome baker, 
      <br /> im 16 years old [as of 2021-22]<br />
      in the virtual world i look like this <b className="font04 bold text-xl">[^_^]</b> <br/>
        but in reality i look like this:</a.div> 
      <div className="pt-6 flex items-center justify-center bg-inherit gap-4 mt-2 z-0">
        <a.img src={mainPhoto} alt="main" className=' object-fill rounded-lg shadow-lg decoration-white z-0' style={gaara2}/>
      <a.h1 className="animate-pulse" style={gart2}>there is a lot more to know about me <br/> but you need to know me in person before that</a.h1>
      </div>



    </div>
    <div className='bg-white h-96 text-9xl  w-full font01 pt-6'>
      MY Family
    </div>
    <div className='bg-white text-black w-full h-96 text-3xl font01'>
      i have 5 people in my family
      <div className="text-xl w-full bg-inherit text-left px-2 mt-2 flex items-center">
        My mom's Name is Sanjeevani kathawale she looks like this <FaLongArrowAltRight />  <a className="bold hover:text-2xl transition ease-in-out animate-pulse flex " href="https://www.linkedin.com/in/sanjeevani-kathawale-215995ab/?originalSubdomain=in" target="blank">(●'◡'●)</a>
        
      </div>
            <div className="text-xl w-full bg-inherit text-left px-2 mt-2 flex items-center">
        she is a b Ed graduate and  designs curriculum for children in schools. 
      </div>
    <div className="text-xl w-full text-right mt-6 font01 text-black flex items-end justify-end px-2">
        My Brother's name is  Kathawale Aryan and he looks like this <FaLongArrowAltRight />
        <a href="https://github.com/kiritocode1" className="text-red-500">•/_\•</a>
      </div>
    </div>
  </div>);
}
export default App;
