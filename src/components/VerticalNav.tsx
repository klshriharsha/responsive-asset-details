import './VerticalNav.scss'

import cn from 'classnames'

import { ExpandButton } from './ExpandButton'

interface VerticalNavProps {
    isExpanded?: boolean
    toggleExpanded: VoidFunction
}

export function VerticalNav({ isExpanded, toggleExpanded }: VerticalNavProps) {
    return (
        <div className={cn('nav', { 'nav--expanded': isExpanded })}>
            <span>{isExpanded ? 'Side Navigation' : 'Nav'}</span>
            <ExpandButton ltr isExpanded={isExpanded} onClick={toggleExpanded} />
        </div>
    )
}
