import React, { useEffect } from 'react'
import './Dataset.scss'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import { PageWrapper } from 'app/components/PageWrapper'
import Content from '../../components/Content/Content'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCard } from '../../../store/data/actions'
import { selectCurrentCardData } from '../../../store/data/selectors'
import Tags from '../../components/Tags/Tags'
import { Company } from '../../components/Filters/Filters'
import { ReactComponent as VTBMiniLogo } from '../../../assets/vtb-logo-mini.svg'
import { ReactComponent as RosMiniLogo } from '../../../assets/ros-logo-mini.svg'
import { ReactComponent as DITMiniLogo } from '../../../assets/dit-logo-mini.svg'
import { Button } from '@mui/material'
import { push } from 'connected-react-router'

interface Props {}

const Dataset: React.FC<Props> = props => {
    const { id } = useParams<{ id: string }>()
    const dispatch = useDispatch()
    const card = useSelector(selectCurrentCardData)

    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        dispatch(getCard(id))
    }, [id, dispatch])

    if (!card) return null

    return (
        <>
            <Helmet>
                <title>Dataset</title>
            </Helmet>
            <NavBar menu />
            <PageWrapper>
                <Content className="dataset">
                    <div className="dataset__content">
                        <div className="dataset__company">
                            {card.company === Company.Rostelecom && (
                                <>
                                    <RosMiniLogo />
                                    Ростелеком
                                </>
                            )}
                            {card.company === Company.VTB && (
                                <>
                                    <VTBMiniLogo />
                                    Банк ВТБ
                                </>
                            )}
                            {card.company === Company.DIT && (
                                <>
                                    <DITMiniLogo />
                                    Департамент информационных технологий
                                </>
                            )}
                        </div>
                        <div className="dataset__title">{card.name}</div>
                        <Tags tags={card.tags} />
                        <div className="dataset__subtitle">Описание</div>
                        <div className="dataset__description">
                            {card.description}
                        </div>
                        <div className="dataset__subtitle">
                            Примеры использования
                        </div>
                        <ul className="dataset__list">
                            <li>
                                Детальное изучение статистики социальной рекламы
                                Яндекса.
                            </li>
                            <li>Экспорт публикуемых данных.</li>
                        </ul>
                    </div>
                    <div className="dataset__aside">
                        <div className="dataset__info">
                            Используя данный продукт вы соглашаетесь с правилами
                            площадки
                        </div>
                        <Button
                            // onClick={handleOpen}
                            variant="contained"
                            disableElevation
                            fullWidth
                            className="login-form__submit"
                            size="large"
                            style={{
                                borderRadius: '4px',
                                backgroundColor: '#004BE0',
                                padding: '18px 36px',
                                height: '48px',
                                color: '#FFF',
                                fontWeight: 'bold',
                                marginTop: '25px'
                            }}
                        >
                            Приобрести
                        </Button>
                        <Button
                            onClick={() =>
                                dispatch(push('/dataset-manipulation'))
                            }
                            variant="contained"
                            disableElevation
                            fullWidth
                            className="login-form__submit"
                            size="large"
                            style={{
                                borderRadius: '4px',
                                backgroundColor: '#F0F2F5',
                                padding: '18px 36px',
                                height: '48px',
                                color: '#626F84',
                                fontWeight: 'bold',
                                marginTop: '22px'
                            }}
                        >
                            Попробовать
                        </Button>
                    </div>
                </Content>
                <Footer />
            </PageWrapper>
        </>
    )
}

export default Dataset
