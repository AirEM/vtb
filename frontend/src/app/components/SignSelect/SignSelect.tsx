import React, { useState } from 'react'
import './SignSelect.scss'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

interface Props {}

const SignSelect: React.FC<Props> = props => {
    const [sign, setSign] = useState('=')

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = (sign: string) => () => {
        setSign(sign)
        setAnchorEl(null)
    }

    return (
        <>
            <div className="select-sign" onClick={handleClick}>
                {sign}
            </div>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose('=')}>{'='}</MenuItem>
                <MenuItem onClick={handleClose('>')}>{'>'}</MenuItem>
                <MenuItem onClick={handleClose('<')}>{'<'}</MenuItem>
            </Menu>
        </>
    )
}

export default SignSelect
