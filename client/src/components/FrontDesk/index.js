import React from "react";
import "./style.css";
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem, Button, Dropdown, } from 'react-bootstrap';
import { Col, Row, Container } from "../Grid";
import { NavLink } from 'react-router-dom';
import FrontDeskForm from "../FrontDeskForm";
import AvailableRoom from "../AvailableRoom";



const FrontDeskDiv = () => {
    
    return (

        <div className="frontDeskDiv" >

            <div className="sideBarMenuContainer">
                <Navbar fluid="true" inverse="true" >
                    <Navbar.Collapse>
                        <Navbar.Text className="nt">
                            <NavLink className="nl" to="/PatientList">
                                Patient List
                        </NavLink>
                            <NavLink className="nl" to="/CreateRoom">
                                Create Room
                        </NavLink>
                            <NavLink className="nl" to="/CompanyInfo">
                                Company Info
                        </NavLink>
                            <NavLink className="nl" to="/FrontDesk">
                                Front Desk
                        </NavLink>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>

            </div>
            <AvailableRoom />
            
         <div>
             <div className="row" style={{position:"relative",left:"15%"}}>
                 <div className="col-lg-2"></div>
                 <div className="col-lg-6">
                     <FrontDeskForm/>
                 
                 </div>
             </div>
        
         </div>
                          
                      
            </div>
        

    )
};

//exportes our Nav component
export default FrontDeskDiv;

