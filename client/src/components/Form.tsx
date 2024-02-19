import React, { useState, FC } from 'react'
import styles from '../styles/Form.module.css'

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

        onSubmit(formData)

        setName('')
        setType('')
        setDescription('')
    }

    return (
        <>
            <p className="form-date">Дата: {currentDate}</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <input
                        className={styles.formControl}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ваше имя"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <select
                        className={styles.formControl}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        <option value="">Выберите тип обращения</option>
                        <option value="Ошибка">Ошибка</option>
                        <option value="Замечание">Замечание</option>
                        <option value="Рекомендация">Рекомендация</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <textarea
                        className={styles.formControl}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Описание"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <button className={styles.formButton} type="submit">
                        Отправить
                    </button>
                </div>
            </form>
        </>
    )
}
