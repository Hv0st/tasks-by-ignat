import React from 'react'
import s from '../h1/Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.wrapper}>
            <div className={s.avatarWrap}>
                <img className={s.avatar} src={props.avatar} alt={props.name}/>
            </div>
            <div className={s.content}>
                <span className={s.name}>{props.name}</span>
                <p className={s.text}>{props.message}</p>
                <time className={s.time}>{props.time}</time>
            </div>
        </div>
    )
}

export default Message
