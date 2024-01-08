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
    const [emptyFields, setEmptyFields] = useState([])


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
            setEmptyFields(json.emptyFields)
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
            setEmptyFields([])
            console.log('New Patient Added!', json)
            dispatch({type: 'CREATE_PATIENTS', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add New Patient</h3>

            <label>First Name</label>
            <input type="text" onChange={(e) => setFName(e.target.value)} value={fname} className={emptyFields.includes('fname') ? 'error' : ''}/>
            
            <label>Middle Name</label>
            <input type="text" onChange={(e) => setMName(e.target.value)} value={mname} className={emptyFields.includes('mname') ? 'error' : ''}/>
            
            <label>Last Name</label>
            <input type="text" onChange={(e) => setLName(e.target.value)} value={lname} className={emptyFields.includes('lname') ? 'error' : ''}/>
            
            <label>Birth Date</label>
            <input type="date" onChange={(e) => setBirthdate(e.target.value)} value={birthdate} className={emptyFields.includes('birthdate') ? 'error' : ''}/>
            
            <label>Age</label>
            <input type="text" onChange={(e) => setAge(e.target.value)} value={age} className={emptyFields.includes('age') ? 'error' : ''}/>
            
            <label>Phone Number</label>
            <input type="text" onChange={(e) => setPhoneNum(e.target.value)} value={phone_num} className={emptyFields.includes('phone_num') ? 'error' : ''}/>
            
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className={emptyFields.includes('email') ? 'error' : ''}/>
            
            <label>Date and Time Appointment</label>
            <input type="datetime-local" onChange={(e) => setDateTime(e.target.value)} value={datetime} className={emptyFields.includes('datetime') ? 'error' : ''}/>
        
            <button>Add Patient</button>

            {error && <div className="error">{error}</div>}
        </form>
    )

}

export default PatientsForm