import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Layout } from 'element-react'
import './NavBar.scss'

export const NavBar = () => (
    <Layout.Row>
        <nav>
            <NavLink to="/">
                <Button type="text">
                    Главная
                </Button>
            </NavLink>
            <NavLink to="/login">
                <Button type="text">
                    Вход
                </Button>
            </NavLink>
            <NavLink to="/register">
                <Button type="text">
                    Регистрация
                </Button>
            </NavLink>
        </nav>
    </Layout.Row>
)
