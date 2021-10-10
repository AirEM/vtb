import userService from '../../services/user'
import userConstants from './constants'
import { push } from 'connected-react-router'
import { Dispatch } from '../configureStore'
// import { NonAuthRoutes } from '../../routes'
// import { showErrorNotification } from '../notifications/actions'

export const login = (username: string, password: string) => {
    return (dispatch: Dispatch) => {
        dispatch(request())

        userService.login({ username, password }).then(
            () => {
                dispatch(success())
                dispatch(push('/'))
            },
            error => {
                dispatch(failure(error))
                // dispatch(showErrorNotification('Failed to login'))
            }
        )
    }

    function request() {
        return { type: userConstants.LOGIN_REQUEST_STARTED }
    }
    function success() {
        return { type: userConstants.LOGIN_REQUEST_FINISHED }
    }
    function failure(error: any) {
        return { type: userConstants.LOGIN_REQUEST_ERROR, error }
    }
}

export const logout = () => {
    return (dispatch: Dispatch) => {
        dispatch(request())
        userService.logout().then(() => dispatch(push('/login')))
    }

    function request() {
        return { type: userConstants.LOGOUT }
    }
}

export const signup = (username: string, email: string, password: string) => {
    return (dispatch: Dispatch) => {
        dispatch(request())

        userService.signup({ username, email, password }).then(
            () => {
                dispatch(success())
                dispatch(push('/'))
            },
            error => {
                dispatch(failure(error))
                // dispatch(showErrorNotification('Failed to sign up'))
            }
        )
    }

    function request() {
        return { type: userConstants.SIGNUP_REQUEST_STARTED }
    }
    function success() {
        return { type: userConstants.SIGNUP_REQUEST_FINISHED }
    }
    function failure(error: Error) {
        return { type: userConstants.SIGNUP_REQUEST_ERROR, error }
    }
}
