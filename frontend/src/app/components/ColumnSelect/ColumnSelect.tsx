import React, { useState } from 'react'
import './ColumnSelect.scss'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { ReactComponent as Column } from '../../../assets/column.svg'

interface Props {}

const ColumnSelect: React.FC<Props> = props => {
    const [column, setColumn] = useState('Колонка 1')

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = (column: string) => () => {
        setColumn(column)
        setAnchorEl(null)
    }

    return (
        <>
            <div className="dataset-manipulation__card" onClick={handleClick}>
                <Column />
                {column}
            </div>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose('Колонка 1')}>
                    {'Колонка 1'}
                </MenuItem>
                <MenuItem onClick={handleClose('Колонка 2')}>
                    {'Колонка 2'}
                </MenuItem>
                <MenuItem onClick={handleClose('Колонка 3')}>
                    {'Колонка 3'}
                </MenuItem>
                <MenuItem onClick={handleClose('Колонка 4')}>
                    {'Колонка 4'}
                </MenuItem>
            </Menu>
        </>
    )
}

export default ColumnSelect
