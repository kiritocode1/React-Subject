import React from "react";
// import { useSpring, animated as a } from "react-spring";



const NavbarLg = () => {




    return (<div>
        large
    </div>);
}

const NavbarMd = () => {
    return (<div className="flex">
        Medium
    </div>)
};


const NavbarSm = () => {
    return (<div className="flex">
        
    </div>)
};







const Navbar = () => {
    return (<div className="bg-black  font-mono text-white flex justify-center w-full">
        <div className="hidden lg:flex"><NavbarLg/></div>
        <div className="hidden md:flex lg:hidden"><NavbarMd/></div>
        <div className="md:hidden sm:flex"><NavbarSm/></div>
    </div>)
};
export default Navbar;