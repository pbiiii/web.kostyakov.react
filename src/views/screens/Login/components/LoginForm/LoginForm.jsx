import React from 'react'
import { Form, Button } from 'element-react'

export const LoginForm = ({password, email, onChange, onSubmit}) => (
    <Form labelWidth="120" onSubmit={onSubmit}>
        <Form.Item label="E-mail">
            <input onChange={onChange} value={email} name="email" type="email" id="email" required />
        </Form.Item>
        <Form.Item label="Password">
            <input onChange={onChange} value={password} name="password" type="password" id="password" required />
        </Form.Item>
        <Form.Item>
            <Button type="primary" nativeType="submit">
                Войти
            </Button>
        </Form.Item>
    </Form>
)