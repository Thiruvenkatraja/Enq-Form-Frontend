// import { useEffect } from "react";
import {useState} from "react";
import axios from "axios";

 const UseForm = (Validation)=> {
  const [values, setValues] = useState({
    name: "",
    followupcalldate: "",
    followupstatus: "",
    enquiryby: "",
    mobile: "",
    location: "",
    course: "",
    feestructure:"",
    experienceby: "",
    infosource: "",
    purpose: "",
    mode: "",
    comments: ""
  });
  const [errors, seterrors] = useState({});
  const [done, setdone] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevalues) => {
      return {
        ...prevalues,
        [name]: value,
      };
    });
  };

  const enqdata = {
    name: values.name,
    followupcalldate: values.followupcalldate,
    followupstatus: values.followupstatus,
    enquiryby: values.enquiryby,
    mobile: values.mobile,
    location: values.location,
    course: values.course,
    feestructure:values.feestructure,
    experienceby: values.experienceby,
    infosource: values.infosource,
    purpose: values.purpose,
    mode: values.mode,
    comments: values.comments,
  };


  const postData=()=>{
    if(Object.values(values).includes("") === false){
      axios.post('http://localhost:5000/enq/EnquiryData', enqdata) 
      .then(res=>console.log(res.data))
       console.log("success",Object.values(values))
    }
  }
  

 const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event)
     console.log(values)
     console.log("I am Working")

    
     postData()
  
        

    setValues({
    name: "",
    followupcalldate: "",
    followupstatus: "",
    enquiryby: "",
    mobile: "",
    location: "",
    course: "",
    feestructure:"",
    experienceby: "",
    infosource: "",
    purpose: "",
    mode: "",
    comments: ""
    });

    seterrors(Validation(values));
    
    setdone(true)
  };
  

  return { handleChange, values, handleSubmit, errors, done };
}
export default UseForm;