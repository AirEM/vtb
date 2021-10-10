import { API, API_URL } from './api'
import { Filter } from '../store/data/reducer'
import { CardData } from '../app/components/CardList/CardList'
import queryString from 'query-string'
import { CardDataInfo } from '../store/data/actions'

export interface PreviewCardData {
    category: string
    cards: CardData[]
}

const dataService = {
    getCards: (request: Filter): Promise<CardData[]> =>
        API.get(`/dataset/card`, { params: request }).then(
            response => response.data
        ),
    getCard: (id: string): Promise<CardDataInfo> =>
        // API.get(`/dataset/card/${id}`).then(response => response.data),
        fetch(`${API_URL}/dataset/card/${id}`).then(response =>
            response.json()
        ),
    // getPreviews: (request: Filter): Promise<PreviewCardData[]> =>
    //     API.get('/dataset/card/preview', { params: request }).then(
    //         response => response.data
    //     ),
    getPreviews: (request: Filter): Promise<PreviewCardData[]> =>
        fetch(
            `${API_URL}/dataset/card/preview?` + queryString.stringify(request)
        ).then(response => response.json()),
    // getByCategory: (category: string, filter: Filter): Promise<CardData[]> =>
    //     API.get('/dataset/card/by-category', {
    //         params: { category, ...filter }
    //     }).then(response => response.data),
    getByCategory: (category: string, filter: Filter): Promise<CardData[]> =>
        fetch(
            `${API_URL}/dataset/card/by-category?` +
                queryString.stringify({ category, ...filter })
        ).then(response => response.json())
}

export default dataService
