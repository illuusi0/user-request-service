import React, { useState, FC } from 'react'
import '../styles/Form.scss'

interface FormComponentProps {
    onSubmit: (data: { name: string; type: string; description: string; date: string; status: string }) => void
}

export const FormComponent: FC<FormComponentProps> = ({ onSubmit }) => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const currentDate = new Date().toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = {
            date: currentDate,
            name,
            description,
            type,
            status: 'В очереди',
        }

        fetch('http://localhost:3001/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                const contentType = response.headers.get('content-type')
                if (contentType && contentType.indexOf('application/json') !== -1) {
                    return response.json()
                } else {
                    throw new Error('Response not JSON')
                }
            })
            .then((data) => {
                console.log('Success:', data)
                setName('')
                setType('')
                setDescription('')
                if (onSubmit) onSubmit(formData)
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    return (
        <>
            <p className="form-date">Дата: {currentDate}</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ваше имя"
                        required
                    />
                </div>
                <div className="form-group">
                    <select className="form-control" value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value="">Выберите тип обращения</option>
                        <option value="Ошибка">Ошибка</option>
                        <option value="Замечание">Замечание</option>
                        <option value="Рекомендация">Рекомендация</option>
                    </select>
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Описание"
                        required
                    />
                </div>
                <div className="form-group">
                    <button className="form-button" type="submit">
                        Отправить
                    </button>
                </div>
            </form>
        </>
    )
}
