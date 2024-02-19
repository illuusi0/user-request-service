import React, { FC, useState } from 'react'
import styles from '../styles/Table.module.css'
import Modal from './Modal'
import RequestDetailsModal from './DetailsModal'
import filter from '../assets/filter.svg'

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
    if (!Array.isArray(requests)) {
        console.error('Expected requests to be an array', requests)
        return null
    }
    return (
        <>
            <table className={styles.tableContent}>
                <thead className={styles.tableHead}>
                    <tr>
                        <th className={styles.pointer} onClick={() => requestSort('date')}>
                            Дата <img className={styles.img} src={filter} alt="filter" />
                        </th>
                        <th className={styles.pointer} onClick={() => requestSort('name')}>
                            Имя <img className={styles.img} src={filter} alt="filter" />
                        </th>
                        <th>Описание</th>
                        <th className={styles.pointer} onClick={() => requestSort('type')}>
                            Тип <img className={styles.img} src={filter} alt="filter" />
                        </th>
                        <th className={styles.pointer} onClick={() => requestSort('status')}>
                            Статус <img className={styles.img} src={filter} alt="filter" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ height: '10px' }}>
                        <td colSpan={5}></td>
                    </tr>
                    {sortedRequests.map((request, index) => (
                        <tr key={index} className={styles.tableBody}>
                            <td className={styles.date}>{request.date}</td>
                            <td className={styles.name}>{request.name}</td>
                            <td className={styles.description} onClick={() => handleRequestClick(request)}>
                                {request.description}
                            </td>
                            <td className={styles.type}>{request.type}</td>
                            <td className={getStatusClassName(request.status)}>{request.status}</td>
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
