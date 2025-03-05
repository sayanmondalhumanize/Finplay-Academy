import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/sidebar";
import "./Dashboard.css";
import Home from "./home/Home";


function Dashboard() {
    return (
       
            <div className="App">
                <Topbar />
                <div className="container">
                    <Sidebar />
                    <Home/>
                </div>
            </div>
   
    );

}

export default Dashboard;
