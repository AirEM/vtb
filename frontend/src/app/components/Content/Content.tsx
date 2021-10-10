import React from 'react'
import './Content.scss'

interface Props {
    className?: string
}

const Content: React.FC<Props> = ({ className, children }) => {
    return <div className={`content ${className}`}>{children}</div>
}

export default Content
