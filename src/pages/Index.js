import { useEffect } from "react"
import { usePatientsContext } from "../hooks/usePatientsContext"

// Components
import PatientsDetails from "../components/PatientsDetails"
import PatientsForm from "../components/PatientsForm"

const Index = () => {
    const {patients, dispatch} = usePatientsContext()
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPatients = async () => {
            const response = await fetch('/bin/patients/')
            const json = await response.json()
            
            try { 
                if (response.ok) {
                    dispatch({type: 'SET_PATIENTS', payload: json})
                }
            } 
            
            catch (error) {
                console.error(error)
            } 
            
            // finally {
            //     setIsLoading(false)
            // }
        }

        fetchPatients()
    }, [])

    // if (isLoading) {
    //     return (
    //         <div>
    //             <h1>Loading Please Wait.</h1>
    //         </div>
    //     )
    // }
    
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