import React from 'react';
import withLoginControl from '../withLoginControl/withLoginControl'
import LoginButton from '../../components/loginButton/loginButton';
import UserWidget from '../../components/headerUserWidget/headerUserWidget';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.primary.contrastText,
    }
}));

const Button = (props) => {
    const classes = useStyles();

    return <LoginButton className={classes.button} {...props} />
}

const HeaderUserWidget = ({
    isAuthenticated,
    name,
    onLogout,
}) => {
    const Component = isAuthenticated ? UserWidget : Button;

    return <Component name={name} onLogout={onLogout} />
}

export default withLoginControl(HeaderUserWidget);