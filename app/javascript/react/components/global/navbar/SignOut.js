import React from 'react'

const SignOut = (props) => {
  async function signOut() {
    try {
      await props.client.signOut();
    } catch (e) {
      console.error(e);
    }
    props.setIsLoggedIn(false)
  } 
  return (
    <div onClick={signOut} className="navbar-item">
      sign out
    </div>
  )
}

export default SignOut
