import React from 'react'

import { useDispatch, useSelector } from "react-redux";

import {getEmployee} from '../../action/EmployeeAction'

import {Row, Col} from 'react-bootstrap'

import CardEmployee from '../../components/Card Employee/CardEmployee';

export default function PersonalListMember() {

    const {employeeData} = useSelector((state) => {
        return {
            employeeData: state.employeeReducer.dataEmployee
        }
    })

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getEmployee())
    }, [])

    return (
        <div>
            <Row>
                    {
                        employeeData.map((item, index) => {
                            return(
                                <Col xs={12} md={6} lg={3} className="containerCard">
                                    <CardEmployee tempData = {item} index = {index}/>
                                </Col>
                            )
                        })
                    }
            </Row>
        </div>
    )
}
