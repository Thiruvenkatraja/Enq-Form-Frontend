import React from "react";
import Button from "react-bootstrap/Button";

const EnqEditTable = ({ values, handleChange }) => {
  return (
    <tr>
      <td>
        <button
          type="submit"
          style={{ borderStyle: "none", marginLeft: "0.5rem" }}
        >
          <Button
            style={{
              display: "flex",
              alignItems: "centre",
              justifyContent: "centre",
            }}
          >
            <i className="fa fa-check" aria-hidden="true" />
          </Button>
        </button>
      </td>
      <td>
      <input
            // className="form-input"
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={values.name}
            onChange={handleChange}
          />
      </td>
      <td>
      <input
            // className="form-input textbox-n"
            name="followupcalldate"
            placeholder="Enter date"
            type="date"
            value={values.followupcalldate}
            onChange={handleChange}
          />
      </td>
      <td>
      <select name="followupstatus" value={values.followupstatus} onChange={handleChange}>
            <option >Click to select status</option>
            <option >Demo Scheduled</option>
            <option >Demo Completed</option>
            <option >Trainer Needed</option>
            <option >Confrimed</option>
            <option >Yet to Schedule Demo</option>
            <option >Not able to Provide</option>
            <option >Need to Follow</option>
            <option >No Response</option>
            <option >Others</option>
            </select>
      </td>

      <td>
      <textarea
            // className="form-input"
            type="text"
            name="comments"
            placeholder="Enter Comments"
            value={values.comments}
            onChange={handleChange}
          />
      </td>
      <td>
      <select name="enquiryby" value={values.enquiryby} onChange={handleChange}>
            <option >Click to select</option>
            <option >Email</option>
            <option >Mobile</option>
            <option >Email&Mobile</option>
            </select>
      </td>
      <td>
      <input
            // className="form-input"
            type="number"
            name="mobile"
            placeholder="Enter your MobileNum"
            value={values.mobile}
            onChange={handleChange}
          />
      </td>
      <td>
      <input
            // className="form-input"
            type="text"
            name="location"
            placeholder="Enter Location"
            value={values.location}
            onChange={handleChange}
          />
      </td>
      <td>
      <input
            // className="form-input"
            type="text"
            name="course"
            placeholder="Enter Course"
            value={values.course}
            onChange={handleChange}
          />
      </td>
      <td>
      <input
            // className="form-input"
            type="text-area"
            name="feestructure"
            placeholder="Enter FeeStructure"
            value={values.feestructure}
            onChange={handleChange}
          />
      </td>
      <td>
      <select  name="experienceby" value={values.experienceby} onChange={handleChange}>
            <option >Click to select status</option>
            <option >Working Professional</option>
            <option >Corporate</option>
            <option >Fresher</option>
            <option >Student</option>
            </select>
      </td>
      <td>
      <input
            // className="form-input"
            type="text"
            name="infosource"
            placeholder="Enter Infosource"
            value={values.infosource}
            onChange={handleChange}
          />
      </td>
      <td>
      <input
            // className="form-input"
            type="text"
            name="purpose"
            placeholder="Enter Purpose"
            value={values.purpose}
            onChange={handleChange}
          />
      </td>
      <td>
      <select  name="mode" value={values.mode} onChange={handleChange}>
            <option >Click to select Mode</option>
            <option >Online</option>
            <option >Offline</option>
            <option >Both</option>
            </select>
      </td>
      
    </tr>
  );
};
export default EnqEditTable;
