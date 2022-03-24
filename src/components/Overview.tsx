import './Overview.scss'

import cn from 'classnames'

import { ExpandButton } from './ExpandButton'

interface OverviewProps {
    overlay?: boolean
    isExpanded?: boolean
    toggleExpanded: VoidFunction
}

export function Overview({ overlay, isExpanded, toggleExpanded }: OverviewProps) {
    return (
        <div
            className={cn('overview', {
                'overview--open': isExpanded,
                'overview--overlay': overlay,
            })}
        >
            <div className="overview__panel">
                <ExpandButton isExpanded={isExpanded} onClick={toggleExpanded} />
                <span className="overview__content">Overview</span>
            </div>
        </div>
    )
}
