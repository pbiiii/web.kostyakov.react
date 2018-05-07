import React from "react";
import {Form, Input} from 'element-react'

export const EditTaskForm = ({body, title, onChange}) => (
    <Form >
        <Form.Item label="Заголовок" labelWidth={120}>
            <input value={title} name="title" onChange={onChange}/>
        </Form.Item>
        <Form.Item label="Текст" labelWidth={120}>
            <input value={body} name="body" onChange={onChange}/>
        </Form.Item>
    </Form>
)