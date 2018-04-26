import React from 'react'
import { Route } from 'react-router-dom'
import { Home, Login, Register } from "./screens";
import { NavBar } from "./components/NavBar";

const App = () => (
    <div>
        <NavBar/>
        <main className="wrapper">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </main>
    </div>
)
export default App