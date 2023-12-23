const PatientsDetails = ({ patient }) => {

    return (
      <div className="patient-details">
        <h4>{patient.name.fname} {patient.name.mname} {patient.name.lname}</h4>
        <p><strong>Birthdate: </strong>{patient.birthdate}</p>
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
          <p><strong>Date: </strong>{patient.appointment.date}</p>
        </div>
        <br></br>
        <div className="tab">
          <p><strong>Time: </strong>{patient.appointment.time}</p>
        </div>
        <p>{patient.createdAt}</p>
      </div>
    )
  }
  
  export default PatientsDetails