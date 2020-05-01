import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import * as userSelectors from '../../store/user/selectors'
import auth0 from '../../app/auth';

function mapStateToProps(state) {
    return {
        isAuthenticated: userSelectors.isAuthenticated(state),
        name: userSelectors.name(state),
    }
}

const withLoginControl = (Component) => {
    return connect(mapStateToProps)(({
        isAuthenticated,
        name,
        dispatch,
        ...props
    }) => {
        const handleLogout = useCallback(async () => {
            await auth0.logout();
        }, []);

        return (
            <Component
                onLogout={handleLogout}
                isAuthenticated={isAuthenticated}
                name={name}
                dispatch={dispatch}
                {...props}
            />
        )
    })
}

export default withLoginControl;