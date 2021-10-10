import dataConstants from './constants'
import { Reducer } from 'redux'
import { PreviewCardData } from '../../services/data'
import { CardData } from '../../app/components/CardList/CardList'
import { CardDataInfo } from './actions'

export enum AsyncState {
    inProcess,
    success,
    error,
    unknown
}

export interface Filter {
    tags?: string[]
    tariffs?: string[]
    companies?: string[]
}

export interface DataState {
    previewDataState: AsyncState
    templatesDataState: AsyncState
    geoDataState: AsyncState
    datasetsDataState: AsyncState
    cardDataState: AsyncState
    previewData: PreviewCardData[]
    templatesData: CardData[]
    geoData: CardData[]
    datasetsData: CardData[]
    cardData: CardDataInfo | null
    filter: Filter
}

const INITIAL_STATE: DataState = {
    previewDataState: AsyncState.unknown,
    templatesDataState: AsyncState.unknown,
    geoDataState: AsyncState.unknown,
    datasetsDataState: AsyncState.unknown,
    cardDataState: AsyncState.unknown,
    previewData: [],
    templatesData: [],
    geoData: [],
    datasetsData: [],
    cardData: null,
    filter: {}
}

const dataReducer: Reducer<DataState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case dataConstants.DATA_REQUEST_STARTED:
            return { ...state, loginState: AsyncState.inProcess }
        case dataConstants.DATA_REQUEST_FINISHED:
            return { ...state, loginState: AsyncState.success }
        case dataConstants.DATA_REQUEST_ERROR:
            return { ...state, loginState: AsyncState.error }
        case dataConstants.PREVIEW_DATA_REQUEST_STARTED:
            return { ...state, previewDataState: AsyncState.inProcess }
        case dataConstants.PREVIEW_DATA_REQUEST_FINISHED:
            return {
                ...state,
                previewDataState: AsyncState.success,
                previewData: action.payload
            }
        case dataConstants.PREVIEW_DATA_REQUEST_ERROR:
            return { ...state, previewDataState: AsyncState.error }
        case dataConstants.SET_CURRENT_FILTER:
            return { ...state, filter: action.payload }
        case dataConstants.TEMPLATES_DATA_REQUEST_STARTED:
            return { ...state, templatesDataState: AsyncState.inProcess }
        case dataConstants.TEMPLATES_DATA_REQUEST_FINISHED:
            return {
                ...state,
                templatesDataState: AsyncState.success,
                templatesData: action.payload
            }
        case dataConstants.TEMPLATES_DATA_REQUEST_ERROR:
            return { ...state, templatesDataState: AsyncState.error }
        case dataConstants.GEO_DATA_REQUEST_STARTED:
            return { ...state, geoDataState: AsyncState.inProcess }
        case dataConstants.GEO_DATA_REQUEST_FINISHED:
            return {
                ...state,
                geoDataState: AsyncState.success,
                geoData: action.payload
            }
        case dataConstants.GEO_DATA_REQUEST_ERROR:
            return { ...state, geoDataState: AsyncState.error }
        case dataConstants.DATASETS_DATA_REQUEST_STARTED:
            return { ...state, datasetsDataState: AsyncState.inProcess }
        case dataConstants.DATASETS_DATA_REQUEST_FINISHED:
            return {
                ...state,
                datasetsDataState: AsyncState.success,
                datasetsData: action.payload
            }
        case dataConstants.DATASETS_DATA_REQUEST_ERROR:
            return { ...state, datasetsDataState: AsyncState.error }
        case dataConstants.CARD_DATA_REQUEST_STARTED:
            return { ...state, cardDataState: AsyncState.inProcess }
        case dataConstants.CARD_DATA_REQUEST_FINISHED:
            return {
                ...state,
                cardDataState: AsyncState.success,
                cardData: action.payload
            }
        case dataConstants.CARD_DATA_REQUEST_ERROR:
            return { ...state, cardDataState: AsyncState.error }
        default:
            return state
    }
}

export default dataReducer
