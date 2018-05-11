import React from "react";
import {Form} from 'element-react'

export const EditTaskForm = ({body, title, onChange}) => (
    <Form >
        <Form.Item label="Заголовок" labelWidth={120}>
            <input value={title} name="title" onChange={onChange}/>
        </Form.Item>
        <Form.Item label="Текст" labelWidth={120}>
            <textarea value={body} name="body" onChange={onChange}>{body}</textarea>
        </Form.Item>
    </Form>
)