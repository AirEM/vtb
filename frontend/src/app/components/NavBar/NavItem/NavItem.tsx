import React, { useState } from 'react'
import './NavItem.scss'
import { Button } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EditIcon from '@mui/icons-material/Edit'
import Divider from '@mui/material/Divider'
import ArchiveIcon from '@mui/icons-material/Archive'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

interface Props {
    title: string
}

const NavItem: React.FC<Props> = props => {
    const { title } = props
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div className="nav-item">
            <Button
                id="demo-customized-button"
                aria-controls="demo-customized-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="text"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                style={{
                    textTransform: 'capitalize'
                }}
            >
                {title}
            </Button>
            <Menu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {/*<MenuItem onClick={handleClose} disableRipple>*/}
                {/*    <EditIcon />*/}
                {/*    Edit*/}
                {/*</MenuItem>*/}
                {/*<MenuItem onClick={handleClose} disableRipple>*/}
                {/*    <FileCopyIcon />*/}
                {/*    Duplicate*/}
                {/*</MenuItem>*/}
                {/*<Divider sx={{ my: 0.5 }} />*/}
                {/*<MenuItem onClick={handleClose} disableRipple>*/}
                {/*    <ArchiveIcon />*/}
                {/*    Archive*/}
                {/*</MenuItem>*/}
                {/*<MenuItem onClick={handleClose} disableRipple>*/}
                {/*    <MoreHorizIcon />*/}
                {/*    More*/}
                {/*</MenuItem>*/}
            </Menu>
        </div>
    )
}

export default NavItem
