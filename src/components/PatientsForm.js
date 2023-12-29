import { useState } from "react"

const PatientsForm = () => {
    const [fname, setFName] = useState('')
    const [mname, setMName] = useState('')
    const [lname, setLName] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [age, setAge] = useState('')
    const [phone_num, setPhoneNum] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const patients ={
            name: {fname, mname, lname},
            birthdate,
            age,
            contact_details: {phone_num, email},
            appointment: {date, time}
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
            setDate('')
            setTime('')
            setError(null)
            console.log('New Patient Added!', json)
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
            
            <label>Date</label>
            <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
            
            <label>Time</label>
            <input type="time" onChange={(e) => setTime(e.target.value)} value={time}/>
        
            <button>Add Patient</button>
            {error && <div className="error">{error}</div>}
        </form>
    )

}

export default PatientsForm