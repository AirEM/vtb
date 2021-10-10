import * as React from 'react'
import './NavBar.scss'
import Logo from '../Logo/Logo'
import { Nav } from './Nav'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Button } from '@mui/material'
import Menu from '@mui/material/Menu'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import MenuItem from '@mui/material/MenuItem'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'
import IconButton from '@mui/material/IconButton'

const IconStyle = {
    fontSize: '30px'
}

interface Props {
    menu?: boolean
}

const NavBar: React.FC<Props> = props => {
    const dispatch = useDispatch()
    const { menu } = props
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <header className="header">
            <div className="header__wrapper">
                <Logo onClick={() => dispatch(push('/'))} />
                {menu && (
                    <>
                        <Nav />
                        <div className="header__account">
                            <IconButton
                                className="header__settings-icon"
                                onClick={() => dispatch(push('/partner'))}
                            >
                                <SettingsIcon style={IconStyle} />
                            </IconButton>
                            <Button
                                id="demo-customized-button"
                                aria-controls="demo-customized-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                variant="text"
                                disableElevation
                                onClick={handleClick}
                                style={{
                                    textTransform: 'capitalize'
                                }}
                            >
                                <AccountCircleIcon
                                    className="header__account-icon"
                                    style={IconStyle}
                                />
                                <div className="header__account-name">
                                    Ростелеком
                                </div>
                            </Button>
                            <Menu
                                id="demo-customized-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose} disableRipple>
                                    <ExitToAppIcon />
                                    Выйти
                                </MenuItem>
                            </Menu>
                        </div>
                    </>
                )}
            </div>
        </header>
    )
}

export default NavBar

// const Wrapper = styled.header`
//     @supports (backdrop-filter: blur(10px)) {
//         backdrop-filter: blur(10px);
//         background-color: ${p =>
//             p.theme.background.replace(
//                 /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
//                 'rgba$1,0.75)'
//             )};
//     }
//
//     ${PageWrapper} {
//         display: flex;
//         align-items: center;
//         justify-content: space-between;
//     }
// `
