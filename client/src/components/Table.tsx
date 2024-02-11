import React, { FC, useState } from 'react'
import styles from '../styles/Table.module.scss'
import Modal from './Modal'
import RequestDetailsModal from './DetailsModal'

interface Request {
    date: string
    name: string
    description: string
    type: string
    status: string
}

interface RequestsTableProps {
    requests: Request[]
}

export const RequestsTable: FC<RequestsTableProps> = ({ requests }) => {
    const [sortConfig, setSortConfig] = useState<{ key: keyof Request; direction: 'ascending' | 'descending' }>({
        key: 'date',
        direction: 'descending',
    })

    const sortedRequests = [...requests].sort((a, b) => {
        const { key, direction } = sortConfig

        let comparison = 0
        if (key === 'date') {
            const dateA = new Date(a.date.split('.').reverse().join('-')).getTime()
            const dateB = new Date(b.date.split('.').reverse().join('-')).getTime()
            comparison = dateA - dateB
        } else {
            const aValue = a[key] as string
            const bValue = b[key] as string
            comparison = aValue.localeCompare(bValue)
        }

        return direction === 'ascending' ? comparison : -comparison
    })

    const requestSort = (key: keyof Request) => {
        let direction: 'ascending' | 'descending' = 'ascending'
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending'
        }
        setSortConfig({ key, direction })
    }

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedRequest, setSelectedRequest] = useState<Request | null>(null)

    const handleRequestClick = (request: Request) => {
        setSelectedRequest(request)
        setIsModalOpen(true)
    }

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
        <>
            <table className={styles.tableContent}>
                <thead>
                    <tr>
                        <th onClick={() => requestSort('date')}>
                            Дата <span>&#9660;</span>
                        </th>
                        <th onClick={() => requestSort('name')}>
                            Имя <span>&#9660;</span>
                        </th>
                        <th>Описание</th>
                        <th onClick={() => requestSort('type')}>
                            Тип <span>&#9660;</span>
                        </th>
                        <th onClick={() => requestSort('status')}>
                            Статус <span>&#9660;</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedRequests.map((request, index) => (
                        <tr key={index} className={styles.tableBody}>
                            <td>{request.date}</td>
                            <td>{request.name}</td>
                            <td onClick={() => handleRequestClick(request)}>{request.description}</td>
                            <td>{request.type}</td>
                            <td>
                                <span className={getStatusClassName(request.status)}>{request.status}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && selectedRequest && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <RequestDetailsModal request={selectedRequest} onClose={() => setIsModalOpen(false)} />
                </Modal>
            )}
        </>
    )
}
