import React from 'react'
import './LoginPage.scss'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar/NavBar'
import { PageWrapper } from '../../components/PageWrapper'
import Footer from '../../components/Footer/Footer'
import Content from 'app/components/Content/Content'
import AuthenticationForm from '../../components/AuthenticationForm/AuthenticationForm'
import LoginMotivation from '../../components/LoginMotivation/LoginMotivation'

interface Props {}

const LoginPage: React.FC<Props> = props => {
    return (
        <>
            <Helmet>
                <title>Login Page</title>
            </Helmet>
            <NavBar />
            <PageWrapper>
                <Content className="login-page__content">
                    <AuthenticationForm />
                    <LoginMotivation />
                </Content>
                <Footer />
            </PageWrapper>
        </>
    )
}

export default LoginPage
