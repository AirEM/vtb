/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Route, Switch } from 'react-router-dom'

import { HomePage } from './pages/HomePage/Loadable'
import { NotFoundPage } from './pages/NotFoundPage/Loadable'
import { useTranslation } from 'react-i18next'
import LoginPage from './pages/LoginPage/LoginPage'
import { useDispatch } from 'react-redux'
import { ConnectedRouter, push } from 'connected-react-router'
import { history } from '../utils/history'
import { PartnerSettings } from './pages/PartnerSettings/Loadable'
import { Dataset } from './pages/Dataset/Loadable'
import { DatasetManipulation } from './pages/DatasetManipulation/Loadable'

export function App() {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(push('/login'))
    }, [dispatch])

    return (
        <ConnectedRouter history={history}>
            <Helmet
                defaultTitle="Loading..."
                htmlAttributes={{ lang: i18n.language }}
            />

            <Switch>
                <Route
                    exact
                    path={process.env.PUBLIC_URL + '/'}
                    component={HomePage}
                />
                <Route
                    exact
                    path={process.env.PUBLIC_URL + '/partner'}
                    component={PartnerSettings}
                />
                <Route
                    exact
                    path={process.env.PUBLIC_URL + '/dataset-manipulation'}
                    component={DatasetManipulation}
                />
                <Route
                    path={process.env.PUBLIC_URL + '/dataset/:id'}
                    component={Dataset}
                />
                <Route
                    exact
                    path={process.env.PUBLIC_URL + '/login'}
                    component={LoginPage}
                />
                <Route component={NotFoundPage} />
            </Switch>
        </ConnectedRouter>
    )
}
