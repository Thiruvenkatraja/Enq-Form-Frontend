import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Components/Enq-Form/Form";
// import { useState } from "react";
// import Filter from "./Components/Filter";
import EnquiryList from "./Components/Enq-List/Enquiry-List";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from "./Components/Home/Sidebar";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import Home from "./Components/Home/Home";
import  EnqFilterList  from "./Components/Enq-List/Enq-Filter-List";

function App() {
  
  return (
    <div>
       
      
        <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/form" element={<Form />} />
          <Route path="/enqlist" element={<EnquiryList />} />
          <Route path="/enqfilterlist" element={<EnqFilterList />} />
         </Routes>
         </Router>
      
      
    </div>
  );
}

export default App;
