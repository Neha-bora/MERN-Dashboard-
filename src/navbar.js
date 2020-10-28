import React from "react"


const Navbar = () =>( 

<div class="primary-nav ">
	<button href="#" class="hamburger open-panel nav-toggle">
<span class="screen-reader-text">Menu</span>
</button>

	<nav role="navigation" class="menu">

		<a href="#" class="logotype">Modules</a>

		<div class="overflow-container">

			<ul class="menu-dropdown">
           
				<li><a href="#">  <i class="fas fa-clipboard-check  fa-2x mr-4" style={{color:"#4cbb17"}}></i>Getting Started</a></li>  
				<li class="menu-hasdropdown"><a href="#"><i class="fas fa-project-diagram fa-2x mr-4" style={{color:"#01796f"}} ></i>Projects</a> </li>
				<li><a href="#"><i class="fas fa-funnel-dollar fa-2x mr-4" style={{color:"#1fcecb"}} ></i>CRM</a></li>
                <li><a href="#"> <i class="fas fa-users  fa-2x mr-4" style={{color:"#e75480"}}></i>Human Resource</a></li>
                <li><a href="#"><i class="fas fa-book fa-2x mr-4" style={{color:"#009e60"}}></i>Account</a></li>
                <li><a href="#"><i class="fab fa-sellsy fa-2x mr-4" style={{color:"#d1e231"}}></i>Selling </a></li>
                <li><a href="#"><i class="fas fa-briefcase fa-2x mr-4" style={{color:"#5edc1f"}}></i>Buying</a></li>
				<li><a href="#"><i class="fas fa-warehouse fa-2x mr-4" style={{color:"#9c51b6"}}></i>Stock</a></li>
                <li><a href="#"><i class="fas fa-database fa-2x mr-4" style={{color:"#f2a3bd"}}></i>Assets</a></li>
                <li><a href="#"><i class="fas fa-industry fa-2x mr-4" style={{color:"#cb9273"}}></i>Manufacturing</a></li>
                {/* <li><a href="#">Quality</a></li>
                <li><a href="#">Website</a></li>
                <li><a href="#">Social</a></li>
                <li><a href="#">LeaderBoard</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">MarketPlace</a></li> */}
            

			</ul>

		</div>

	</nav>

</div>

)

export default Navbar