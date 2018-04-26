import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout } from 'element-react'
import './NavBar.scss'

export const NavBar = () => (
    <Layout.Row>
        <nav>
            <NavLink to="/">
                    Главная
            </NavLink>
            <NavLink to="/login">
                    Вход
            </NavLink>
            <NavLink to="/register">
                    Регистрация
            </NavLink>
        </nav>
    </Layout.Row>
)
