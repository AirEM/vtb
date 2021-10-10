import React from 'react'
import './Footer.scss'
import { ReactComponent as Phone } from './../../../assets/phone.svg'

interface Props {}

const Footer: React.FC<Props> = props => {
    return (
        <div className="footer">
            <div className="footer__copyright">
                &copy; Банк ВТБ (ПАО), 2007–2021. Банк ВТБ использует{' '}
                <a href="">файлы cookie</a> для повышения удобства работы с ВТБ
                Онлайн. В cookie содержатся данные о прошлых посещениях сайта.
            </div>
            <div className="footer__contacts">
                <div className="footer__contacts-container">
                    <Phone className="footer__contacts-logo" />
                    Контакты
                </div>
            </div>
        </div>
    )
}

export default Footer
