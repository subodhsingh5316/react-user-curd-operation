import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/pages/Home';
import About from './Component/pages/About';
import Contact from './Component/pages/Contact';
import Header from './Component/Layout/Header';
import NotFound from './Component/pages/NotFound';
import AddUser from './Component/user/AddUser';
import EditUser from './Component/user/EditUser';
import ViewUser from './Component/user/ViewUser'

function App() {
  return (
    <>
     
      <Router>
      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/user/adduser' component={AddUser} />
          <Route exact path='/user/edituser/:id' component={EditUser} />
          <Route excet path='/user/viewuser/:id'  component={ViewUser} />
          <Route component = {NotFound}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
