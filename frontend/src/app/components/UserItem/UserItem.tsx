import React from 'react'
import './UserItem.scss'
import Avatar from '@mui/material/Avatar'
import CreateIcon from '@mui/icons-material/Create'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

interface Props {
    name: string
    role: string
    img: string
}

const UserItem: React.FC<Props> = props => {
    const { name, role, img } = props
    return (
        <div className="user-item">
            <Avatar alt="" src={img} />
            <div className="user-item__info">
                <div className="user-item__name">{name}</div>
                <div className="user-item__role">{role}</div>
            </div>
            <div className="user-item__toolbar">
                <CreateIcon />
                <VpnKeyIcon />
                <DeleteOutlineIcon />
            </div>
        </div>
    )
}

export default UserItem
