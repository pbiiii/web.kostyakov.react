import React from 'react'
import { Form, Input, Button } from 'element-react'
import './RegisterForm.scss'

export const RegisterForm = () => (
    <Form labelWidth="120">
        <Form.Item label="E-mail">
            <Input name="email" id="email"/>
        </Form.Item>
        <Form.Item label="Password">
            <Input name="password" id="password"/>
        </Form.Item>
        <Form.Item>
            <Button type="primary" nativeType="submit">
                Зарегистрироваться
            </Button>
        </Form.Item>
    </Form>
)