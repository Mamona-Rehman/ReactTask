import React from "react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { PiNotepadBold } from "react-icons/pi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import SideBar from "../../components/SideBar";


const Location = () =>{
    return(
        <>
        <section className="w-screen h-screen grid grid-cols-3  ">
        <div>
         <SideBar/>
        </div>

        <div>
          <h1 className="mt-9 text-lg font-bold text-slate-600">
          + Check In
          </h1>
          <h1 className="mt-4 text-lg font-bold text-slate-600">Current location</h1>
         
            <div class="flex items-center mb-4 mt-2">
            <p>📍 </p>
              <label
                for="default-checkbox"
                className="ml-5 text-lg font-semibold text-slate-600"
              >
                Pustegränd, Stockholm, SE
              </label>
            </div>
            <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">
            59.3293° N, 18.0686° E
            </p>
           
           <div>
           <h1 className="mt-8 text-lg font-bold text-slate-600">
           Previous location
          </h1>

          <div class="flex items-center mb-4 mt-2">
           
           <p>📍 </p>
             <label
               for="default-checkbox"
               className="ml-5 text-lg font-semibold text-slate-600"
             >
               Halsingegätan, Stockholm, SE
             </label>
           </div>
           <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">
           59.3293° N, 18.0686° E
           </p>
           
           </div>

           <div class="flex items-center mb-4 mt-2">
           <p>📍 </p>
             <label
               for="default-checkbox"
               className="ml-5 text-lg font-semibold text-slate-600"
             >
          Pustegränd, Stockholm, SE
             </label>
           </div>
           <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">
           59.3293° N, 18.0686° E
           </p>

           <div class="flex items-center mb-4 mt-2">
           
           <p>📍 </p>
             <label
               for="default-checkbox"
               className="ml-5 text-lg font-semibold text-slate-600"
             >
          Långa Gatan, Stockholm, SE
             </label>
           </div>
           <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">
           59.3293° N, 18.0686° E
           </p>

           <div class="flex items-center mb-4 mt-2">
           <p>📍 </p>
             <label
               for="default-checkbox"
               className="ml-5 text-lg font-semibold text-slate-600"
             >
          Djurgården, Stockholm, SE
             </label>
           </div>
           <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">
           59.3293° N, 18.0686° E
           </p>

           <div class="flex items-center mb-4 mt-2">
           <p>📍 </p>
             <label
               for="default-checkbox"
               className="ml-5 text-lg font-semibold text-slate-600"
             >
          Svartensgatan, Stockholm, SE
             </label>
           </div>
           <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">
           59.3293° N, 18.0686° E
           </p>


        </div>
      </section>
        

        </>
    )
}

export default Location