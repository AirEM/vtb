import React from 'react'
import './LoginForm.scss'
import { Button, TextareaAutosize } from '@mui/material'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

const NUMBER_OF_ROWS = 12

interface Props {}

const TokenForm: React.FC<Props> = props => {
    const dispatch = useDispatch()

    return (
        <form className="login-form">
            <div className="login-form__content">
                <TextareaAutosize
                    className="login-form__textarea"
                    aria-label="minimum height"
                    minRows={NUMBER_OF_ROWS}
                    maxRows={NUMBER_OF_ROWS}
                    placeholder="Токен для авторизации"
                />
            </div>
            <div className="login-form__footer">
                <Button
                    onClick={() => dispatch(push('/'))}
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

export default TokenForm
