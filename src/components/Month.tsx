import './Month.scss'

interface MonthProps {
    month?: string
}

export function Month({ month }: MonthProps) {
    const getBody = () => {
        const body = []
        let row = []
        for (let i = 0; i < 28; i++) {
            row.push(<td>{i + 1}</td>)
            if ((i + 1) % 7 === 0) {
                body.push(<tr>{row.map(el => el)}</tr>)
                row = []
            }
        }

        return body
    }

    return (
        <table className="month">
            <caption>{month}</caption>
            <thead>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
            </thead>
            <tbody>{getBody().map(row => row)}</tbody>
        </table>
    )
}
