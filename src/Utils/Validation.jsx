export default function Validation(values){
    let errors={}

    if(!values.name){
        errors.name="Name Required"
    }
    if(!values.followupcalldate){
        errors.followupcalldate="Followup Date Required"
    }
    if(!values.followupstatus){
        errors.followupstatus="Status Required"
    }
    if(!values.enquiryby){
        errors.enquiryby="Enquiry By Required"
    }   
    if(!values.mobile){
        errors.mobile="MobileNum Required"
    }else if(values.mobile.length < 10){
        errors.mobile="MobileNum Not valid"
    }
    if(!values.location){
        errors.location="Location Required"
    }
    if(!values.course){
        errors.course="Course Required"
    }
    if(!values.feestructure){
        errors.feestructure="FeeStructure Required"
    }
    if(!values.experienceby){
        errors.experienceby="Experienceby Required"
    }
    if(!values.infosource){
        errors.infosource="InfoSource Required"
    }
    if(!values.purpose){
        errors.purpose="Purpose Required"
    }
    if(!values.mode){
        errors.mode="Mode Required"
    }
  

    return errors;
}