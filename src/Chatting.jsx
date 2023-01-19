import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import pic1 from "./assets/1.jpg";
import pic2 from "./assets/2.jpg";
import pic3 from "./assets/3.jpg";
import pic4 from "./assets/4.jpg";
import pic7 from "./assets/7.jpg";
import pic8 from "./assets/8.jpg";
import pic9 from "./assets/9.jpg";

function Chatting(props) {
  return (
    <div className="">
      <div className=" px-4 py-4 grid grid-cols-2 border-b  border-gray-300">
        <button className=" font-semibold text-gray-400">Chat</button>
        <button className=" bg-gray-200 flex justify-center items-center gap-1  px-4 py-2 rounded-md text-center">
          Participents{" "}
          <span className=" flex items-center justify-center bg-white rounded-sm w-4 h-4">
            9
          </span>
        </button>
      </div>

      {/* search */}

      <div className=" mx-4 my-4 bg-gray-200 px-1 py-2 rounded-md">
        <SearchIcon />
        <input
          className=" ml-1 bg-transparent outline-none"
          type="text"
          placeholder="Search for people"
        />
      </div>

      {/* chats */}

      <div className="mx-4 my-4 ">
        <h5 className=" font-semibold">On the call</h5>
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <img
              className=" w-10 h-10 rounded-full object-cover"
              src={pic3}
              alt=""
            />
            <div className=" my-3">
              <h4 className=" font-semibold">Mohamed nadaara</h4>
              <span className=" block text-xs font-medium text-gray-400">
                Developer
              </span>
            </div>
          </div>
          <span className=" flex justify-center w-6 h-6  items-center bg-blue-600 rounded-full">
            <GraphicEqIcon fontSize="small" className=" text-white" />
          </span>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <img
              className=" w-10 h-10 rounded-full object-cover"
              src={pic3}
              alt=""
            />
            <div className=" my-3">
              <h4 className=" font-semibold">Mohamed nadaara</h4>
              <span className=" block text-xs font-medium text-gray-400">
                Developer
              </span>
            </div>
          </div>
          <span className=" flex justify-center w-6 h-6  items-center bg-blue-600 rounded-full">
            <GraphicEqIcon fontSize="small" className=" text-white" />
          </span>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <img
              className=" w-10 h-10 rounded-full object-cover"
              src={pic3}
              alt=""
            />
            <div className=" my-3">
              <h4 className=" font-semibold">Mohamed nadaara</h4>
              <span className=" block text-xs font-medium text-gray-400">
                Developer
              </span>
            </div>
          </div>
          <span className=" flex justify-center w-6 h-6  items-center bg-blue-600 rounded-full">
            <GraphicEqIcon fontSize="small" className=" text-white" />
          </span>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <img
              className=" w-10 h-10 rounded-full object-cover"
              src={pic3}
              alt=""
            />
            <div className=" my-3">
              <h4 className=" font-semibold">Mohamed nadaara</h4>
              <span className=" block text-xs font-medium text-gray-400">
                Developer
              </span>
            </div>
          </div>
          <span className=" flex justify-center w-6 h-6  items-center bg-blue-600 rounded-full">
            <GraphicEqIcon fontSize="small" className=" text-white" />
          </span>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <img
              className=" w-10 h-10 rounded-full object-cover"
              src={pic3}
              alt=""
            />
            <div className=" my-3">
              <h4 className=" font-semibold">Mohamed nadaara</h4>
              <span className=" block text-xs font-medium text-gray-400">
                Developer
              </span>
            </div>
          </div>
          <span className=" flex justify-center w-6 h-6  items-center bg-blue-600 rounded-full">
            <GraphicEqIcon fontSize="small" className=" text-white" />
          </span>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <img
              className=" w-10 h-10 rounded-full object-cover"
              src={pic3}
              alt=""
            />
            <div className=" my-3">
              <h4 className=" font-semibold">Mohamed nadaara</h4>
              <span className=" block text-xs font-medium text-gray-400">
                Developer
              </span>
            </div>
          </div>
          <span className=" flex justify-center w-6 h-6  items-center bg-blue-600 rounded-full">
            <GraphicEqIcon fontSize="small" className=" text-white" />
          </span>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <img
              className=" w-10 h-10 rounded-full object-cover"
              src={pic3}
              alt=""
            />
            <div className=" my-3">
              <h4 className=" font-semibold">Mohamed nadaara</h4>
              <span className=" block text-xs font-medium text-gray-400">
                Developer
              </span>
            </div>
          </div>
          <span className=" flex justify-center w-6 h-6  items-center bg-blue-600 rounded-full">
            <GraphicEqIcon fontSize="small" className=" text-white" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Chatting;
