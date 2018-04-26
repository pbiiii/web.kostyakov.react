import React from 'react'
import { Route } from 'react-router-dom'
import { Home, Login } from "./screens";
import Register from './screens/Register/Register'
import { NavBar } from "./components/NavBar";

const App = () => (
    <div>
        <NavBar/>
        <main className="wrapper">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </main>
    </div>
)
export default App