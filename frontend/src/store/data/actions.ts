import userService from '../../services/user'
import dataConstants from './constants'
import { push } from 'connected-react-router'
import { Dispatch } from '../configureStore'
import { Filter } from './reducer'
import dataService, { PreviewCardData } from '../../services/data'
import { CardData } from '../../app/components/CardList/CardList'
// import { NonAuthRoutes } from '../../routes'
// import { showErrorNotification } from '../notifications/actions'

export enum CategoryType {
    datasets = 'datasets',
    geolayers = 'geolayers',
    templates = 'templates'
}

export interface CardDataInfo {
    id: number
    name: string
    description: string
    cost: number
    owner: string
    type: string
    company: string
    category: string
    tags: string[]
}

export const getData = (username: string, password: string) => {
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
        return { type: dataConstants.DATA_REQUEST_STARTED }
    }
    function success() {
        return { type: dataConstants.DATA_REQUEST_FINISHED }
    }
    function failure(error: any) {
        return { type: dataConstants.DATA_REQUEST_ERROR, error }
    }
}

export const setCurrentFilter = (filter: Filter) => {
    return (dispatch: Dispatch) => {
        dispatch(success(filter))
    }

    function success(filter: Filter) {
        return { type: dataConstants.SET_CURRENT_FILTER, payload: filter }
    }
}

export const getPreviewData = (filter: Filter) => {
    return (dispatch: Dispatch) => {
        dispatch(request())

        dataService.getPreviews(filter).then(
            result => {
                dispatch(success(result))
            },
            error => {
                dispatch(failure(error))
                console.log(error)
            }
        )
    }

    function request() {
        return { type: dataConstants.PREVIEW_DATA_REQUEST_STARTED }
    }
    function success(result: PreviewCardData[]) {
        return {
            type: dataConstants.PREVIEW_DATA_REQUEST_FINISHED,
            payload: result
        }
    }
    function failure(error: Error) {
        return { type: dataConstants.PREVIEW_DATA_REQUEST_ERROR, error }
    }
}

export const getDatasetsData = (filter: Filter) => {
    return (dispatch: Dispatch) => {
        dispatch(request())

        dataService.getByCategory(CategoryType.datasets, filter).then(
            result => {
                dispatch(success(result))
            },
            error => {
                dispatch(failure(error))
                console.log(error)
            }
        )
    }

    function request() {
        return { type: dataConstants.DATASETS_DATA_REQUEST_STARTED }
    }
    function success(result: CardData[]) {
        return { type: dataConstants.DATASETS_DATA_REQUEST_FINISHED }
    }
    function failure(error: Error) {
        return { type: dataConstants.DATASETS_DATA_REQUEST_ERROR, error }
    }
}

export const getGeoLayersData = (filter: Filter) => {
    return (dispatch: Dispatch) => {
        dispatch(request())

        dataService.getByCategory(CategoryType.geolayers, filter).then(
            result => {
                dispatch(success(result))
            },
            error => {
                dispatch(failure(error))
                console.log(error)
            }
        )
    }

    function request() {
        return { type: dataConstants.GEO_DATA_REQUEST_STARTED }
    }
    function success(result: CardData[]) {
        return { type: dataConstants.GEO_DATA_REQUEST_FINISHED }
    }
    function failure(error: Error) {
        return { type: dataConstants.GEO_DATA_REQUEST_ERROR, error }
    }
}

export const getTemplatesData = (filter: Filter) => {
    return (dispatch: Dispatch) => {
        dispatch(request())

        dataService.getByCategory(CategoryType.templates, filter).then(
            result => {
                dispatch(success(result))
            },
            error => {
                dispatch(failure(error))
                console.log(error)
            }
        )
    }

    function request() {
        return { type: dataConstants.TEMPLATES_DATA_REQUEST_STARTED }
    }
    function success(result: CardData[]) {
        return { type: dataConstants.TEMPLATES_DATA_REQUEST_FINISHED }
    }
    function failure(error: Error) {
        return { type: dataConstants.TEMPLATES_DATA_REQUEST_ERROR, error }
    }
}

export const getCard = (id: string) => {
    return (dispatch: Dispatch) => {
        dispatch(request())

        dataService.getCard(id).then(
            result => {
                dispatch(success(result))
            },
            error => {
                dispatch(failure(error))
                console.log(error)
            }
        )
    }

    function request() {
        return { type: dataConstants.CARD_DATA_REQUEST_STARTED }
    }
    function success(result: CardDataInfo) {
        return {
            type: dataConstants.CARD_DATA_REQUEST_FINISHED,
            payload: result
        }
    }
    function failure(error: Error) {
        return { type: dataConstants.CARD_DATA_REQUEST_ERROR, error }
    }
}
