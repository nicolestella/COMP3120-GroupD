import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import AuthConfig from './auth_config.json'

import App from './App'

ReactDOM.render(
	<Auth0Provider
		domain={AuthConfig.domain}
		clientId={AuthConfig.clientId}
		redirectUri={window.location.origin}
		audience={AuthConfig.audience}
		scope={AuthConfig.scope}
	>
		<App />
	</Auth0Provider>,
	document.getElementById('root'),
)
