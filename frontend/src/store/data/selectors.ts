import { RootState } from '../reducers'

export const selectCurrentFilter = (state: RootState) => state.data.filter
export const selectCurrentCardData = (state: RootState) => state.data.cardData
export const selectGetCurrentCardDataState = (state: RootState) =>
    state.data.cardDataState
export const selectPreviewData = (state: RootState) => state.data.previewData
export const selectDatasetsData = (state: RootState) => state.data.datasetsData
export const selectDatasetsDataState = (state: RootState) =>
    state.data.datasetsDataState
export const selectTemplatesDataState = (state: RootState) =>
    state.data.templatesDataState
export const selectTemplatesData = (state: RootState) =>
    state.data.templatesData
export const selectGeoData = (state: RootState) => state.data.geoData
export const selectGeoDataState = (state: RootState) => state.data.geoDataState
export const selectGetPreviewDataState = (state: RootState) =>
    state.data.previewDataState
