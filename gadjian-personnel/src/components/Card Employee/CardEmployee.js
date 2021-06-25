import React from 'react'

import {Col, Row, Image} from 'react-bootstrap'

import moment from 'moment'

import { IoEllipsisHorizontalSharp } from "react-icons/io5";

import './CardEmployee.scss'

export default function CardEmployee({tempData, index}) {
    return (
        <div>
            <div className="cardEmployeeContainer" >
                <div className="topCardContainer">
                    <Row>
                        <Col xs={9} className="cardPersonalIDContainer">
                            <p>Personal ID: <span>123456</span></p>
                        </Col>
                        <Col xs={2} className="buttonOptionContainer"> 
                            <IoEllipsisHorizontalSharp className="buttonOption"/>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col xs={4} className="cardImageContainer d-lg-none">
                        {
                            tempData ? <Image src={tempData.picture.large} roundedCircle className="imagePP"/> : ""
                        }
                    </Col>
                    <Col xs={8} lg={12} className="textLayoutContainer">
                        <Row>
                            <Col xs={12} className="profilePictureContainer d-none d-lg-block">
                            {
                                tempData ? <Image src={tempData.picture.large} roundedCircle className="imageProfilePicture"/> : ""
                            }
                            </Col>
                            <Col xs={12} className="cardNameContainer">
                                <p className="titleName">Name</p>
                                <p className="titleValueName">{ tempData ? tempData.name.first : ""}  {tempData ? tempData.name.last : ""}</p>
                            </Col>
                            <Col xs={12} className="cardPhoneContainer">
                                <p className="titleName">Telephone</p>
                                <p className="titleValueName">{ tempData ? tempData.cell : ""}</p>
                            </Col>
                            <Col xs={12} className="cardBirthContainer d-none d-lg-block">
                                <p className="titleName">Birthday</p>
                                <p className="titleValueName">{ tempData ? moment(tempData.dob.date).format('D') : ""}-{ tempData ? moment(tempData.dob.date).format('MMM') : ""}</p>
                            </Col>
                            <Col xs={12} className="cardEmailContainer d-none d-lg-block">
                                <p className="titleName">Email</p>
                                <p className="titleValueName">{ tempData ? tempData.email : ""}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>            
        </div>
    )
}
