// import "./App.css";
import "../Twitter.css";
import Sidebar from "../componentt/Sidebar";
// import Twitts from "../component/twitts";
import Twitts from "../componentt/twits";
import Trands from "../componentt/trands";

function Twitter() {
  return (
    <>
      <div className="Twitter">
        <Sidebar />
        <Twitts />
        <Trands />
      </div>
    </>
  );
}

export default Twitter;
