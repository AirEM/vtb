/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from '@reduxjs/toolkit'

import { InjectedReducersType } from 'utils/types/injector-typings'
import authReducer, { AuthState } from './auth/reducer'
import { connectRouter, RouterState } from 'connected-react-router'
import { history } from '../utils/history'
import dataReducer, { DataState } from './data/reducer'

export interface RootState {
    router: RouterState
    auth: AuthState
    data: DataState
}
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export const createReducer = (injectedReducers: InjectedReducersType = {}) => {
    // Initially we don't have any injectedReducers, so returning identity function to avoid the error
    if (Object.keys(injectedReducers).length === 0) {
        return state => state
    } else {
        return combineReducers({
            router: connectRouter(history),
            auth: authReducer,
            data: dataReducer,
            ...injectedReducers
        })
    }
}
