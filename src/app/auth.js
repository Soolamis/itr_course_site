import { Auth0Client } from '@auth0/auth0-spa-js';

const auth0 = new Auth0Client({
    domain: 'dev-mzlq67dx.eu.auth0.com',
    client_id: 'fktoNOjdSNjZOBuKCQh1AaQ4JHhxmu03',
    redirect_uri: `http://${window.location.host}/auth`,
});

export default auth0;