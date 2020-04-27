import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import auth0 from '../../app/auth';
import * as actions from '../../store/user/actions';
import { useHistory } from 'react-router-dom';

const Auth = ({
    dispatch,
}) => {
    const history = useHistory();

    useEffect(() => {
        auth0.handleRedirectCallback().then(() => {
            auth0.getUser().then(user => {
                dispatch(actions.login(user.sub, user.name));
                history.push('/');
            });
        });
    });

    return <div></div>
}

export default connect()(Auth);