import React, { useState } from 'react'

import styles from './index.module.scss'
import { FormComponent } from './components/Form'
import { RequestsTable } from './components/Table'
import Modal from './components/Modal'
import Button from './components/Button'

const requestData = [
    {
        date: '31.01.2024',
        name: 'Иван Иванов',
        type: 'Ошибка',
        description: 'В тексте опечатка',
        status: 'Готово',
    },
    {
        date: '31.01.2024',
        name: 'Петр Петров',
        type: 'Замечание',
        description: 'Цвет кнопки слишком яркий',
        status: 'В очереди',
    },
    {
        date: '31.01.2024',
        name: 'Алексей Алексеев',
        type: 'Рекомендация',
        description: 'Добавить возможность сохранения данных',
        status: 'В работе',
    },
    {
        date: '18.02.2024',
        name: 'Петр Петров',
        type: 'Замечание',
        description: 'Цвет кнопки слишком яркий',
        status: 'В очереди',
    },
    {
        date: '10.03.2024',
        name: 'Петр Петров',
        type: 'Замечание',
        description: 'Цвет кнопки слишком яркий',
        status: 'В очереди',
    },
    {
        date: '03.03.2024',
        name: 'Петр Петров',
        type: 'Замечание',
        description: 'Цвет кнопки слишком яркий',
        status: 'В очереди',
    },
    {
        date: '04.02.2024',
        name: 'Алексей Алексеев',
        type: 'Рекомендация',
        description: 'Добавить возможность сохранения данных',
        status: 'В работе',
    },
    {
        date: '22.02.2024',
        name: 'Алексей Алексеев',
        type: 'Рекомендация',
        description: 'Добавить возможность сохранения данных',
        status: 'В работе',
    },
    {
        date: '31.03.2024',
        name: 'Петр Петров',
        type: 'Замечание',
        description: 'Цвет кнопки слишком яркий',
        status: 'В очереди',
    },
    {
        date: '21.02.2024',
        name: 'Алексей Алексеев',
        type: 'Рекомендация',
        description: 'Добавить возможность сохранения данных',
        status: 'В работе',
    },
    {
        date: '13.03.2024',
        name: 'Петр Петров',
        type: 'Замечание',
        description: 'Цвет кнопки слишком яркий',
        status: 'В очереди',
    },
    {
        date: '01.03.2024',
        name: 'Алексей Алексеев',
        type: 'Рекомендация',
        description: 'Добавить возможность сохранения данных',
        status: 'В работе',
    },
    {
        date: '17.03.2024',
        name: 'Алексей Алексеев',
        type: 'Рекомендация',
        description: 'Добавить возможность сохранения данных',
        status: 'В работе',
    },
    {
        date: '03.03.2024',
        name: 'Алексей Алексеев',
        type: 'Рекомендация',
        description: 'Добавить возможность сохранения данных',
        status: 'В работе',
    },
    {
        date: '10.02.2024',
        name: 'Алексей Алексеев',
        type: 'Рекомендация',
        description: 'Добавить возможность сохранения данных',
        status: 'В работе',
    },
    {
        date: '16.03.2024',
        name: 'Алексей Алексеев',
        type: 'Рекомендация',
        description: 'Добавить возможность сохранения данных',
        status: 'В работе',
    },
    {
        date: '06.04.2024',
        name: 'Петр Петров',
        type: 'Замечание',
        description: 'Цвет кнопки слишком яркий',
        status: 'В очереди',
    },
    {
        date: '13.03.2024',
        name: 'Алексей Алексеев',
        type: 'Рекомендация',
        description: 'Добавить возможность сохранения данных',
        status: 'В работе',
    },
    {
        date: '23.02.2024',
        name: 'Иван Иванов',
        type: 'Ошибка',
        description: 'В тексте опечатка',
        status: 'Готово',
    },
    {
        date: '13.04.2024',
        name: 'Петр Петров',
        type: 'Замечание',
        description: 'Цвет кнопки слишком яркий',
        status: 'В очереди',
    },
]

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <div className={styles.container}>
            <Button onClick={openModal}> + создать сообщение </Button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <FormComponent
                    onSubmit={(data: { name: string; type: string; description: string }): void => {
                        throw new Error('Function not implemented.')
                    }}
                />
            </Modal>
            <RequestsTable requests={requestData} />
            {false && (
                <FormComponent
                    onSubmit={(data: { name: string; type: string; description: string }): void => {
                        throw new Error('Function not implemented.')
                    }}
                />
            )}
        </div>
    )
}

export default App
