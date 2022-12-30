import React,{useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
export default function EnqDataTable({ obj , handleEditClick,List,setList,paged,setPaged}) {


  const[show,setShow]=useState(false);
  const[deleteId,setDeleteId]=useState("")
  const handleClose=()=>{
    setShow(false)
  }
  const handleDeleteClick=(id)=>{
    setDeleteId(id)
    setShow(true)
  }
  const deleteEnqdata =async () => {
   await axios.delete(` https://curious-dog-baseball-cap.cyclic.app/enq/delete-enqdata/${deleteId}`)
      .then((res) => console.log("Employee Data Successfully deleted"))

      .catch((error) => {
        console.log(error);
      });
      const newList=List.filter((lists)=>lists._id !== deleteId)
      setPaged(newList)||setList(newList);
      setShow(false)
  };

  return (
    
    
      <tr >
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Click Ok to Delete or Else Cancel</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={deleteEnqdata}>
            OK
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <td >
          <Button
           
            onClick={() =>{
               handleDeleteClick(obj._id)
            }
          }
            size="sm"
            variant="primary"
          >
           <i className="fa fa-trash-o" aria-hidden="true"></i>
          </Button>
          <Button
          style={{marginLeft:'1rem'}}
            onClick={(event) => { handleEditClick(event,obj)}}
            size="sm"
            variant="primary"
          >
           <i className="fa fa-pencil" aria-hidden="true"/>
          </Button>
        </td>
        <td>{obj.name}</td>
        <td>{obj.followupcalldate}</td>
        <td>{obj.followupstatus}</td>
        <td>{obj.comments}</td>
        <td>{obj.enquiryby}</td>
        <td>{obj.mobile}</td>
        <td>{obj.location}</td>
        <td>{obj.course}</td>
        <td>{obj.feestructure}</td>
        <td>{obj.experienceby}</td>
        <td>{obj.infosource}</td>
        <td>{obj.purpose}</td>
        <td>{obj.mode}</td>
        
      </tr>
    
  );
}
