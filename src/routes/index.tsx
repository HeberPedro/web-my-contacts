import { Switch, Route } from 'react-router-dom'

import Home from '@/pages/Home'
import NewContact from '@/pages/NewContact'

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/new" component={NewContact} />
  </Switch>
)

export default Routes
