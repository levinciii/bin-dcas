import { useAuthContext } from './useAuthContext'
import { usePatientsContext } from './usePatientsContext'

export const useLogOut = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: patientsDispatch } = usePatientsContext()

    const logout = () => {
        // Remove User from Storage
        localStorage.removeItem('user')
        // Dispatch LogOut Action
        dispatch({type: 'LOGOUT'})
        patientsDispatch({type: 'SET_PATIENTS', payload: null})
    } 

    return { logout }
}