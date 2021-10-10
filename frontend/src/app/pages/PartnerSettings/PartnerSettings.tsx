import React from 'react'
import './PartnerSettings.scss'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import { PageWrapper } from 'app/components/PageWrapper'
import Content from '../../components/Content/Content'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { ReactComponent as RosLogo } from '../../../assets/ros-logo.svg'
import { Button, TextField } from '@mui/material'
import UserItem from '../../components/UserItem/UserItem'
import Avatar1 from '../../../assets/avatar-1.png'
import Avatar2 from '../../../assets/avatar-2.png'
import Avatar3 from '../../../assets/avatar-3.png'
import Avatar4 from '../../../assets/avatar-4.png'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Backdrop from '@mui/material/Backdrop'
import AddUserForm from '../../components/AddUserForm/AddUserForm'
import { IconButton } from '@mui/material'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4
}

const users = [
    { name: 'Тимур Фирсаков', role: 'Менеджер', img: Avatar1 },
    { name: 'Евгений Майоров', role: 'Сотрудник', img: Avatar2 },
    { name: 'Анастасия Рыженкова', role: 'Data Scientist', img: Avatar3 },
    { name: 'Илья Марашли', role: 'Data Scientist', img: Avatar4 }
]

interface Props {}

const PartnerSettings: React.FC<Props> = props => {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <Helmet>
                <title>Partner Settings</title>
            </Helmet>
            <NavBar menu />
            <PageWrapper>
                <Content className="partner-settings">
                    <div className="partner-settings__back">
                        <IconButton
                            aria-label="back"
                            onClick={() => dispatch(push('/'))}
                        >
                            <ArrowBackIosIcon />
                        </IconButton>
                        <RosLogo />
                        <span className="partner-settings__back-text">
                            Ростелеком
                        </span>
                    </div>
                    <div className="partner-settings__content">
                        <div className="partner-settings__users">
                            <div className="partner-settings__subtitle">
                                Текущие пользователи
                            </div>
                            {users.map(user => (
                                <UserItem
                                    name={user.name}
                                    img={user.img}
                                    role={user.role}
                                />
                            ))}
                            <Button
                                onClick={handleOpen}
                                variant="contained"
                                disableElevation
                                fullWidth
                                className="login-form__submit"
                                size="large"
                                style={{
                                    width: '390px',
                                    borderRadius: '4px',
                                    backgroundColor: '#004BE0',
                                    padding: '18px 36px',
                                    height: '48px',
                                    color: '#FFF',
                                    fontWeight: 'bold',
                                    marginTop: '25px'
                                }}
                            >
                                Добавить
                            </Button>
                        </div>
                        <div className="partner-settings__upload">
                            <div className="partner-settings__subtitle">
                                Загрузка новых данных
                            </div>
                            <form className="partner-settings__upload-form">
                                <TextField
                                    margin="normal"
                                    id="name"
                                    name="name"
                                    label="Название датасета"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    margin="normal"
                                    id="description"
                                    name="description"
                                    label="Описание датасета"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    minRows={5}
                                    maxRows={5}
                                />
                                <Button
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
                                        marginTop: '25px'
                                    }}
                                >
                                    Прикрепить данные
                                </Button>
                            </form>
                        </div>
                    </div>
                </Content>
                <Footer />
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <AddUserForm />
                        </Box>
                    </Fade>
                </Modal>
            </PageWrapper>
        </>
    )
}

export default PartnerSettings
