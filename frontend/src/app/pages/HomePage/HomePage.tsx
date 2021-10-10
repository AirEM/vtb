import * as React from 'react'
import { useEffect } from 'react'
import './HomePage.scss'
import { Helmet } from 'react-helmet-async'
import NavBar from 'app/components/NavBar/NavBar'
import { PageWrapper } from 'app/components/PageWrapper'
import CardList from '../../components/CardList/CardList'
import List from '@mui/material/List'
import Filters from '../../components/Filters/Filters'
import Footer from '../../components/Footer/Footer'
import Content from '../../components/Content/Content'
import { useDispatch, useSelector } from 'react-redux'
import {
    getDatasetsData,
    getGeoLayersData,
    getPreviewData,
    getTemplatesData
} from '../../../store/data/actions'
import {
    selectCurrentFilter,
    selectDatasetsData,
    selectDatasetsDataState,
    selectGeoData,
    selectGeoDataState,
    selectPreviewData,
    selectTemplatesData,
    selectTemplatesDataState
} from '../../../store/data/selectors'
import { AsyncState } from '../../../store/data/reducer'

export function HomePage() {
    const previewData = useSelector(selectPreviewData)

    const templatesData = useSelector(selectTemplatesData)
    const templatesDataState = useSelector(selectTemplatesDataState)

    const geoData = useSelector(selectGeoData)
    const geoDataState = useSelector(selectGeoDataState)

    const datasetsData = useSelector(selectDatasetsData)
    const datasetsDataState = useSelector(selectDatasetsDataState)

    const filter = useSelector(selectCurrentFilter)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPreviewData(filter))
        dispatch(getTemplatesData(filter))
        dispatch(getGeoLayersData(filter))
        dispatch(getDatasetsData(filter))
    }, [dispatch, filter])

    return (
        <>
            <Helmet>
                <title>MarketPlace</title>
            </Helmet>
            <NavBar menu />
            <PageWrapper>
                <Content>
                    <List sx={{ paddingTop: '50px' }}>
                        <CardList
                            title="Датасеты"
                            description="Набор датасетов разных компаний"
                            previewData={
                                (previewData || []).find(
                                    d => d.category === 'datasets'
                                )?.cards
                            }
                            data={
                                datasetsDataState !== AsyncState.inProcess &&
                                datasetsData
                            }
                        />
                        <CardList
                            title="Геослои"
                            description="Набор геоданных"
                            previewData={
                                (previewData || []).find(
                                    d => d.category === 'geolayers'
                                )?.cards
                            }
                            data={
                                geoDataState !== AsyncState.inProcess && geoData
                            }
                        />
                        <CardList
                            title="Шаблоны"
                            description="Набор шаблонов для отчетов"
                            previewData={
                                (previewData || []).find(
                                    d => d.category === 'templates'
                                )?.cards
                            }
                            data={
                                templatesDataState !== AsyncState.inProcess &&
                                templatesData
                            }
                        />
                    </List>
                </Content>
                <Filters
                    datasetsNumber={4}
                    geoLayersNumber={4}
                    templatesNumber={2}
                />
                <Footer />
            </PageWrapper>
        </>
    )
}
