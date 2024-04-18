import React from 'react'

function login() {
  return (
    <div>
    <h2>Login</h2>
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
        
          // onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
        
          // onChange={handlePasswordChange}
        />
      </div>
      <button type="button" >
        Login
      </button>
    </form>
  </div>
  )
}

export default login
