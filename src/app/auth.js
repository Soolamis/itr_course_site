import { Auth0Client } from '@auth0/auth0-spa-js';

const auth0 = new Auth0Client({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirect_uri: `https://${window.location.host}/auth`,
    cacheLocation: 'localstorage',
    useRefreshTokens: true,
    audience: 'https://winter-waterfall-5281.auth0.com/api/v2/',
});

export default auth0;