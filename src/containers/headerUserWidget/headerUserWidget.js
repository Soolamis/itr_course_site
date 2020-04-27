import React from 'react';
import withLoginControl from '../withLoginControl/withLoginControl'
import LoginButton from '../../components/loginButton/loginButton';
import UserWidget from '../../components/headerUserWidget/headerUserWidget';

const HeaderUserWidget = ({
    isAuthenticated,
    name,
    onLogout,
    dispatch,
}) => {
    const Component = isAuthenticated ? UserWidget : LoginButton;

    return <Component name={name} onLogout={onLogout} />
}

export default withLoginControl(HeaderUserWidget);