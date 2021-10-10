import React from 'react'
import './LoginMotivation.scss'
import joinImg from '../../../assets/join-image.png'

const LoginMotivation: React.FC = () => {
    return (
        <div className="login-motivation">
            <div className="login-motivation__title">
                Присоединяйтесь к новому методу аналитики с ВТБ
            </div>
            <img src={joinImg} alt="" className="login-motivation__img" />
            <div className="login-motivation__text">
                Инструменты для разработки и анализа данных, обеспечения
                безопасности, создания бизнес-приложений и решения множества
                других задач
            </div>
        </div>
    )
}

export default LoginMotivation
