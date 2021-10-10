import React from 'react'
import './LoginForm.scss'
import { Button, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

interface Props {}

const PhoneForm: React.FC<Props> = () => {
    const dispatch = useDispatch()

    return (
        <form className="login-form">
            <div className="login-form__content">
                <TextField
                    margin="normal"
                    id="phone"
                    label="Номер телефона"
                    placeholder="+7 (000) 000 00 00"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    margin="normal"
                    id="sms"
                    label="Код из СМС"
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="login-form__footer">
                <Button
                    onClick={() => dispatch(push('/partner'))}
                    variant="contained"
                    disableElevation
                    fullWidth
                    className="login-form__submit"
                    size="large"
                    style={{
                        borderRadius: 4,
                        backgroundColor: '#F0F2F5',
                        padding: '18px 36px',
                        height: '48px',
                        color: '#626F84',
                        fontWeight: 'bold'
                    }}
                >
                    Вход
                </Button>
                <div className="login-form__help">
                    Если возникли вопросы, воспользуйтесь{' '}
                    <a href="">подсказкой.</a>
                </div>
            </div>
        </form>
    )
}

export default PhoneForm
