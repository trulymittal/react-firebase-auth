import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import Homepage from '../pages/Homepage'
import Loginpage from '../pages/Loginpage'
import NotfoundPage from '../pages/NotfoundPage'
import Profilepage from '../pages/Profilepage'
import ProtectedPage from '../pages/ProtectedPage'
import Registerpage from '../pages/Registerpage'
import ResetPasswordPage from '../pages/ResetPasswordPage'

export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/login' component={Loginpage} />
          <Route exact path='/register' component={Registerpage} />
          <Route exact path='/profile' component={Profilepage} />
          <Route exact path='/protected-page' component={ProtectedPage} />
          <Route exact path='/forgot-password' component={ForgotPasswordPage} />
          <Route exact path='/reset-password' component={ResetPasswordPage} />
          <Route exact path='*' component={NotfoundPage} />
        </Switch>
      </Router>
    </>
  )
}
