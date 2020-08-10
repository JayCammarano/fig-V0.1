
import React from 'react'
import { render } from 'react-dom'
import App from '../react/components/App'
import RedBox from 'redbox-react'
import ApiClient from 'devise-token-auth-client';

document.addEventListener('DOMContentLoaded', () => {  
  const client = new ApiClient({
    baseUrl: 'https://localhost:3000'
  });
  const reactElement = document.getElementById('app')

  if (reactElement) {
    if(window.railsEnv && window.railsEnv === 'development'){
      try {
        render(<App client={client}/>, reactElement)
      } catch (e) {
        render(<RedBox error={e} />, reactElement)
      }
    }
    else {
      render(<App client={client} />, reactElement)
    }
  }

  ;})