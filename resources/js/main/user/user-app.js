import React from "react"
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import EmployeeLayout from "../../shared/components/layout/EmployeeLayout"

if (document.getElementById('user-app')) {
    ReactDOM.render(
      <HashRouter>
        <Switch>
          <Route path="/" name="MAIN" render={() => <EmployeeLayout />} />
        </Switch>
      </HashRouter>, 
      document.getElementById('user-app')
      )
}
