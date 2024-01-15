import { useAuthContext } from './useAuthContext'

export const useLogOut = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        // Remove User from Storage
        localStorage.removeItem('user')
        // Dispatch LogOut Action
        dispatch({type: 'LOGOUT'})
    } 

    return { logout }
}