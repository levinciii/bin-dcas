const PatientsDetails = ({ patient }) => {

    return (
      <div className="patient-details">
        <h4>{patient.name.fname} {patient.name.mname} {patient.name.lname}</h4>
        <p><strong>Birthdate: </strong>{patient.birthdate}</p>
        <p><strong>Age: </strong>{patient.age}</p>
        <p><strong>Contact Details: </strong></p>
        <p><div className="tab"></div><strong>Phone Number: </strong>{patient.contact_details.phone_num}</p>
        <p><div className="tab"></div><strong>Email: </strong>{patient.contact_details.email}</p>
        <p><strong>Appointment: </strong></p>
        <p><div className="tab"></div><strong>Date: </strong>{patient.appointment.date}</p>
        <p><div className="tab"></div><strong>Time: </strong>{patient.appointment.time}</p>
        <p>{patient.createdAt}</p>
      </div>
    )
  }
  
  export default PatientsDetails