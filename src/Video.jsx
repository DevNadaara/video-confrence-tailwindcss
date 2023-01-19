import React from "react";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import CallEndIcon from "@mui/icons-material/CallEnd";
import pic1 from "./assets/1.jpg";
import pic2 from "./assets/2.jpg";
import pic3 from "./assets/3.jpg";
import pic4 from "./assets/4.jpg";
import pic7 from "./assets/7.jpg";
import pic8 from "./assets/8.jpg";
import pic9 from "./assets/9.jpg";

function Video(props) {
  return (
    <div className=" px-4 py-3 bg-gray-900 ">
      <div className=" text-center flex justify-center gap-5 items-center mb-3">
        <button className=" text-[#6b7074] ">Document</button>
        <button className=" bg-[#6b7074] text-white py-2 px-3 rounded-md text-sm">
          Meeting
        </button>
      </div>

      <div className="sm:h-[400px]  lg:h-[500px] pt-14 md:pt-0">
        <img
          className=" rounded-lg h-full w-full object-cover"
          src={pic1}
          alt=""
        />
      </div>
      <div className="grid grid-cols-6 gap-2 mt-2 ">
        <div className=" relative">
          <img className="rounded-lg" src={pic2} alt="" />
          <div className=" w-full px-2 absolute bottom-2 flex justify-between items-center">
            <p className=" text-teal-50 text-[.5rem] sm:text-xs">Mohamed</p>
            <span className="w-3 h-3 sm:h-5 sm:w-5 rounded-full flex items-center justify-center bg-blue-600 text-xs">
              <GraphicEqIcon
                style={{ fontSize: ".9rem" }}
                className=" text-white "
              />
            </span>
          </div>
        </div>

        <div className=" relative">
          <img className="rounded-lg" src={pic3} alt="" />
          <div className=" w-full px-2 absolute bottom-2 flex justify-between items-center">
            <p className=" text-teal-50 text-[.5rem] sm:text-xs">Mosh</p>
            <span className="w-3 h-3 sm:h-5 sm:w-5 rounded-full flex items-center justify-center bg-blue-600 text-xs">
              <GraphicEqIcon
                style={{ fontSize: ".9rem" }}
                className=" text-white  "
              />
            </span>
          </div>
        </div>
        <div className=" relative">
          <img className="rounded-lg" src={pic4} alt="" />
          <div className=" w-full px-2 absolute bottom-2 flex justify-between items-center">
            <p className=" text-teal-50 text-[.5rem] sm:text-xs">criatena</p>
            <span className="w-3 h-3 sm:h-5 sm:w-5 rounded-full flex items-center justify-center bg-blue-600 text-xs">
              <GraphicEqIcon
                style={{ fontSize: ".9rem" }}
                className=" text-white "
              />
            </span>
          </div>
        </div>
        <div className=" relative">
          <img className="rounded-lg" src={pic7} alt="" />
          <div className=" w-full px-2 absolute bottom-2 flex justify-between items-center">
            <p className=" text-teal-50 text-[.5rem] sm:text-xs">Raina</p>
            <span className="w-3 h-3 sm:h-5 sm:w-5 rounded-full flex items-center justify-center bg-blue-600 text-xs">
              <GraphicEqIcon
                style={{ fontSize: ".9rem" }}
                className=" text-white "
              />
            </span>
          </div>
        </div>
        <div className=" relative">
          <img className="rounded-lg" src={pic8} alt="" />
          <div className=" w-full px-2 absolute bottom-2 flex justify-between items-center">
            <p className=" text-teal-50 text-[.5rem] sm:text-xs">Jeo</p>
            <span className="w-3 h-3 sm:h-5 sm:w-5 rounded-full flex items-center justify-center bg-blue-600 text-xs">
              <GraphicEqIcon
                style={{ fontSize: ".9rem" }}
                className=" text-white "
              />
            </span>
          </div>
        </div>
        <div className=" relative">
          <img className="rounded-lg" src={pic9} alt="" />
          <div className=" w-full px-2 absolute bottom-2 flex justify-between items-center">
            <p className=" text-teal-50 text-[.5rem] sm:text-xs">Kanny</p>
            <span className="w-3 h-3 sm:h-5 sm:w-5 rounded-full flex items-center justify-center bg-blue-600 text-xs">
              <GraphicEqIcon
                style={{ fontSize: ".9rem" }}
                className=" text-white "
              />
            </span>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center gap-5 mt-2 py-10 md:py-0">
        <button className=" bg-gray-500 rounded-full w-8 h-8 flex justify-center items-center ">
          <VideocamOutlinedIcon fontSize="small" className="text-white " />{" "}
        </button>
        <button className=" bg-gray-500 rounded-full  w-8 h-8 flex justify-center items-center">
          <MicNoneOutlinedIcon fontSize="small" className="text-white " />{" "}
        </button>
        <button className=" bg-gray-500 rounded-full  w-8 h-8 flex justify-center items-center">
          <ScreenShareOutlinedIcon fontSize="small" className="text-white " />{" "}
        </button>
        <button className=" bg-gray-500 rounded-full w-8 h-8 flex justify-center items-center">
          <MoreHorizOutlinedIcon fontSize="small" className="text-white " />{" "}
        </button>
        <button className=" bg-red-500 rounded-full w-8 h-8 flex justify-center items-center">
          <CallEndIcon fontSize="small" className="text-white" />{" "}
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Video;
