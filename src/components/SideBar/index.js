import React from "react";
import { Link, useLocation} from "react-router-dom";
import { Button } from "../Button";
import { PiNotepadBold } from "react-icons/pi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {FiLogOut } from "react-icons/fi";

const SideBar=()=>{
    const location = useLocation();
    const isLocationPage = location.pathname === "/location";
    return(
    <>
    


<aside id="default-sidebar" class="fixed top-0 left-0  w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full py-4 overflow-y-auto bg-white ">
      <ul class="space-y-2 font-medium">
         <li>
         <div>
         <Link to={"/task"}>
            <Button type="submit" size="large" varient={isLocationPage ? "Lbutton" : "Tbutton"}>
              <PiNotepadBold className="w-5 h-6 mr-3" />
              Task
            </Button>
            </Link>
          </div>
         </li>
         <div>
            <Button type="submit" size="large" varient={isLocationPage ? "Tbutton":"Lbutton"}>
              <HiOutlineLocationMarker className="w-5 h-6 mr-3 hover:color-white" />
              <Link to={"/location"}>Location</Link>
            </Button>
          </div>
         <li>
         <div className="mt-80">
            <Button type="submit" size="large" varient="Lbutton">
              <FiLogOut className="w-5 h-6 mr-3" />
              <Link to={"/"}>Logout</Link>
            </Button>
          </div>
         </li>        
      </ul>
   </div>
</aside>



    </>
    )
} 


export default  SideBar;
