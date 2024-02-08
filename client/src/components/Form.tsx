import React, { useState, FC } from 'react'

interface FormComponentProps {
    onSubmit: (data: { name: string; type: string; description: string }) => void
}

export const FormComponent: FC<FormComponentProps> = ({ onSubmit }) => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit({ name, type, description })
        setName('')
        setType('')
        setDescription('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" required />
            <select value={type} onChange={(e) => setType(e.target.value)} required>
                <option value="">Выберите тип обращения</option>
                <option value="error">Ошибка</option>
                <option value="comment">Замечание</option>
                <option value="suggestion">Рекомендация</option>
            </select>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Описание"
                required
            />
            <button type="submit">Отправить</button>
        </form>
    )
}
