import React, { useState } from 'react'
import './DatasetManipulation.scss'
import { ReactComponent as Table } from '../../../assets/table.svg'
import { ReactComponent as Filter } from '../../../assets/filter.svg'
import { ReactComponent as Union } from '../../../assets/union.svg'
import { ReactComponent as Cross } from '../../../assets/cross.svg'
import { ReactComponent as Graph } from '../../../assets/graph.svg'
import { ReactComponent as Column } from '../../../assets/column.svg'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar/NavBar'
import { PageWrapper } from 'app/components/PageWrapper'
import Content from '../../components/Content/Content'
import { Button } from '@mui/material'
import ColumnSelect from '../../components/ColumnSelect/ColumnSelect'
import SignSelect from '../../components/SignSelect/SignSelect'

interface Props {}

export enum Type {
    Filter,
    Union,
    Cross
}

const DatasetManipulation: React.FC<Props> = props => {
    const [type, setType] = useState<Type | null>(null)

    return (
        <>
            <Helmet>
                <title>Dataset</title>
            </Helmet>
            <NavBar menu />
            <PageWrapper>
                <Content className="dataset">
                    <div className="dataset-manipulation">
                        <div className="dataset-manipulation__title">
                            Датасеты
                        </div>
                        <div className="dataset-manipulation__raw">
                            <div className="dataset-manipulation__card">
                                <Table />
                                Таблица 1
                            </div>
                            <div className="dataset-manipulation__card">
                                <Table />
                                Таблица 2
                            </div>
                        </div>
                        <div className="dataset-manipulation__title">
                            Операция
                        </div>
                        <div className="dataset-manipulation__raw">
                            <div
                                onClick={() => setType(Type.Filter)}
                                className={`dataset-manipulation__card ${
                                    type === Type.Filter &&
                                    'dataset-manipulation__card_checked'
                                }`}
                            >
                                <Filter />
                                Фильтрация
                            </div>
                            <div
                                onClick={() => setType(Type.Union)}
                                className={`dataset-manipulation__card ${
                                    type === Type.Union &&
                                    'dataset-manipulation__card_checked'
                                }`}
                            >
                                <Union />
                                Объединение
                            </div>
                            <div
                                onClick={() => setType(Type.Cross)}
                                className={`dataset-manipulation__card ${
                                    type === Type.Cross &&
                                    'dataset-manipulation__card_checked'
                                }`}
                            >
                                <Cross />
                                Пересечение
                            </div>
                            <div className="dataset-manipulation__card">
                                <Graph />
                                Графики
                            </div>
                        </div>
                        {type === Type.Cross && (
                            <>
                                <div className="dataset-manipulation__title">
                                    Параметры
                                </div>
                                <div className="dataset-manipulation__raw">
                                    <div className="dataset-manipulation__card">
                                        <Table />
                                        Таблица 1
                                    </div>
                                    <ColumnSelect />
                                    <SignSelect />
                                    <div className="dataset-manipulation__card">
                                        <Table />
                                        Таблица 2
                                    </div>
                                    <ColumnSelect />
                                </div>
                                <Button
                                    onClick={() =>
                                        window.open(
                                            'http://194.67.113.25:8080/test1.csv',
                                            '_blank',
                                            'noreferrer'
                                        )
                                    }
                                    variant="contained"
                                    disableElevation
                                    className="login-form__submit"
                                    size="large"
                                    style={{
                                        width: '245px',
                                        borderRadius: '4px',
                                        backgroundColor: '#004BE0',
                                        padding: '18px 36px',
                                        height: '48px',
                                        color: '#FFF',
                                        fontWeight: 'bold',
                                        marginTop: '40px'
                                    }}
                                >
                                    Запустить
                                </Button>
                                <Button
                                    onClick={() =>
                                        window.open(
                                            'http://194.67.113.25:8080/test2.csv',
                                            '_blank',
                                            'noreferrer'
                                        )
                                    }
                                    variant="contained"
                                    disableElevation
                                    className="login-form__submit"
                                    size="large"
                                    style={{
                                        width: '389px',
                                        borderRadius: '4px',
                                        backgroundColor: '#004BE0',
                                        padding: '18px 36px',
                                        height: '48px',
                                        color: '#FFF',
                                        fontWeight: 'bold',
                                        marginTop: '40px',
                                        marginLeft: '33px'
                                    }}
                                >
                                    Рекомендуемые параметры
                                </Button>
                            </>
                        )}
                    </div>
                </Content>
            </PageWrapper>
        </>
    )
}

export default DatasetManipulation
