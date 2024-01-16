import Moment from 'moment';
import { usePatientsContext } from '../hooks/usePatientsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const PatientsDetails = ({ patient }) => {

  let birthdate = Moment(patient.birthdate).format('M/DD/YYYY');
  let appointment_date = Moment(patient.appointment.datetime).format('M/DD/YYYY');
  let appointment_time = Moment(patient.appointment.datetime).format('LT'); 
  let createdAt = Moment(patient.createdAt).startOf('hour').fromNow(); 
  
  const { dispatch } = usePatientsContext()
  const { user } = useAuthContext()
  
  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('/bin/patients/' + patient._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
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
      <p>{createdAt}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
    </div>
  )
}

export default PatientsDetails