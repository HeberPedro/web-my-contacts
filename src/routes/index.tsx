import { Switch, Route } from 'react-router-dom'

import EditContact from '@/pages/EditContact'
import Home from '@/pages/Home'
import NewContact from '@/pages/NewContact'

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/new" component={NewContact} />
    <Route path="/edit/:id" component={EditContact} />
  </Switch>
)

export default Routes
