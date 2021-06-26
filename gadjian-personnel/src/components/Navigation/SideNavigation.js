import React from 'react'

import {Row,Col} from 'react-bootstrap'

import './SideNavigation.scss'

import { AiFillHome } from "react-icons/ai";

import { IoIosPeople } from "react-icons/io";

import { IoCalendarSharp } from "react-icons/io5";

export default function SideNavigation() {
    return (
        <div>
            <div className="sideNavigationContainer">
                <Row>
                    <Col md={12} className="sideNavHero">
                        <p>Gadjian</p>
                    </Col>
                    <Col md={12} className="sideNavMenu">
                        <ul>
                            <li><a href="#"><AiFillHome className="sideNavMenuIcon"/>Brands</a></li>
                            <li><a href="#"><IoIosPeople className="sideNavMenuIcon"/>Personal List</a></li>
                            <li><a href="#"><IoCalendarSharp className="sideNavMenuIcon"/>Daily Attendance</a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
