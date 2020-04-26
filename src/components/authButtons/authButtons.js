import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import auth0 from '../../app/auth';

const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.primary.contrastText,
    },
}));

const buttonsText = {
    ruRU: {
        signIn: 'Войти',
        signUp: 'Регистрация',
    },
    enUS: {
        signIn: 'Sign In',
        signUp: 'Sign Up',
    },
}

export default function LoginButton({
    locale = 'enUS',
}) {
    const localeSet = buttonsText[locale];
    const styles = useStyles();

    return (
        <Box>
            <Button 
                className={styles.button}
                onClick={async () => {
                    await auth0.loginWithRedirect();
                }}
                aria-label='sign in'
            >
                {localeSet.signIn}
            </Button>
        </Box>
    )
}