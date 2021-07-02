import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ListEmployeesComponet from './components/ListEmployeesComponet';
import HeaderComponet from './components/HeaderComponet';
import Footer from './components/Footer';
import CreateEmployeeComponet from './components/CreateEmployeeComponet';
import UpdateEmployeeComponet from './components/UpdateEmployeeComponet';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import welcome from './components/WelcomeComponent';

function App() {
  return (
    <div>
      <Router>
        
            <HeaderComponet/>
                <div className="container">
                  <Switch>
                      <Route path="/" exact component={welcome}></Route>
                      <Route path="/employees" component={ListEmployeesComponet}></Route>
                      <Route path="/add-employee" component={CreateEmployeeComponet}></Route>
                      <Route path="/update-employee/:empId" component={UpdateEmployeeComponet}></Route>
                      <Route path="/view-employee/:empId" component={ViewEmployeeComponent}></Route>
                      
                     </Switch>
               </div>
           <Footer/>
          
      </Router>
    </div>
  );
}

export default App;
