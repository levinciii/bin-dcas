import { useContext } from 'react'
import { PatientsContext } from '../context/PatientsContext'

export const usePatientsContext = () => {
    const context = useContext(PatientsContext)

    if(!context) {
        throw Error('usePatientsContext must be used inside an PatientsContextProvider.')
    }

    return context
}