import { useEffect, useState } from 'react'
import { usePatientsContext } from '../hooks/usePatientsContext'
import { useAuthContext } from '../hooks/useAuthContext'

// Components
import PatientsDetails from '../components/PatientsDetails'
import PatientsForm from '../components/PatientsForm'

const Index = () => {
    const {patients, dispatch} = usePatientsContext()
    const [isLoading, setIsLoading] = useState(false)
    const [isNotLoggedIn, setLogIn] = useState(false)
    const { user } = useAuthContext()

    useEffect(() => {

        if (user) {
            setIsLoading(true)
        }
        
        if (!user) {
            setLogIn(true)
        }
        
        const fetchPatients = async () => {

            const response = await fetch('/bin/patients/', {
                headers: { 
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            
            try { 
                if (response.ok) {
                    dispatch({type: 'SET_PATIENTS', payload: json})
                }
            } 
            
            catch (error) {
                console.error(error)
            } 
            
            finally {
                setIsLoading(false)
                setLogIn(false)
            }
        }

        if (user) {
            fetchPatients()
        }

    }, [dispatch, user])

    if (isLoading) {
        return (
            <div>
                <h1>Loading, Please Wait.</h1>
            </div>
        )
    }

    if (isNotLoggedIn) {
        return (
            <div>
                <h1>Please Log In First!</h1>
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