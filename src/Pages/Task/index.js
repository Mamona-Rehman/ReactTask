import React from "react";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import {BiMessageRoundedDetail } from "react-icons/bi";
import {GrTextAlignFull} from "react-icons/gr";
import {LuClock8} from "react-icons/lu"
import SideBar from "../../components/SideBar";
import { Input, Label } from "../../components/Input";


function Task() {
  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isReminderModalOpen , setIsReminderModalOpen ] =useState(false)

    const openReminderModal =()=>{
      setIsReminderModalOpen(true)
    }
    const closeReminderModal =()=>{
      setIsReminderModalOpen(false)
    }
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <>
      <section className="w-screen h-screen grid grid-cols-3  ">
        <div>
        <SideBar/>
        </div>

        <div>
          <h1 className="mt-8 text-lg font-bold text-slate-600" onClick={openModal}>
            + Add new task
          </h1>
          <h1 className="mt-3 text-lg font-bold text-slate-600">Incomplete</h1>
         
            <div class="flex items-center mb-3">
              <Input
                id="default-checkbox"
                type="checkbox"
                value=""
                varient={" Taskinput"}
              ></Input>
              <label
                for="default-checkbox"
                className="-mt-2 ml-3 text-lg font-semibold text-slate-600"
              >
                Submit my resume
              </label>
            </div>
            <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400" onClick={openReminderModal}>
              ⏰ Today, 17.00
            </p>

            <div class="flex items-center mb-3 mt-2">
              <Input
                id="default-checkbox"
                type="checkbox"
                value=""
                varient={" Taskinput"}
               
              ></Input>
              <label
                for="default-checkbox"
                className="-mt-2 ml-3 text-lg font-semibold text-slate-600"
              >
                Complete the test
              </label>
            </div>
            <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">
              ⏰ Today, 10.00
            </p>

            <div class="flex items-center mb-3 mt-2">
              <Input
                id="default-checkbox"
                type="checkbox"
                value=""
                varient={" Taskinput"}
              ></Input>
              <label
                for="default-checkbox"
                className="-mt-2 ml-3 text-lg font-semibold text-slate-600"
              >
                Meeting with Jack
              </label>
            </div>
            <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">
              ⏰ Today, 15.00
            </p>
         
            <div class="flex items-center mb-3 mt-2">
              <Input
                id="default-checkbox"
                type="checkbox"
                value=""
                varient={" Taskinput"}
              ></Input>
              <label
                for="default-checkbox"
                className="ml-3 -mt-2 text-lg font-semibold text-slate-600"
              >
               Buy a chocolate for Mom
              </label>
            </div>
            <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">
            ⏰ 24 Feb, 11.00
            </p>
            
            <div class="flex items-center mb-3 mt-2">
              <Input
                id="default-checkbox"
                type="checkbox"
                value=""
                varient={" Taskinput"}
              ></Input>
              <label
                for="default-checkbox"
                className="-mt-2 ml-3 text-lg font-semibold text-slate-600"
              >
              Facetime with Dad
              </label>
            </div>
            <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">
            ⏰ 24 Feb, 18.00
            </p>
           
           <div>
           <h1 className="mt-8 text-lg font-bold text-slate-600">
           Completed
          </h1>
          <div class="flex items-center mb-4 mt-2">
              <Input
               checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                varient={" Taskinput"}
              ></Input>
          
              <label
                for="default-checkbox"
                className="-mt-2 ml-3 text-lg font-semibold text-slate-400"
              >
       Respond to Jane email
              </label>
            </div>
            

            <div class="flex items-center mb-3 -mt-2">
              <Input
               checked
                id="checked-checkbox"
                
                type="checkbox"
                value=""
                varient={" Taskinput"}
              ></Input>
             
              
              <label
                for="default-checkbox"
                className="-mt-2 ml-3 text-lg font-semibold text-slate-400"
              >
          Rechedule weekly meeting
              </label>
            </div>
            

            <div class="flex items-center mb-3 -mt-2">
              <Input
               checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                varient={" Taskinput"}
              ></Input>
          
              <label
                for="default-checkbox"
                className="-mt-2 ml-3 text-lg font-semibold text-slate-400"
              >
           Service my bike
              </label>
            </div>
            
         
            <div class="flex items-center mb-3 -mt-2 ">
              <Input
               checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                varient={" Taskinput"}
              ></Input>
              <label
                for="default-checkbox"
                className="-mt-2 ml-3 text-lg font-semibold text-slate-400"
              >
            Recheck the agreement document
              </label>
            </div>
            
           
            
            <div class="flex items-center mb-3 -mt-2">
              <Input checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                varient=" Taskinput"
              ></Input>
                <label
                for="default-checkbox"
                className="ml-3 -mt-2 text-lg font-semibold text-slate-400"
              >
            Check the latest on Community
              </label>
             
            </div>
           
           </div>
        </div>
      </section>
      {isModalOpen && <CreateModal closeModal={closeModal} />}
      {isReminderModalOpen && <ReminderModal closeReminderModal={closeReminderModal}/>}
     
      
    </>
  );
}
export default Task;

const CreateModal = ({ closeModal , isModalOpen}) =>{
  return(
    <>
  <div id="authentication-modal" tabindex="-1"
        className={`fixed pt-0 pb-0 pl-0 pr-0 w-full h-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full `}>
           <div className="flex items-center justify-center h-screen bg-black bg-cover md:bg-opacity-50">
           <div className="relative bg-white rounded-lg shadow dark:bg-gray-100" style={{ width: '756px', height: '501px' }}>
           <div className="px-6 py-6 lg:px-8">
           <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                New Task
              </h3>
              <htmlForm className="space-y-6">
              <div className="flex justify-center items-center">
              <BiMessageRoundedDetail  color="gray" className="absolute left-40 mb-2 w-5 h-5" />
              <Input type="text"
                    className="py-5 6/12 "
                    varient="Modal"
                    placeholder="Summary" />
                </div>
                <div className="flex justify-center items-center">
              <GrTextAlignFull color="gray" className="absolute left-40 mb-14 w-5 h-5" />
              <Input type="text"
                    className="py-5 6/12 "
                    varient="ModalD"
                    placeholder="Description" />
                </div>
               
                <div className="flex justify-center items-center">
                  <LuClock8  color="gray" className=" absolute mb-2 left-40 w-5 h-5" />
                  <Input type="text"
                    className="pb-5"
                    varient="Modal"
                    placeholder="Due Date" />
                </div>
                <div className="flex flex-col items-center justify-between">
                  <Button
                    type="submit"
                    size="large"
                   
                    varient='primary'
                  >
                    Save
                  </Button>
                </div>
                < div className="flex items-center justify-center">
                            <Button
                                type="submit"
                                size='large'
                                varient="cancelbutton"
                                onClick={closeModal}
                                >
                               <Link  to ={"/task"}>Cancel</Link> 
                            </Button>
                        </div> 
                
                </htmlForm>
            </div>
            </div>
           </div>
        </div>
    </>
  )
}

const ReminderModal = ({closeReminderModal}) =>{
  return(
    <>
    <div
           className="w-96 h-32 fixed top-5 right-10 z-50 outline-none shadow focus:outline-none rounded-lg"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl  ">
              {/*content*/}
              <div className="shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
             
                {/*body*/}
               
                  <div className="w-14 h-14 bg-amber-300 rounded-2xl ml-72 mt-5">
                  <LuClock8 className="w-6 h-6 flex mt-4 ml-4 mr-4 mb-4" />
                    </div> 
                 
                <div className="-mt-28 relative p-6 flex-auto">
                  <div >
                  <p className="mt-5 text-lg font-bold text-black text-lg leading-relaxed">
                Submit my resume
              </p>
              <p className="mt-1 font-normal text-base text-slate-600 text-lg leading-relaxed">
                Send my resume to DigitalTolk
              </p>
                  </div>
            
            </div>
                <div className="flex items-center justify-end border-t border-solid border-slate-200 rounded-b bg-slate-100">
              <button
                className="font-light text-black active:bg-emerald-600 text-sm  py-3 rounded   outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeReminderModal}
               
              >
                Skip
              </button>
              <button
                className="font-normal text-black active:bg-emerald-600 text-sm px-6 py-3 rounded   outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeReminderModal}
              >
                Remind me later
              </button>
            </div>
              </div>
            </div>
          </div>
          
    </>
  )
}