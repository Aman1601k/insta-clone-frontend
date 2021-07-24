import Navbar from "./components/navbar/Navbar";
import Home from "./containers/home/Home";
import Message from "./containers/message/Message";
import Explore from "./containers/explore/Explore";
import Favourite from "./containers/favourite/Favourite";
import Profile from './containers/profile/Profile';
import {  BrowserRouter as Router , Switch, Route, useHistory } from "react-router-dom";
import AuthComponents from "./components/AuthComponents/AuthComponents";
import SignUpPage from "./containers/Signup/SignUpPage";
import LoginPage from "./containers/Login/LoginPage";
import Layout from "./components/layout/Layout";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import {useLocation} from 'react-router-dom'
import { useEffect } from "react";
import { isUserLoggedIn } from "./actions";
import UserProfile from "./containers/profile/UserProfile";
import Reset from "./containers/ResetPassword/Reset";
import NewPassPage from "./containers/ResetPassword/NewPassPage";

function App() {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }
    if(auth.authenticate){
      if(location.pathname.startsWith('/reset')){
        history.push('/');
        window.location.reload();
      }
    }
    
  }, [auth.authenticate])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" component={SignUpPage}/>
          <Route path="/signin" component={LoginPage}/>
          <Route exact path="/reset" component={Reset}/>
          <Route path="/reset/:token" component={NewPassPage}/>
          <Layout>
            
            <PrivateRoute exact path="/" component={Home}/>
            <PrivateRoute path="/message" component={Message}/>
            <PrivateRoute path="/explore" component={Explore }/>
            <PrivateRoute path="/favourite" component={Favourite}/>
            <PrivateRoute exact path="/profile" component={Profile}/>
            <PrivateRoute path="/profile/:userid" component={UserProfile}/>
          </Layout>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
