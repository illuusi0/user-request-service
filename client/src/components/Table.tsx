import React, { FC } from 'react'
import styles from '../styles/Table.module.scss'

// Определяем тип для элемента списка запросов
interface Request {
    date: string
    name: string
    description: string
    type: string
    status: string
}

// Определяем пропсы для RequestsTable
interface RequestsTableProps {
    requests: Request[]
}

export const RequestsTable: FC<RequestsTableProps> = ({ requests }) => {
    const getStatusClassName = (status: string) => {
        switch (status) {
            case 'Готово':
                return styles.statusReady
            case 'В очереди':
                return styles.statusInQueue
            case 'В работе':
                return styles.statusInProgress
            default:
                return ''
        }
    }

    return (
        <table className={styles.tableContent}>
            <thead>
                <tr>
                    <th>
                        Дата <span> &#9660; </span>
                    </th>
                    <th>
                        Имя <span> &#9660; </span>
                    </th>
                    <th>Описание </th>
                    <th>
                        Тип <span> &#9660; </span>
                    </th>
                    <th>
                        Статус <span> &#9660; </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {requests.map((request, index) => (
                    <tr key={index} className={styles.tableBody}>
                        <td>{request.date}</td>
                        <td>{request.name}</td>
                        <td>{request.description}</td>
                        <td>{request.type}</td>
                        <td>
                            <span className={getStatusClassName(request.status)}>{request.status}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
