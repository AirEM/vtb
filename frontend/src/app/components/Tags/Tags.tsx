import React from 'react'
import './Tags.scss'

interface Props {
    tags?: string[]
}

const Tags: React.FC<Props> = props => {
    const { tags } = props

    if (!tags) return null

    return (
        <div className="tags">
            {tags.map((t, idx) => (
                <span className={`tags__tag tags__tag_${idx % 2}`}>{t}</span>
            ))}
        </div>
    )
}

export default Tags
