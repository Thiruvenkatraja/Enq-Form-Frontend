import UseForm from "../../Hooks/Useform";
import Validation from "../../Utils/Validation";



 const EnquiryForm=()=> {
  const { handleChange, values, handleSubmit, errors, done} =
    UseForm(Validation);

 
  
    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substring(0,10);
    
  return (
    <div className="form-right">
      
      <form className="form" onSubmit={handleSubmit}>
        <h1>Fill The Details To Save Data</h1>
        <div className="form-fields">
        <div className="form-inputs">
          <label htmlFor="" className="formlabel">
           Name *
          </label>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        
         <div className="form-inputs">
          <label htmlFor="" className="formlabel">
            Followup-call-date *
          </label>
          <input
            className="form-input"
            name="followupcalldate"
            placeholder="Enter date"
            type="date"
            value={values.followupcalldate||date}
            onChange={handleChange}
          />
          {errors.followupstartdate && <p>{errors.followupstartdate}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="" className="formlabel">
            Follow-Up-Status *
          </label>
          <select className="form-input" name="followupstatus" value={values.followupstatus} onChange={handleChange}>
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
          {errors.followupstatus && <p>{errors.followupstatus}</p>}
        </div>
        <div className="form-inputs message">
          <label htmlFor="" className="formlabel">
            Comments *
          </label>
          <textarea
            className="form-input"
            type="text"
            name="comments"
            placeholder="Enter Comments"
            value={values.comments}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="" className="formlabel">
            Enquiry By *
          </label>
          <select className="form-input" name="enquiryby" value={values.enquiryby} onChange={handleChange}>
            <option >Click to select</option>
            <option >Email</option>
            <option >Mobile</option>
            <option >Email&Mobile</option>
            </select>
          {errors.enquiryby && <p>{errors.enquiryby}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="" className="formlabel">
            Mobile *
          </label>
          <input
            className="form-input"
            type="number"
            name="mobile"
            placeholder="Enter your MobileNum"
            value={values.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p>{errors.mobile}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="" className="formlabel">
            Location *
          </label>
          <input
            className="form-input"
            type="text"
            name="location"
            placeholder="Enter Location"
            value={values.location}
            onChange={handleChange}
          />
          {errors.location && <p>{errors.location}</p>}
        </div> 
        <div className="form-inputs">
          <label htmlFor="" className="formlabel">
            Course *
          </label>
          <input
            className="form-input"
            type="text"
            name="course"
            placeholder="Enter Course"
            value={values.course}
            onChange={handleChange}
          />
          {errors.course && <p>{errors.course}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="" className="formlabel">
           FeeStructure
          </label>
          <input
            className="form-input"
            type="text-area"
            name="feestructure"
            placeholder="Enter FeeStructure"
            value={values.feestructure}
            onChange={handleChange}
          />
          {errors.feestructure && <p>{errors.feestructure}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="" className="formlabel">
            Experience/Domain*
          </label>
          <select className="form-input" name="experienceby" value={values.experienceby} onChange={handleChange}>
            <option >Click to select</option>
            <option >Working Professional</option>
            <option >Corporate</option>
            <option >Fresher</option>
            <option >Student</option>
            </select>
          {errors.experienceby && <p>{errors.experienceby}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="" className="formlabel">
            Info-Source *
          </label>
          <input
            className="form-input"
            type="text"
            name="infosource"
            placeholder="Enter Infosource"
            value={values.infosource}
            onChange={handleChange}
          />
          {errors.infosource && <p>{errors.infosource}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="" className="formlabel">
            Purpose *
          </label>
          <input
            className="form-input"
            type="text"
            name="purpose"
            placeholder="Enter Purpose"
            value={values.purpose}
            onChange={handleChange}
          />
          {errors.purpose && <p>{errors.purpose}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="" className="formlabel">
            Mode *
          </label>
          <select className="form-input" name="mode" value={values.mode} onChange={handleChange}>
            <option >Click to select Mode</option>
            <option >Online</option>
            <option >Offline</option>
            <option >Both</option>
            </select>
          {errors.mode && <p>{errors.mode}</p>}
        </div>
        

        
        <button className="submit-btn">Submit</button>
        {Object.keys(errors).length === 0 && done ? (
        <div className="success">Thanking for Contacting Us</div>
        ) : ("")}
       
        </div>
      </form>
    </div>
  );
}
export default EnquiryForm  