import React from 'react'
import ReactDOM from 'react-dom'

class LoginForm extends React.Component {
    render () {
        return (
             <div>
                <h1 style ={{color: this.props.color}}>
                    {this.props.msg}
                </h1>
                <form>
                    <div>
                        <label id="name"></label>
                        <input type="text" id="username" placeholder="Enter your username"></input>
                    </div>
                            
                    <div>
                        <label id="user-password"></label>
                        <input type="password" id="password" placeholer="Enter your password"></input>
                    </div>       
                                                
                </form>
            </div>
        )
    }
}

class Login extends React.Component {
    state = {
        loggedIn: false
    }
  
    logIn = () =>  this.setState({loggedIn: true})
    logOut = () =>  this.setState({loggedIn: false})

    render () {
      return (
          <div>
            <button onClick =  {this.logIn} > Log In </button>
            <button onClick =  {this.logOut} >Log Out </button>
             <div>{ this.state.loggedIn 
             ? 'Welcome you are logged in!'
             : 'Bye! You are logged out.'}
             </div>
          </div>
        )
    }
} 



ReactDOM.render (
    <div>
    <LoginForm  color='pink' msg= 'Please Login!'/>
    <Login/>
    
    </div>,
    document.getElementById('root')
    
   
) 
