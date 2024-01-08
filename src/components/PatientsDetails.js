import Moment from 'moment';
import { usePatientsContext } from '../hooks/usePatientsContext'

const PatientsDetails = ({ patient }) => {

  let birthdate = Moment(patient.birthdate).format('M/DD/YYYY');
  let appointment_date = Moment(patient.appointment.datetime).format('M/DD/YYYY');
  let appointment_time = Moment(patient.appointment.datetime).format('LT'); 

  const { dispatch } = usePatientsContext()
  const handleClick = async () => {
    const response = await fetch('/bin/patients/' + patient._id, {
      method: 'DELETE'
    })
    
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_PATIENTS', payload: json})
    }
  }

  return (
    <div className="patient-details">
      <h4>{patient.name.fname} {patient.name.mname} {patient.name.lname}</h4>
      <p><strong>Birthdate: </strong>{birthdate}</p>
      <p><strong>Age: </strong>{patient.age}</p>
      <p><strong>Contact Details: </strong></p>
      <div className="tab">
        <p><strong>Phone Number: </strong>{patient.contact_details.phone_num}</p>
      </div>
      <br></br>
      <div className="tab">
        <p><strong>Email: </strong>{patient.contact_details.email}</p>
      </div>
      <p><strong>Appointment: </strong></p>
      <div className="tab">
        <p><strong>Date: </strong>{appointment_date}</p>
      </div>
      <br></br>
      <div className="tab">
        <p><strong>Time: </strong>{appointment_time}</p>
      </div>
      <p>{patient.createdAt}</p>
      <span onClick={handleClick}>Delete</span>
    </div>
  )
}

export default PatientsDetails