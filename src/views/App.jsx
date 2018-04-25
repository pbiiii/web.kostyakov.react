import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home, Login, Register } from "./screens";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Redirect to="/" />
                </Switch>
            </React.Fragment>
        )
    }
}
export default App