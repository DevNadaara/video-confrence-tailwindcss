import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Video from "./Video";
import Chatting from "./Chatting";

function App() {
  const [taggle, setTagge] = useState(false);
  return (
    <div className=" lg:grid   lg:grid-cols-4">
      <div className=" lg:col-span-3">
        <Video />
      </div>
      <div className="hidden lg:flex">
        <Chatting />
      </div>
    </div>
  );
}

export default App;
