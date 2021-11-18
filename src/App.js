import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import Product from './Pages/Poduct/Product/Product';
import Dashboard from './Pages/Dashbord/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Review from './Pages/Review/Review/Review';
import MyOrders from './Pages/MyOrders/MyOrders';
import AvailableProduct from './Pages/Poduct/AvailableProduct/AvailableProduct';
import Payment from './Pages/Payment/Payment';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/product">
              <Product />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/pyment">
              <Payment></Payment>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
