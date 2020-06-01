import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import auth0 from '../../app/auth';
import classnames from 'classnames';
import { useLocale } from '../../app/locale';

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
    className,
}) {
    const locale = useLocale();
    const localeSet = buttonsText[locale];

    return (
        <Box>
            <Button 
                className={classnames(className)}
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