import { getConstants } from '../../utils/getConstants'

const dataConstants = getConstants([
    'DATA_REQUEST_STARTED',
    'DATA_REQUEST_FINISHED',
    'DATA_REQUEST_ERROR',

    'SET_CURRENT_FILTER',

    'PREVIEW_DATA_REQUEST_STARTED',
    'PREVIEW_DATA_REQUEST_FINISHED',
    'PREVIEW_DATA_REQUEST_ERROR',

    'DATASETS_DATA_REQUEST_STARTED',
    'DATASETS_DATA_REQUEST_FINISHED',
    'DATASETS_DATA_REQUEST_ERROR',

    'GEO_DATA_REQUEST_STARTED',
    'GEO_DATA_REQUEST_FINISHED',
    'GEO_DATA_REQUEST_ERROR',

    'TEMPLATES_DATA_REQUEST_STARTED',
    'TEMPLATES_DATA_REQUEST_FINISHED',
    'TEMPLATES_DATA_REQUEST_ERROR',

    'CARD_DATA_REQUEST_STARTED',
    'CARD_DATA_REQUEST_FINISHED',
    'CARD_DATA_REQUEST_ERROR'
])

export default dataConstants