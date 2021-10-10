import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import './AuthenticationForm.scss'
import PhoneForm from '../LoginForm/PhoneForm'
import { Box } from '@mui/material'
import TokenForm from '../LoginForm/TokenForm'

export enum AuthType {
    Phone = 'phone',
    Token = 'token'
}

interface Props {}

const AuthenticationForm: React.FC<Props> = props => {
    const [value, setValue] = React.useState(AuthType.Phone)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div className="authentication-form">
            <div className="authentication-form__header">ВТБ Маркетплейс</div>
            <Box
                sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    centered
                    variant="fullWidth"
                >
                    <Tab label="Телефон" value={AuthType.Phone} />
                    <Tab label="Токен" value={AuthType.Token} />
                </Tabs>
            </Box>
            {value === AuthType.Phone && <PhoneForm />}
            {value === AuthType.Token && <TokenForm />}
        </div>
    )
}

export default AuthenticationForm
