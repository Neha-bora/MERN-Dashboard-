import React from "react";
import "./sideNavbar.css" 
import "./App.js"
import BarChart from "./Barchart";
import LineChart from "./Linechart";
import PieChart from "./PieChart"
import Navbar from "./navbar";
import AreaChart from "./areaCharts";
import FunalChart from "./funalChart";

const Dashboard = () => (
    <div>
  <Navbar/>
  
<div class="new-wrapper">

	<div id="main">

	<div id="main-contents">  
     {/* <div className="row">
         <div className="col-6">
            <div class="card w-50">
            <div class="card-content white-text p-4 ">
            <span class="card-title"></span>
            </div>
            </div>
         </div>

         <div className="col-6">
            <div class="card w-50">
            <div class="card-content white-text p-4 ">
            <span class="card-title"></span>
            </div>
            </div>
         </div>
       
     </div> */}
     
       <div className="row">
           {/* <div className="col-sm-6"><LineChart/></div> */}
           <div className="col-sm-6"><AreaChart/> </div>
           <div className="col-sm-6"><PieChart/></div>
          
       </div>

       <div className="row mt-4">
       <div className="col-sm-6"><BarChart/></div>
       {/* <div className="col-sm-6"><FunalChart/> </div> */}
          
       </div>
       

	</div>

	</div>

</div>
     </div>
)

export default Dashboard
   
