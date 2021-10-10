import React from 'react'
import './Filters.scss'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentFilter } from '../../../store/data/selectors'
import { useFormik } from 'formik'
import { Filter } from '../../../store/data/reducer'
import { setCurrentFilter } from '../../../store/data/actions'

export enum Company {
    VTB = 'Банк ВТБ',
    DIT = 'ДИТ Москвы',
    Rostelecom = 'Ростелеком'
}

export enum Tariff {
    paid = 'Платный',
    free = 'Бесплатный',
    subscription = 'По подписке',
    subscription_discount = 'Скидка по подписке'
}

interface Props {
    datasetsNumber: number
    geoLayersNumber: number
    templatesNumber: number
}

const Filters: React.FC<Props> = props => {
    const dispatch = useDispatch()
    const { datasetsNumber, geoLayersNumber, templatesNumber } = props

    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            [Tariff.paid]: false,
            [Tariff.free]: false,
            [Tariff.subscription]: false,
            [Tariff.subscription_discount]: false,
            [Company.VTB]: false,
            [Company.DIT]: false,
            [Company.Rostelecom]: false,
            IT: false,
            Finance: false
        },
        onSubmit: values => {
            const tariffs: string[] = []
            values[Tariff.paid] && tariffs.push(Tariff.paid)
            values[Tariff.free] && tariffs.push(Tariff.free)
            values[Tariff.subscription] && tariffs.push(Tariff.subscription)
            values[Tariff.subscription_discount] &&
                tariffs.push(Tariff.subscription_discount)

            const tags: string[] = []
            values['IT'] && tags.push('IT')
            values['Finance'] && tags.push('Финансы')

            const companies: string[] = []
            values[Company.VTB] && companies.push(Company.VTB)
            values[Company.DIT] && companies.push(Company.DIT)
            values[Company.Rostelecom] && companies.push(Company.Rostelecom)

            const newFilter: Filter = {
                ...(tariffs.length && { tariffs }),
                ...(tags.length && { tags }),
                ...(companies.length && { companies })
            }
            dispatch(setCurrentFilter(newFilter))
        }
    })

    const handleChange = (event: any) => {
        formik.handleChange(event)
        formik.handleSubmit()
    }

    return (
        <form className="filters">
            <div className="filters__section">
                <div className="filters__section-title">Категория</div>
                <div className="filters__section-item">
                    Датасеты
                    <span className="filters__section-num">
                        {datasetsNumber}
                    </span>
                </div>
                <div className="filters__section-item">
                    Геослои
                    <span className="filters__section-num">
                        {geoLayersNumber}
                    </span>
                </div>
                <div className="filters__section-item">
                    Шаблоны
                    <span className="filters__section-num">
                        {templatesNumber}
                    </span>
                </div>
            </div>
            <div className="filters__section">
                <div className="filters__section-title">Тариф</div>
                <FormGroup>
                    <FormControlLabel
                        checked={formik.values[Tariff.paid]}
                        name={Tariff.paid}
                        onChange={handleChange}
                        control={<Checkbox />}
                        label="Платный"
                    />
                    <FormControlLabel
                        checked={formik.values[Tariff.free]}
                        name={Tariff.free}
                        onChange={handleChange}
                        control={<Checkbox />}
                        label="Бесплатный"
                    />
                    <FormControlLabel
                        checked={formik.values[Tariff.subscription]}
                        name={Tariff.subscription}
                        onChange={handleChange}
                        control={<Checkbox />}
                        label="По подписке"
                    />
                    <FormControlLabel
                        checked={formik.values[Tariff.subscription_discount]}
                        name={Tariff.subscription_discount}
                        onChange={handleChange}
                        control={<Checkbox />}
                        label="Скидка по подписке"
                    />
                </FormGroup>
            </div>
            <div className="filters__section">
                <div className="filters__section-title">Компания</div>
                <FormGroup>
                    <FormControlLabel
                        checked={formik.values[Company.VTB]}
                        name={Company.VTB}
                        onChange={handleChange}
                        control={<Checkbox />}
                        label="Банк ВТБ"
                    />
                    <FormControlLabel
                        checked={formik.values[Company.DIT]}
                        name={Company.DIT}
                        onChange={handleChange}
                        control={<Checkbox />}
                        label="ДИТ Москвы"
                    />
                    <FormControlLabel
                        checked={formik.values[Company.Rostelecom]}
                        name={Company.Rostelecom}
                        onChange={handleChange}
                        control={<Checkbox />}
                        label="Ростелеком"
                    />
                </FormGroup>
            </div>
            <div className="filters__section">
                <div className="filters__section-title">Теги</div>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formik.values.Finance}
                                name="Finance"
                                onChange={handleChange}
                            />
                        }
                        label="Финансы"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formik.values.IT}
                                name="IT"
                                onChange={handleChange}
                            />
                        }
                        label="IT"
                    />
                </FormGroup>
            </div>
        </form>
    )
}

export default Filters
