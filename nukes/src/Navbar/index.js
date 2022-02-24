import React from "react";
import { useSpring, animated as a } from "react-spring";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { RiWhatsappFill } from "react-icons/ri";
import { BsSnapchat } from "react-icons/bs";
import { ImCross } from "react-icons/im";
const NavbarLg = () => {
    return (<div className="w-full flex justify-end gap-3 bg-black px-2 pt-2">
        <a href="https://wa.me/+917058050364?text=Hi%27,%20like%20to%20chat%20with%20you" target="_blank "><RiWhatsappFill  className="text-[#25D366]"/></a>
        <a href="href=https://techcrunch.com/2014/09/29/snapchat-spam-might-make-you-feel-fat-but-at-least-its-not-snapchats-fault/" target="_blank "><BsSnapchat className="text-[#FFFC00]" /></a>
        <a href="https://www.facebook.com/mosmi.kathawale"><TiSocialFacebookCircular className="text-[#3b5998] w-4 h-4" target=" _blank"/></a>
    </div>);
}

const NavbarMd = () => {
    const [vis, setvis] = useState(false);
    const Menuelement1 = useSpring({
        width: vis ? 0 : 23,
        fontSize: vis ? 0 : 17,
        opacity:vis?0:1,
        delay:vis?200:700
    })
        const Menuelement2 = useSpring({
        width: vis ? 0 : 23,
            fontSize: vis ? 0 : 17,
        opacity:vis?0:1,
        delay:vis?150:800
        
        })
        const Menuelement3 = useSpring({
        width: vis ? 0 : 23,
            fontSize: vis ? 0 : 17,
        opacity:vis?0:1,
        delay:vis?100:900
    })
    return (<div className="flex justify-between bg-black w-full">
        <div className=" text-left text-ellipsis px-4 bg-black">
            <button  onClick={()=>setvis(!vis)}>
                {vis?<MdOutlineMenu />:<ImCross/>}
            </button>
            <div className="w-full">
                <ul className="w-full">
                    <a.li className={`w-full font01 flex items-center gap-2  text-[#3b5998]`} style={Menuelement1}>Facebook/meta</a.li>
                    <a.li className=" w-full font02 gap-2 text-[#25D366]" style={Menuelement2}>whatsapp </a.li>
                    <a.li className=" w-full font04 text-[#FFFC00]" style={Menuelement3}>snapchat</a.li>

                </ul>
            </div>
        </div>
        <div className="bg-black pr-3 font01 ">Mosmi kathawale</div>
    </div>)
};


const NavbarSm = () => {
    const [vis, setvis] = useState(false);
    const Menuelement1 = useSpring({
        height: vis ? 0 : 30,
        fontSize: vis ? 0 : 17,
        opacity:vis?0:1,
        delay:vis?50:300
    })
        const Menuelement2 = useSpring({
        height: vis ? 0 : 30,
            fontSize: vis ? 0 : 17,
        opacity:vis?0:1,
        delay:vis?60:400
        
        })
        const Menuelement3 = useSpring({
        height: vis ? 0 : 30,
            fontSize: vis ? 0 : 17,
        opacity:vis?0:1,
        delay:vis?70:500
    })
    return (<div className="flex justify-between bg-black w-full">
        <div className="w-full text-left text-ellipsis px-4">
            <button  onClick={()=>setvis(!vis)}>
                {vis?<MdOutlineMenu />:<ImCross/>}
                
            </button>
            <div className="w-full">
                <ul className="w-full">
                    <a.li className={`w-full flex items-center font01  gap-2  text-[#3b5998] `} style={Menuelement1}><TiSocialFacebookCircular/><a href="https://www.facebook.com/mosmi.kathawale" target="_blank "> Facebook/meta</a></a.li>
                    <a.li className=" w-full flex items-center font01  gap-2 text-[#25D366] "  style={Menuelement2}><RiWhatsappFill/>  <a href="https://wa.me/+917058050364?text=Hi%27,%20like%20to%20chat%20with%20you" target="_blank "> whatsapp/meta</a></a.li>
                    <a.li className=" w-full flex items-center font01  gap-2  text-[#FFFC00]"  style={Menuelement3}><BsSnapchat/> <a href="https://techcrunch.com/2014/09/29/snapchat-spam-might-make-you-feel-fat-but-at-least-its-not-snapchats-fault/" target="_blank ">   Instagram (but better) </a> </a.li>

                </ul>
            </div>
        </div>
        {/* <div>Mosmi kathawale</div> */}
    </div>)
};







const Navbar = () => {
    return (<div className="bg-black  font-mono text-white flex justify-center w-full">
        <div className="hidden lg:flex w-full"><NavbarLg/></div>
        <div className="hidden md:flex lg:hidden  w-full"><NavbarMd/></div>
        <div className="md:hidden sm:flex w-full"><NavbarSm/></div>
    </div>)
};
export default Navbar;