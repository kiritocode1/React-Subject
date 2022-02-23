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
    <div className=' h-96  flex wrap flex-col justify-center items-center w-full bg-inherit text-white font-mono font01'>
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
      <div className="text-xl w-full bg-inherit text-left px-2 mt-6 flex items-center">
        My mom's Name is Sanjeevani kathawale she looks like this <FaLongArrowAltRight />  <a className="bold hover:text-2xl transition ease-in-out animate-pulse flex " href="https://www.linkedin.com/in/sanjeevani-kathawale-215995ab/?originalSubdomain=in" target="blank">(●'◡'●)</a>
        
      </div>
            <div className="text-xl w-full bg-inherit text-left px-2 mt-2 flex items-center">
        she is a b Ed graduate and  designs curriculum for children in schools. <br/> she loves watching sit-coms and listen to indian music , radio , dances etc .
      </div>
    <div className="text-xl w-full text-right mt-6 font01 text-black flex  justify-end px-6 items-center ">
        My Brother's name is  Kathawale Aryan and he looks like this <FaLongArrowAltRight />
        <a href="https://github.com/kiritocode1" className="hover:text-black text-gray-900 bold font01 hover:text-2xl animate-pulse">•/_\•</a><br />
      </div>
      <div className="text-xl w-full text-right  font01 text-black flex items-end justify-end px-6">
        he is a full stack developer . php developer . <br/> android developer , ios developer , system architexture , red hat and much more.<br/> he likes cookies and coding , with music on side . 
      </div>
      <div className="text-xl w-full bg-inherit text-left px-2 mt-6 flex items-center">
        my Aunt's name is Aparna Kathawale and she  looks like this  <FaLongArrowAltRight /> <a href="https://github.com/kiritocode1" className="hover:text-black text-red-600 bold font01 hover:text-2xl animate-pulse">(ˉ﹃ˉ) </a><br />
      </div>
      <div className="text-xl w-full bg-inherit text-left px-2  flex items-center">
        she is a fantastic chef and also a very good housewife ,<br/> she is really a great help and makes delish foods for all of us to eat , she is my third favourite person in this world,<br/> ( first is john cena ).
      </div>
      <div className="text-xl w-full bg-inherit text-right px-6  flex items-center justify-end">
        my Grand-father's name is Kishan kathawale , he  looks like this <FaLongArrowAltRight/><a href="https://google.com" className="bg-green-500 animate-pulse hover:text-2xl">(T_T)</a>
      </div>
      <div className="text-xl w-full bg-inherit text-right px-6  flex items-center justify-end">
        he is a landlord , he leases land for a living , <br/> he loves fish and chicken <br/> he does'nt love to fish , i mean he loves to eat the fish  
      </div>
      <div className="text-xl w-full bg-inherit text-left px-2  flex items-center mt-6">
        i have a father , he ... exists . and looks like this <FaLongArrowAltRight/><a href="https://google.com" className="text-purple-500 animate-pulse hover:text-2xl">ಥ_ಥ</a>
      </div>
      <div
      className=" w-full bg-inherit">
      <div className="transition02 h-[90rem] w-full flex flex-col items-center justify-end text-[#69fabc] pb-40">
          <div className="text-9xl pt-3">
            my friends
          </div>
          <div className="w-full  mt-20">
            i dont have any...
          </div>
        </div>
            <div className="transition03 h-[70rem] w-full flex flex-col items-center justify-end text-[#001220]">
          <div className="text-9xl pt-3">
            my friends
          </div>
          <div className="w-full  mt-20">
            i dont have any...
          </div>
        </div>
      
    </div>
    </div>


  </div>
  
  );
}
export default App;
