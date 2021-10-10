import React, { useState } from 'react'
import './CardList.scss'
import {
    Card,
    CardActionArea,
    CardContent,
    Collapse,
    Grid,
    ListItemButton,
    ListItemText
} from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { ReactComponent as VTBMiniLogo } from '../../../assets/vtb-logo-mini.svg'
import { ReactComponent as RosMiniLogo } from '../../../assets/ros-logo-mini.svg'
import { ReactComponent as DITMiniLogo } from '../../../assets/dit-logo-mini.svg'
import Tags from '../Tags/Tags'
import LinearProgress from '@mui/material/LinearProgress'
import { useDispatch, useSelector } from 'react-redux'
import { selectGetPreviewDataState } from '../../../store/data/selectors'
import { AsyncState } from '../../../store/data/reducer'
import { Company } from '../Filters/Filters'
import { push } from 'connected-react-router'

export interface CardData {
    id: string
    name: string
    description: string
    tags: string[]
    company: string
}

interface Props {
    data?: CardData[] | false
    previewData?: CardData[]
    title: string
    description: string
}

const CardList: React.FC<Props> = props => {
    const dispatch = useDispatch()
    const { data, previewData, title, description } = props
    const [open, setOpen] = useState(false)
    const getPreviewDataState = useSelector(selectGetPreviewDataState)

    const handleClick = () => {
        setOpen(!open)
    }

    const loading =
        (data === false && open) ||
        (getPreviewDataState === AsyncState.inProcess && !open)

    return (
        <>
            <ListItemButton onClick={handleClick} className="card-list__toggle">
                <ListItemText primary={title} />
                {data && (
                    <span className="card-list__counter">{data.length}</span>
                )}
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <div className="card-list__description">{description}</div>
            {loading && <LinearProgress sx={{ marginBottom: '300px' }} />}
            {!loading && (
                <>
                    <Collapse in={!open} timeout="auto" unmountOnExit>
                        <Grid
                            container
                            spacing={4}
                            sx={{ marginBottom: '60px' }}
                        >
                            {previewData?.map(card => (
                                <Grid item key={card.id} xs={12} sm={6} md={4}>
                                    <Card
                                        onClick={() =>
                                            dispatch(
                                                push(`/dataset/${card.id}`)
                                            )
                                        }
                                        sx={{
                                            boxShadow:
                                                '0px 0px 14px rgba(218, 232, 250, 0.78)',
                                            borderRadius: '3px',
                                            display: 'flex'
                                        }}
                                    >
                                        <CardActionArea className="card-list__card-inner">
                                            <CardContent className="card-list__card-content">
                                                <div className="card-list__card-title">
                                                    {card.name}
                                                </div>
                                                <Tags tags={card.tags} />
                                                <div className="card-list__card-description">
                                                    {card.description}
                                                </div>
                                                <div className="card-list__card-logo">
                                                    {card.company ===
                                                        Company.DIT && (
                                                        <>
                                                            <DITMiniLogo />
                                                            ДИТ Москвы
                                                        </>
                                                    )}
                                                    {card.company ===
                                                        Company.VTB && (
                                                        <>
                                                            <VTBMiniLogo />
                                                            Банк ВТБ
                                                        </>
                                                    )}
                                                    {card.company ===
                                                        Company.Rostelecom && (
                                                        <>
                                                            <RosMiniLogo />
                                                            Ростелеком
                                                        </>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Collapse>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Grid
                            container
                            spacing={4}
                            sx={{ marginBottom: '60px' }}
                        >
                            {(data || []).map(card => (
                                <Grid item key={card.id} xs={12} sm={6} md={4}>
                                    <Card
                                        sx={{
                                            boxShadow:
                                                '0px 0px 14px rgba(218, 232, 250, 0.78)',
                                            borderRadius: '3px',
                                            display: 'flex'
                                        }}
                                    >
                                        <CardActionArea className="card-list__card-inner">
                                            <CardContent className="card-list__card-content">
                                                <div className="card-list__card-title">
                                                    {card.name}
                                                </div>
                                                <Tags tags={card.tags} />
                                                <div className="card-list__card-description">
                                                    {card.description}
                                                </div>
                                                <div className="card-list__card-logo">
                                                    {card.company === 'vtb' && (
                                                        <>
                                                            <VTBMiniLogo />
                                                            Банк ВТБ
                                                        </>
                                                    )}
                                                    {card.company === 'dit' && (
                                                        <>
                                                            <DITMiniLogo />
                                                            ДИТ Москвы
                                                        </>
                                                    )}
                                                    {card.company ===
                                                        'rostelecom' && (
                                                        <>
                                                            <RosMiniLogo />
                                                            Ростелеком
                                                        </>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Collapse>
                </>
            )}
        </>
    )
}

export default CardList
