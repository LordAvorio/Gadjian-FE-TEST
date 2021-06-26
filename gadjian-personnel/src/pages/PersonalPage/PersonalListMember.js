import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getEmployee } from "../../action/EmployeeAction";

import { Row, Col} from "react-bootstrap";

import CardEmployee from "../../components/Card Employee/CardEmployee";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./style/PersonalListPage.scss";

export default function PersonalListMember() {
  const [offset, setOffset] = useState(0);
  const [dataEmployee, setDataEmployee] = useState([]);
  const [perPage, setPerPage] = useState(4);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const { employeeData } = useSelector((state) => {
    return {
      employeeData: state.employeeReducer.dataEmployee,
    };
  });

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getEmployee());
    if (employeeData) {
      setPageCount(Math.ceil(employeeData.length / perPage));
      setDataEmployee(employeeData.slice(offset, offset + perPage));
    }
  }, [employeeData.length, offset]);

  // const handlePageClick = (value) => {
  //     console.log(value)
  //     const selectedPage = value.selected;
  //     setOffset(selectedPage + 1)
  // }

  const nextPage = async () => {
    await setCurrentPage((prev) => prev + 1);
    await setOffset(currentPage + 1);
  };

  const prevPage = async () => {
    await setCurrentPage((prev) => prev - 1);
    await setOffset(currentPage - 1);
  };

  return (
    <div>
      <Row>
        {dataEmployee
          ? dataEmployee.map((item, index) => {
              return (
                <Col
                  xs={12}
                  md={6}
                  lg={3}
                  className="containerCard"
                  key={index}
                >
                  <CardEmployee tempData={item} />
                </Col>
              );
            })
          : ""}
      </Row>
      <Row className="containerPagination">
        <Col xs={6} className="containerPrev">
          {currentPage === 0 ? (
            <button disabled className="buttonArrow">
              <p>
                <span>
                  <IoIosArrowBack />
                </span>
                Previous Page
              </p>
            </button>
          ) : (
            <button onClick={() => prevPage()} className="buttonArrow">
              <p>
                <span>
                  <IoIosArrowBack />
                </span>
                Previous Page
              </p>
            </button>
          )}
        </Col>
        <Col xs={6} className="containerNext">
          {currentPage === pageCount ? (
            <button disabled className="buttonArrow">
              <p>
                Next Page
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
            </button>
          ) : (
            <button className="buttonArrow" onClick={() => nextPage()}>
              <p>
                Next Page
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
            </button>
          )}
        </Col>
      </Row>
    </div>
  );
}
