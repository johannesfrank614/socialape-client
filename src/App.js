//React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//MUI
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import jwtDecode from 'jwt-decode'


//Redux
import { Provider } from 'react-redux'
import store from './redux/store'

//Components
import Navbar from './components/Navbar';
import AuthRoute from './util/AuthRoute'
import Footer from './components/Footer';

// utils
import themeFile from './util/theme'
import './App.css';

//Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import testpage from './pages/testpage';




const theme = createMuiTheme(themeFile);

let authenticated

const token = localStorage.FBIdToken

if(token){
  const decodedToken = jwtDecode(token)
  if(decodedToken.exp * 1000 < Date.now()){
    window.location.href = '/login'
    authenticated = false
  } else {
    authenticated = true
  }
} else {
  window.location.href = '/login'
}

class App extends Component{
  render(){
    return(
      <MuiThemeProvider theme={theme}>
         <Provider store={store}>
          <Router>
            <Navbar />
            <div className="container">            
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/testpage" component={testpage} />
                <AuthRoute 
                  exact path="/login" 
                  component={login} 
                  authenticated={authenticated}/>
                <AuthRoute 
                  exact path="/signup" 
                  component={signup} 
                  authenticated={authenticated}/>
              </Switch>
            </div>
            <Footer />
          </Router>        
        </Provider>   
      </MuiThemeProvider>
    );
  }
}

export default App;
