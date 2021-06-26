import React from 'react'

import { Row, Image, Col} from 'react-bootstrap'

import { AiOutlineMenu } from "react-icons/ai";

import ImageAsset from '../../assets/imageSample1.jpg'

import SideNavigation from './SideNavigation';


import './NavigationBar.scss'

export default function NavigationBar() {
    return (
        <div>
                <div className="topNavigationContainer">
                    <Row>
                        <Col xs={1} className="topNavMenuBarContainer d-md-none">
                            <AiOutlineMenu className="topNavIcon"/>
                        </Col>
                        <Col xs={7} className="topNavTitleContainer d-md-none">
                            <p>Gadjian</p>
                        </Col>
                        <Col md={11} className="topNavGreetingContainer d-none d-md-block">
                            <p>Hello,<span> Gadjian User</span></p>
                        </Col>
                        <Col xs={4} md={1} className="topNavImageContainer">
                            <Image src={ImageAsset} roundedCircle className="topNavImage"/>
                        </Col>
                    </Row>
                </div>
                <SideNavigation/>
        </div>
    )
}
