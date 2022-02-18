// import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from "react-spring";
import Hii from "./Routes/exp";
import { useState } from "react";



function App() {
  const [vis, setvis] = useState(false);
    const styles = useSpring({
      loop: true,
      borderRadius: vis ? 16 : 90,
      width: vis ? 70 : 180,
      height: vis ? 70 : 180,
      backgroundColor: vis ? "green" : "yellow",
      color: vis ? "blue" : "brown",
      fontSize:vis?"20px":"100px",
    delay:200,
  })

  return (
    <div className="App  h-96  flex flex-col justify-center items-center">
      <animated.div style={{

        backgroundColor: "#2b3148", 
        color:"white",
        ...styles,
      }} className="flex justify-center  items-center font-mono">
        hii
      </animated.div>
      <button onClick={()=>setvis(!vis)}>
        set
      </button>
    <Hii name={vis}/>
    </div>
  );
}

export default App;
