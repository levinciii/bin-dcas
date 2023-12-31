import { useState } from "react"
import { usePatientsContext } from "../hooks/usePatientsContext"

const PatientsForm = () => {
    const {dispatch} = usePatientsContext()
    const [fname, setFName] = useState('')
    const [mname, setMName] = useState('')
    const [lname, setLName] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [age, setAge] = useState('')
    const [phone_num, setPhoneNum] = useState('')
    const [email, setEmail] = useState('')
    const [datetime, setDateTime] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const patients ={
            name: {fname, mname, lname},
            birthdate,
            age,
            contact_details: {phone_num, email},
            appointment: {datetime}
        }

        const response = await fetch('/bin/patients/', {
            method: 'POST',
            body: JSON.stringify(patients),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(patients)
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setFName('')
            setMName('')
            setLName('')
            setBirthdate('')
            setAge('')
            setPhoneNum('')
            setEmail('')
            setDateTime('')
            setError(null)
            console.log('New Patient Added!', json)
            dispatch({type: 'CREATE_PATIENTS', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add New Patient</h3>

            <label>First Name</label>
            <input type="text" onChange={(e) => setFName(e.target.value)} value={fname}/>
            
            <label>Middle Name</label>
            <input type="text" onChange={(e) => setMName(e.target.value)} value={mname}/>
            
            <label>Last Name</label>
            <input type="text" onChange={(e) => setLName(e.target.value)} value={lname}/>
            
            <label>Birth Date</label>
            <input type="date" onChange={(e) => setBirthdate(e.target.value)} value={birthdate}/>
            
            <label>Age</label>
            <input type="text" onChange={(e) => setAge(e.target.value)} value={age}/>
            
            <label>Phone Number</label>
            <input type="text" onChange={(e) => setPhoneNum(e.target.value)} value={phone_num}/>
            
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            
            <label>Date and Time Appointment</label>
            <input type="datetime-local" onChange={(e) => setDateTime(e.target.value)} value={datetime}/>
        
            <button>Add Patient</button>

            {error && <div className="error">{error}</div>}
        </form>
    )

}

export default PatientsForm