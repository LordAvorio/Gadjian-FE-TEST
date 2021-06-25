import React from 'react'

import {Container,Row,Col} from 'react-bootstrap'

import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";

import './style/PersonalSearch.scss'



export default function PersonalSearch() {
    return (
        <div>
            <div className="searchBarContainer">
                <Row>
                    <Col xs={12} md={6} xl={8} className="searchBarTitleContainer">
                        <h2>PERSONNEL LIST</h2>
                        <p>List of all personnels</p>
                    </Col>
                    <Col xs={12} md={3} xl={2} className="searchBarFieldContainer">
                        <div className="fieldRightIcon">
                            <AiOutlineSearch className="rightIcon"/>
                            <input placeholder="Find Personnels"/>
                        </div>
                    </Col>
                    <Col xs={12} md={3} xl={2} className="searchBarButtonContainer">
                        <button>
                            <span className="textButton">Add Personnel</span>
                            <span className="iconButton">
                                <AiOutlinePlus className="iconButtonInside"/>
                            </span>
                        </button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
