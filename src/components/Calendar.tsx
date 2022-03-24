import './Calendar.scss'

import { useCallback, useEffect, useState } from 'react'

import { Month } from './Month'

interface CalendarProps {
    ovExpanded?: boolean
    navExpanded?: boolean
}

export function Calendar({ ovExpanded, navExpanded }: CalendarProps) {
    const [numMonths, setNumMonths] = useState(1)

    const handleQueryChange = useCallback((e: MediaQueryListEvent) => {
        if (e.matches) {
            setNumMonths(2)
        } else {
            setNumMonths(1)
        }
    }, [])

    const getBreakpoint = useCallback(() => {
        if (ovExpanded && navExpanded) {
            return '2115px'
        } else if (ovExpanded && !navExpanded) {
            return '1997px'
        } else if (!ovExpanded && navExpanded) {
            return '1754px'
        } else if (!ovExpanded && !navExpanded) {
            return '1596px'
        }
    }, [ovExpanded, navExpanded])

    useEffect(() => {
        const queryList = window.matchMedia(`(min-width: ${getBreakpoint()})`)
        queryList.addEventListener('change', handleQueryChange)
        if (queryList.matches) {
            setNumMonths(2)
        } else {
            setNumMonths(1)
        }

        return () => {
            queryList?.removeEventListener('change', handleQueryChange)
        }
    }, [handleQueryChange, getBreakpoint])

    return (
        <div className="calendar">
            <div className="calendar__month">
                <Month month="September 2021" />
            </div>
            {numMonths > 1 && (
                <div className="calendar__month">
                    <Month month="October 2021" />
                </div>
            )}
        </div>
    )
}
