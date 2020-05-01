import React from 'react';
import MainMenuUserWidgetComponent from '../../components/mainMenuUserWidget/mainMenuUserWidget';
import withLoginControl from '../withLoginControl/withLoginControl';
import LoginButton from '../../components/loginButton/loginButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        width: '100%',
    }
});

const Button = (props) => {
    const classes = useStyles();

    return <LoginButton className={classes.button} {...props} />
}

const MainMenuUserWidget = ({
    name,
    isAuthenticated,
    onLogout,
}) => {
    const Component = isAuthenticated ? MainMenuUserWidgetComponent : Button;

    return (
        <Component
            name={name}
            onLogout={onLogout}
        />
    );
}

export default withLoginControl(MainMenuUserWidget);