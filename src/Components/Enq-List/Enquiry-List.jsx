import React, { Fragment } from "react";
import { useEffect, useState, useRef } from "react";
import Table from "react-bootstrap/Table";
import { FaFilter } from "react-icons/fa";
import _ from "lodash";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
import EnqDataTable from "./Enq-Data-Table";
import EnqEditTable from "./Enq-Edit-Table";
import ExportToExcel from "./ExportToExcel";
import "./List.css";

const pageSize = 10;
export default function EnquiryList() {
  const [list, setList] = useState([]);
  const [paged, setPaged] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getData = () => {
    axios
      .get(" https://curious-dog-baseball-cap.cyclic.app/enq", {
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      })
      .then((res) => {
        setList(res.data);
        setAllVal(res.data);
        setPaged(_(res.data).slice(0).take(pageSize).value());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const [enqId, setEnqId] = useState(null);
  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...list].sort((a, b) =>
        a[col].toString().toLowerCase() > b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      setPaged(sorted) || setList(sorted);
      setOrder("DSC");
    }

    if (order === "DSC") {
      const sorted = [...list].sort((a, b) =>
        a[col].toString().toLowerCase() < b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      setPaged(sorted) || setList(sorted);
      setOrder("ASC");
    }
  };

  const [values, setValues] = useState({
    name: "",
    followupcalldate: "",
    followupstatus: "",
    enquiryby: "",
    mobile: "",
    location: "",
    course: "",
    feestructure: "",
    experienceby: "",
    infosource: "",
    purpose: "",
    mode: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newEditData = { ...values };
    newEditData[name] = value;
    setValues(newEditData);
  };

  const enqdata = {
    name: values.name,
    followupcalldate: values.followupcalldate,
    followupstatus: values.followupstatus,
    enquiryby: values.enquiryby,
    mobile: values.mobile,
    location: values.location,
    course: values.course,
    feestructure: values.feestructure,
    experienceby: values.experienceby,
    infosource: values.infosource,
    purpose: values.purpose,
    mode: values.mode,
    comments: values.comments,
  };
  const editData = (id) => {
    axios
      .put(` https://curious-dog-baseball-cap.cyclic.app/enq/update-enqdata/${id}`, enqdata)
      .then((res) => {
        console.log(res.data);
        console.log("Empdata Successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEditClick = (event, obj) => {
    event.preventDefault();

    setEnqId(obj._id);

    const formValues = {
      name: obj.name,
      followupcalldate: obj.followupcalldate,
      followupstatus: obj.followupstatus,
      enquiryby: obj.enquiryby,
      mobile: obj.mobile,
      location: obj.location,
      course: obj.course,
      feestructure: obj.feestructure,
      experienceby: obj.experienceby,
      infosource: obj.infosource,
      purpose: obj.purpose,
      mode: obj.mode,
      comments: obj.comments,
    };
    setValues(formValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(values);
    // console.log("I am Working");

    editData(enqId);

    const editedData = {
      id: enqId,
      name: values.name,
      followupcalldate: values.followupcalldate,
      followupstatus: values.followupstatus,
      enquiryby: values.enquiryby,
      mobile: values.mobile,
      location: values.location,
      course: values.course,
      feestructure: values.feestructure,
      experienceby: values.experienceby,
      infosource: values.infosource,
      purpose: values.purpose,
      mode: values.mode,
      comments: values.comments,
    };

    const newList = [...(list || paged)];
    const index = list.findIndex((lists) => lists._id === enqId);
    newList[index] = editedData;
    setList(newList) || setPaged(newList);
    setEnqId(null);
  };
  const Datass = list.map((edata, index) => ({
    SNo: index + 1,
    name: edata.name,
    followupcalldate: edata.followupcalldate,
    followupstatus: edata.followupstatus,
    comments: edata.comments,
    enquiryby: edata.enquiryby,
    mobile: edata.mobile,
    location: edata.location,
    course: edata.course,
    feestructure: edata.feestructure,
    experienceby: edata.experienceby,
    infosource: edata.infosource,
    purpose: edata.purpose,
    mode: edata.mode,
  }));
  const Datas = Datass;
  const Filename = "EnquiredData";


  let inputRef = useRef(null)
  
  const [allVal, setAllVal] = useState([]);
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(true);
  const [click3, setClick3] = useState(true);
  const [click4, setClick4] = useState(true);
  const [click5, setClick5] = useState(true);
  const [click6, setClick6] = useState(true);
  const [click7, setClick7] = useState(true);
  const [click8, setClick8] = useState(true);
  const [click9, setClick9] = useState(true);
  const [click10, setClick10] = useState(true);
  const [click11, setClick11] = useState(true);
  const [click12, setClick12] = useState(true);

  const toggle1 = () => {
    setClick1(!click1);
  };
  const toggle2 = () => {
    setClick2(!click2);
  };
  const toggle3 = () => {
    setClick3(!click3);
  };
  const toggle4 = () => {
    setClick4(!click4);
  };
  const toggle5 = () => {
    setClick5(!click5);
  };
  const toggle6 = () => {
    setClick6(!click6);
  };
  const toggle7 = () => {
    setClick7(!click7);
  };
  const toggle8 = () => {
    setClick8(!click8);
  };
  const toggle9 = () => {
    setClick9(!click9);
  };
  const toggle10 = () => {
    setClick10(!click10);
  };
  const toggle11 = () => {
    setClick11(!click11);
  };
  const toggle12 = () => {
    setClick12(!click12);
  };

  const pageCount = list ? Math.ceil(list.length / pageSize) : 0;
  if (pageCount === -1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const pagePost = _(list).slice(startIndex).take(pageSize).value();
    setPaged(pagePost);
  };
  
  return (
    <div className="data-table">
      <input
        type="text"
        ref={inputRef}
        className="form-control"
        placeholder="Search"
        name="search"
        style={{
          position: "relative",
          marginTop: "50",
          left: "1rem",
          marginBottom: "20",
          width: "20rem",
        }}
        onChange={() => {
          

          if (inputRef.current.value === null) {
            setPaged(allVal) || setList(allVal);
          } else {
            let temp = allVal.filter(
              (data) =>
                data.name.toLowerCase().trim().includes(inputRef.current.value) ||
                data.followupcalldate
                  .toString()
                  .toLowerCase()
                  .trim()
                  .includes(inputRef.current.value) ||
                data.mobile.toString().toLowerCase().trim().includes(inputRef.current.value)
            );
            setPaged(temp) || setList(temp);
          }
        }}
      />
      <div style={{ margin: "1rem" }}>
        <ExportToExcel csvData={Datas} fileName={Filename} />
      </div>
      <div className="table-data">
        <form onSubmit={handleSubmit}>
          <Table bordered hover>
            <thead style={{ verticalAlign: "middle", boxSizing: "border-box" }}>
              <tr style={{ background: "brown", color: "white" }}>
                <th>
                  <div style={{ width: "5rem" }}>Actions</div>
                </th>

                <th>
                  <div
                    className="drop-down"
                    style={{
                      display: click1 ? "none" : "",
                      transition: click1 ? ".6s" : ".6s",
                      top: "9rem",
                    }}
                  >
                    <Multiselect
                      isObject={false}
                      id="css_custom"
                      // groupBy="cat"
                      closeIcon="circle"
                      // ref={multiselectRef}
                      style={{
                        optionContainer: {
                          width: "11rem",
                          height: "5rem",
                          background: "#82AAE3",
                          fontSize: "0.7rem",
                        },
                        searchBox: {
                          maxHeight: "2.5rem",
                          overflow: "hidden",
                          border: "2px solid black",
                        },
                        inputFileld: {
                          margin: "3px",
                        },
                      }}
                      keepSearchTerm="false"
                      options={allVal.map((fil) => fil.name)}
                      closeOnSelect
                      onSelect={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.name)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      onRemove={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.name)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      selectedValues={() => {
                        setList(allVal) || setPaged(allVal);
                      }}
                      showCheckbox
                      showArrow
                      displayValue
                    />
                    <button className="btn btn-primary okay" onClick={toggle1}>
                      Okay
                    </button>
                  </div>

                  <div style={{ width: "9rem" }}>
                    <FaFilter
                      className="filter"
                      onClick={toggle1}
                      style={{
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    />
                    <i
                      onClick={() => sorting("name")}
                      className={
                        order === "DSC"
                          ? "fa fa-sort-alpha-asc"
                          : "fa fa-sort-alpha-desc"
                      }
                      style={{ paddingRight: "1rem" }}
                    ></i>
                    Name
                  </div>
                </th>

                <th>
                  <div
                    className="drop-down"
                    style={{
                      display: click2 ? "none" : "",
                      transition: click2 ? ".6s" : ".6s",
                      top: "9rem",
                    }}
                  >
                    <Multiselect
                      isObject={false}
                      id="css_custom"
                      // groupBy="cat"
                      closeIcon="circle"
                      // ref={multiselectRef}
                      style={{
                        optionContainer: {
                          width: "11rem",
                          height: "5rem",
                          background: "#82AAE3",
                          fontSize: "0.7rem",
                        },
                        searchBox: {
                          maxHeight: "2.5rem",
                          overflow: "hidden",
                          border: "2px solid black",
                        },
                        inputFileld: {
                          margin: "3px",
                        },
                      }}
                      keepSearchTerm="false"
                      options={allVal.map((fil) => fil.followupcalldate)}
                      closeOnSelect
                      onSelect={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.followupcalldate)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      onRemove={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.followupcalldate)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      selectedValues={() => {
                        setList(allVal) || setPaged(allVal);
                      }}
                      showCheckbox
                      showArrow
                      displayValue
                    />
                    <button className="btn btn-primary okay" onClick={toggle2}>
                      Okay
                    </button>
                  </div>

                  <div style={{ width: "15rem" }}>
                    <FaFilter
                      className="filter"
                      onClick={toggle2}
                      style={{
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    />
                    <i
                      onClick={() => sorting("followupcalldate")}
                      className={
                        order === "DSC"
                          ? "fa fa-sort-alpha-asc"
                          : "fa fa-sort-alpha-desc"
                      }
                      style={{ marginRight: "1rem" }}
                    ></i>
                    FollowUp-Call-Date
                  </div>
                </th>

                <th>
                  <div
                    className="drop-down"
                    style={{
                      display: click3 ? "none" : "",
                      transition: click3 ? ".6s" : ".6s",
                      top: "9rem",
                    }}
                  >
                    <Multiselect
                      isObject={false}
                      id="css_custom"
                      // groupBy="cat"
                      closeIcon="circle"
                      // ref={multiselectRef}
                      style={{
                        optionContainer: {
                          width: "11rem",
                          height: "5rem",
                          background: "#82AAE3",
                          fontSize: "0.7rem",
                        },
                        searchBox: {
                          maxHeight: "2.5rem",
                          overflow: "hidden",
                          border: "2px solid black",
                        },
                        inputFileld: {
                          margin: "3px",
                        },
                      }}
                      keepSearchTerm="false"
                      options={allVal.map((fil) => fil.followupstatus)}
                      closeOnSelect
                      onSelect={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.followupstatus)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      onRemove={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.followupstatus)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      selectedValues={() => {
                        setList(allVal) || setPaged(allVal);
                      }}
                      showCheckbox
                      showArrow
                      displayValue
                    />
                    <button className="btn btn-primary okay" onClick={toggle3}>
                      Okay
                    </button>
                  </div>

                  <div style={{ width: "13rem" }}>
                    <FaFilter
                      className="filter"
                      onClick={toggle3}
                      style={{
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    />
                    <i
                      onClick={() => sorting("followupstatus")}
                      className={
                        order === "DSC"
                          ? "fa fa-sort-alpha-asc"
                          : "fa fa-sort-alpha-desc"
                      }
                      style={{ paddingRight: "1rem" }}
                    ></i>
                    FollowUp-Status
                  </div>
                </th>

                <th>
                  <div style={{ width: "8rem", overflow: "hidden" }}>
                    <i
                      onClick={() => sorting("comments")}
                      className={
                        order === "DSC"
                          ? "fa fa-sort-alpha-asc"
                          : "fa fa-sort-alpha-desc"
                      }
                      style={{ paddingRight: "1rem" }}
                    ></i>
                    Comments
                  </div>
                </th>

                <th>
                  <div
                    className="drop-down"
                    style={{
                      display: click4 ? "none" : "",
                      transition: click4 ? ".6s" : ".6s",
                      top: "9rem",
                    }}
                  >
                    <Multiselect
                      isObject={false}
                      id="css_custom"
                      // groupBy="cat"
                      closeIcon="circle"
                      // ref={multiselectRef}
                      style={{
                        optionContainer: {
                          width: "11rem",
                          height: "5rem",
                          background: "#82AAE3",
                          fontSize: "0.7rem",
                        },
                        searchBox: {
                          maxHeight: "2.5rem",
                          overflow: "hidden",
                          border: "2px solid black",
                        },
                        inputFileld: {
                          margin: "3px",
                        },
                      }}
                      keepSearchTerm="false"
                      options={allVal.map((fil) => fil.enquiryby)}
                      closeOnSelect
                      onSelect={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.enquiryby)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      onRemove={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.enquiryby)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      selectedValues={() => {
                        setList(allVal) || setPaged(allVal);
                      }}
                      showCheckbox
                      showArrow
                      displayValue
                    />

                    <button className="btn btn-primary okay" onClick={toggle4}>
                      Okay
                    </button>
                  </div>

                  <div style={{ width: "10rem" }}>
                    <FaFilter
                      className="filter"
                      onClick={toggle4}
                      style={{
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    />
                    <i
                      onClick={() => sorting("enquiryby")}
                      className={
                        order === "DSC"
                          ? "fa fa-sort-alpha-asc"
                          : "fa fa-sort-alpha-desc"
                      }
                      style={{ paddingRight: "1rem" }}
                    ></i>
                    Enquiry-By
                  </div>
                </th>
                <th>
                  <div
                    className="drop-down"
                    style={{
                      display: click5 ? "none" : "",
                      transition: click5 ? ".6s" : ".6s",
                      top: "9rem",
                    }}
                  >
                    <Multiselect
                      isObject={false}
                      id="css_custom"
                      // groupBy="cat"
                      closeIcon="circle"
                      // ref={multiselectRef}
                      style={{
                        optionContainer: {
                          width: "11rem",
                          height: "5rem",
                          background: "#82AAE3",
                          fontSize: "0.7rem",
                        },
                        searchBox: {
                          maxHeight: "2.5rem",
                          overflow: "hidden",
                          border: "2px solid black",
                        },
                        inputFileld: {
                          margin: "3px",
                        },
                      }}
                      keepSearchTerm="false"
                      options={allVal.map((fil) => fil.mobile)}
                      closeOnSelect
                      onSelect={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.mobile)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      onRemove={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.mobile)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      selectedValues={() => {
                        setList(allVal) || setPaged(allVal);
                      }}
                      showCheckbox
                      showArrow
                      displayValue
                    />
                    <button className="btn btn-primary okay" onClick={toggle5}>
                      Okay
                    </button>
                  </div>

                  <div style={{ width: "9rem" }}>
                    <FaFilter
                      className="filter"
                      onClick={toggle5}
                      style={{
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    />
                    <i
                      onClick={() => sorting("mobile")}
                      className={
                        order === "DSC"
                          ? "fa fa-sort-alpha-asc"
                          : "fa fa-sort-alpha-desc"
                      }
                      style={{ paddingRight: "1rem" }}
                    ></i>
                    Mobile
                  </div>
                </th>

                <th>
                  <div
                    className="drop-down"
                    style={{
                      display: click6 ? "none" : "",
                      transition: click6 ? ".6s" : ".6s",
                      top: "9rem",
                    }}
                  >
                    <Multiselect
                      isObject={false}
                      id="css_custom"
                      // groupBy="cat"
                      closeIcon="circle"
                      // ref={multiselectRef}
                      style={{
                        optionContainer: {
                          width: "11rem",
                          height: "5rem",
                          background: "#82AAE3",
                          fontSize: "0.7rem",
                        },
                        searchBox: {
                          maxHeight: "2.5rem",
                          overflow: "hidden",
                          border: "2px solid black",
                        },
                        inputFileld: {
                          margin: "3px",
                        },
                      }}
                      keepSearchTerm="false"
                      options={allVal.map((fil) => fil.location)}
                      closeOnSelect
                      onSelect={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.location)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      onRemove={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.location)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      selectedValues={() => {
                        setList(allVal) || setPaged(allVal);
                      }}
                      showCheckbox
                      showArrow
                      displayValue
                    />
                    <button className="btn btn-primary okay" onClick={toggle6}>
                      Okay
                    </button>
                  </div>

                  <div style={{ width: "8rem" }}>
                    <FaFilter
                      className="filter"
                      onClick={toggle6}
                      style={{
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    />
                    <i
                      onClick={() => sorting("location")}
                      className={
                        order === "DSC"
                          ? "fa fa-sort-alpha-asc"
                          : "fa fa-sort-alpha-desc"
                      }
                      style={{ paddingRight: "1rem" }}
                    ></i>
                    Location
                  </div>
                </th>

                <th>
                  <div
                    className="drop-down"
                    style={{
                      display: click7 ? "none" : "",
                      transition: click7 ? ".6s" : ".6s",
                      top: "9rem",
                    }}
                  >
                    <Multiselect
                      isObject={false}
                      id="css_custom"
                      // groupBy="cat"
                      closeIcon="circle"
                      // ref={multiselectRef}
                      style={{
                        optionContainer: {
                          width: "11rem",
                          height: "5rem",
                          background: "#82AAE3",
                          fontSize: "0.7rem",
                        },
                        searchBox: {
                          maxHeight: "2.5rem",
                          overflow: "hidden",
                          border: "2px solid black",
                        },
                        inputFileld: {
                          margin: "3px",
                        },
                      }}
                      keepSearchTerm="false"
                      options={allVal.map((fil) => fil.course)}
                      closeOnSelect
                      onSelect={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.course)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      onRemove={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.course)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      selectedValues={() => {
                        setList(allVal) || setPaged(allVal);
                      }}
                      showCheckbox
                      showArrow
                      displayValue
                    />
                    <button className="btn btn-primary okay" onClick={toggle7}>
                      Okay
                    </button>
                  </div>

                  <div style={{ width: "8rem" }}>
                    <FaFilter
                      className="filter"
                      onClick={toggle7}
                      style={{
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    />
                    <i
                      onClick={() => sorting("course")}
                      className={
                        order === "DSC"
                          ? "fa fa-sort-alpha-asc"
                          : "fa fa-sort-alpha-desc"
                      }
                      style={{ paddingRight: "1rem" }}
                    ></i>
                    Course
                  </div>
                </th>

                <th>
                  <div
                    className="drop-down"
                    style={{
                      display: click8 ? "none" : "",
                      transition: click8 ? ".6s" : ".6s",
                      top: "9rem",
                    }}
                  >
                    <Multiselect
                      isObject={false}
                      id="css_custom"
                      // groupBy="cat"
                      closeIcon="circle"
                      // ref={multiselectRef}
                      style={{
                        optionContainer: {
                          width: "11rem",
                          height: "5rem",
                          background: "#82AAE3",
                          fontSize: "0.7rem",
                        },
                        searchBox: {
                          maxHeight: "2.5rem",
                          overflow: "hidden",
                          border: "2px solid black",
                        },
                        inputFileld: {
                          margin: "3px",
                        },
                      }}
                      keepSearchTerm="false"
                      options={allVal.map((fil) => fil.feestructure)}
                      closeOnSelect
                      onSelect={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.feestructure)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      onRemove={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.feestructure)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      selectedValues={() => {
                        setList(allVal) || setPaged(allVal);
                      }}
                      showCheckbox
                      showArrow
                      displayValue
                    />
                    <button className="btn btn-primary okay" onClick={toggle8}>
                      Okay
                    </button>
                  </div>

                  <div style={{ width: "11rem" }}>
                    <FaFilter
                      className="filter"
                      onClick={toggle8}
                      style={{
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    />
                    <i
                      onClick={() => sorting("feestructure")}
                      className={
                        order === "DSC"
                          ? "fa fa-sort-alpha-asc"
                          : "fa fa-sort-alpha-desc"
                      }
                      style={{ paddingRight: "1rem" }}
                    ></i>
                    Fee-Structure
                  </div>
                </th>
                <th>
                  <div
                    className="drop-down"
                    style={{
                      display: click9 ? "none" : "",
                      transition: click9 ? ".6s" : ".6s",
                      top: "9rem",
                    }}
                  >
                    <Multiselect
                      isObject={false}
                      id="css_custom"
                      // groupBy="cat"
                      closeIcon="circle"
                      // ref={multiselectRef}
                      style={{
                        optionContainer: {
                          width: "11rem",
                          height: "5rem",
                          background: "#82AAE3",
                          fontSize: "0.7rem",
                        },
                        searchBox: {
                          maxHeight: "2.5rem",
                          overflow: "hidden",
                          border: "2px solid black",
                        },
                        inputFileld: {
                          margin: "3px",
                        },
                      }}
                      keepSearchTerm="false"
                      options={allVal.map((fil) => fil.experienceby)}
                      closeOnSelect
                      onSelect={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.experienceby)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      onRemove={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.experienceby)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      selectedValues={() => {
                        setList(allVal) || setPaged(allVal);
                      }}
                      showCheckbox
                      showArrow
                      displayValue
                    />
                    <button className="btn btn-primary okay" onClick={toggle9}>
                      Okay
                    </button>
                  </div>

                  <div style={{ width: "11rem" }}>
                    <FaFilter
                      className="filter"
                      onClick={toggle9}
                      style={{
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    />
                    <i
                      onClick={() => sorting("experienceby")}
                      className={
                        order === "DSC"
                          ? "fa fa-sort-alpha-asc"
                          : "fa fa-sort-alpha-desc"
                      }
                      style={{ paddingRight: "1rem" }}
                    ></i>
                    Experience-By
                  </div>
                </th>

                <th>
                  <div
                    className="drop-down"
                    style={{
                      display: click10 ? "none" : "",
                      transition: click10 ? ".6s" : ".6s",
                      top: "9rem",
                    }}
                  >
                    <Multiselect
                      isObject={false}
                      id="css_custom"
                      // groupBy="cat"
                      closeIcon="circle"
                      // ref={multiselectRef}
                      style={{
                        optionContainer: {
                          width: "11rem",
                          height: "5rem",
                          background: "#82AAE3",
                          fontSize: "0.7rem",
                        },
                        searchBox: {
                          maxHeight: "2.5rem",
                          overflow: "hidden",
                          border: "2px solid black",
                        },
                        inputFileld: {
                          margin: "3px",
                        },
                      }}
                      keepSearchTerm="false"
                      options={allVal.map((fil) => fil.infosource)}
                      closeOnSelect
                      onSelect={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.infosource)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      onRemove={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.infosource)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      selectedValues={() => {
                        setList(allVal) || setPaged(allVal);
                      }}
                      showCheckbox
                      showArrow
                      displayValue
                    />
                    <button className="btn btn-primary okay" onClick={toggle10}>
                      Okay
                    </button>
                  </div>

                  <div style={{ width: "10rem" }}>
                    <FaFilter
                      className="filter"
                      onClick={toggle10}
                      style={{
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    />
                    <i
                      onClick={() => sorting("infosource")}
                      className={
                        order === "DSC"
                          ? "fa fa-sort-alpha-asc"
                          : "fa fa-sort-alpha-desc"
                      }
                      style={{ paddingRight: "1rem" }}
                    ></i>
                    Info-Source
                  </div>
                </th>

                <th>
                  <div
                    className="drop-down"
                    style={{
                      display: click11 ? "none" : "",
                      transition: click11 ? ".6s" : ".6s",
                      top: "9rem",
                    }}
                  >
                    <Multiselect
                      isObject={false}
                      id="css_custom"
                      // groupBy="cat"
                      closeIcon="circle"
                      // ref={multiselectRef}
                      style={{
                        optionContainer: {
                          width: "11rem",
                          height: "5rem",
                          background: "#82AAE3",
                          fontSize: "0.7rem",
                        },
                        searchBox: {
                          maxHeight: "2.5rem",
                          overflow: "hidden",
                          border: "2px solid black",
                        },
                        inputFileld: {
                          margin: "3px",
                        },
                      }}
                      keepSearchTerm="false"
                      options={allVal.map((fil) => fil.purpose)}
                      closeOnSelect
                      onSelect={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.purpose)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      onRemove={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.purpose)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      selectedValues={() => {
                        setList(allVal) || setPaged(allVal);
                      }}
                      showCheckbox
                      showArrow
                      displayValue
                    />
                    <button className="btn btn-primary okay" onClick={toggle11}>
                      Okay
                    </button>
                  </div>

                  <div style={{ width: "8rem" }}>
                    <FaFilter
                      className="filter"
                      onClick={toggle11}
                      style={{
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    />
                    <i
                      onClick={() => sorting("purpose")}
                      className={
                        order === "DSC"
                          ? "fa fa-sort-alpha-asc"
                          : "fa fa-sort-alpha-desc"
                      }
                      style={{ paddingRight: "1rem" }}
                    ></i>
                    Purpose
                  </div>
                </th>

                <th>
                  <div
                    className="drop-down"
                    style={{
                      display: click12 ? "none" : "",
                      transition: click12 ? ".6s" : ".6s",
                      top: "9rem",
                    }}
                  >
                    <Multiselect
                      isObject={false}
                      id="css_custom"
                      // groupBy="cat"
                      closeIcon="circle"
                      // ref={multiselectRef}
                      style={{
                        optionContainer: {
                          width: "11rem",
                          height: "5rem",
                          background: "#82AAE3",
                          fontSize: "0.7rem",
                        },
                        searchBox: {
                          maxHeight: "2.5rem",
                          overflow: "hidden",
                          border: "2px solid black",
                        },
                        inputFileld: {
                          margin: "3px",
                        },
                      }}
                      keepSearchTerm="false"
                      options={allVal.map((fil) => fil.mode)}
                      closeOnSelect
                      onSelect={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.mode)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      onRemove={(event) => {
                        if (event.length === 0) {
                          return setList(allVal) || setPaged(allVal);
                        } else {
                          let temp = allVal.filter((data) =>
                            event.includes(data.mode)
                          );
                          setPaged(temp) || setList(temp);
                          console.log(event);
                        }
                      }}
                      selectedValues={() => {
                        setList(allVal) || setPaged(allVal);
                      }}
                      showCheckbox
                      showArrow
                      displayValue
                    />
                    <button className="btn btn-primary okay" onClick={toggle12}>
                      Okay
                    </button>
                  </div>

                  <div style={{ width: "8rem" }}>
                    <FaFilter
                      className="filter"
                      onClick={toggle12}
                      style={{
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    />
                    <i
                      onClick={() => sorting("mode")}
                      className={
                        order === "DSC"
                          ? "fa fa-sort-alpha-asc"
                          : "fa fa-sort-alpha-desc"
                      }
                      style={{ paddingRight: "1rem" }}
                    ></i>
                    Mode
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {paged.map((obj) => (
                <Fragment>
                  {enqId === obj._id ? (
                    <EnqEditTable values={values} handleChange={handleChange} />
                  ) : (
                    <EnqDataTable
                      obj={obj}
                      List={list}
                      setList={setList}
                      paged={paged}
                      setPaged={setPaged}
                      handleEditClick={handleEditClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </Table>
        </form>
        <nav className="d-flex justify-content-center page">
          <ul className="pagination">
            {pages.map((page) => (
              <li
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <p className="page-link" onClick={() => pagination(page)}>
                  {page}
                </p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
