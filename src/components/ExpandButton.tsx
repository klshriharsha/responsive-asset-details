import './ExpandButton.scss'

import cn from 'classnames'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface ExpandButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    ltr?: boolean
    isExpanded?: boolean
}

export function ExpandButton({ ltr, isExpanded, ...props }: ExpandButtonProps) {
    let icon = null
    if (ltr) {
        icon = isExpanded ? <FaChevronLeft /> : <FaChevronRight />
    } else {
        icon = isExpanded ? <FaChevronRight /> : <FaChevronLeft />
    }

    return (
        <button className={cn('expand-button', { 'expand-button--ltr': ltr })} {...props}>
            {icon}
        </button>
    )
}
