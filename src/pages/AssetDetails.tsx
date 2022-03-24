import './AssetDetails.scss'

import { useCallback, useEffect, useRef, useState } from 'react'

import { Calendar } from '../components/Calendar'
import { Header } from '../components/Header'
import { Overview } from '../components/Overview'
import { VerticalNav } from '../components/VerticalNav'

export function AssetDetails() {
    const queryList = useRef<MediaQueryList>()

    const [ovExpanded, setOvExpanded] = useState(true)
    const [queryMatch, setQueryMatch] = useState(false)
    const [navExpanded, setNavExpanded] = useState(false)

    const handleQueryChange = useCallback((e: MediaQueryListEvent) => {
        setQueryMatch(e.matches)
        setOvExpanded(e.matches)
    }, [])

    useEffect(() => {
        queryList.current = window.matchMedia(`(min-width: ${navExpanded ? '1495px' : '1337px'})`)
        queryList.current.addEventListener('change', handleQueryChange)
        setQueryMatch(queryList.current.matches)
        // setOvExpanded(queryList.current.matches)

        return () => {
            queryList.current?.removeEventListener('change', handleQueryChange)
        }
    }, [handleQueryChange, navExpanded])

    console.log({ ovExpanded, navExpanded })

    return (
        <div className="asset-details">
            <Header />
            <VerticalNav
                toggleExpanded={() => setNavExpanded(!navExpanded)}
                isExpanded={navExpanded}
            />
            <Calendar ovExpanded={ovExpanded} navExpanded={navExpanded} />
            <Overview
                isExpanded={ovExpanded}
                overlay={!queryMatch && ovExpanded}
                toggleExpanded={() => setOvExpanded(!ovExpanded)}
            />
        </div>
    )
}
