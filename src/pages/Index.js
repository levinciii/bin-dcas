import { useEffect, useState } from "react"

// Components
import PatientsDetails from "../components/PatientsDetails"
import PatientsForm from "../components/PatientsForm"

const Index = () => {
    const [patients, setPatients] = useState(null)

    const [isLoading, setIsLoading] = useState(true);

    const fetchPatients = async () => {
        try { 
            
            const response = await fetch('/bin/patients/')
            const json = await response.json()

            if (response.ok) {
                setPatients(json)
            }
        } 
        
        catch (error) {
            console.error(error)
        } 
        
        finally {
            setIsLoading(false)
        }
       
    }

    useEffect(() => {

        fetchPatients()

    }, [])

    if (isLoading) {
        return (
            <div>
                <h1>Loading Please Wait.</h1>
            </div>
        )
    }
    
    return (
        <div className="index">
            <div className="patients">
                {patients && patients.map((patient) => (
                    <PatientsDetails key={patient._id} patient={patient} />
                ))}
            </div>
            <PatientsForm />
        </div>
    )
}

export default Index