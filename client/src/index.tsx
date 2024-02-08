/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './index.module.scss'
import { FormComponent } from './components/Form'
import reportWebVitals from './reportWebVitals'
import { RequestsTable } from './components/Table'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
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

root.render(
    <React.StrictMode>
        <div className={styles.container}>
            <RequestsTable requests={requestData} />
        </div>
        {false && (
            <FormComponent
                onSubmit={function (data: { name: string; type: string; description: string }): void {
                    throw new Error('Function not implemented.')
                }}
            />
        )}
    </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
