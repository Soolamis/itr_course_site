import React, { useEffect } from 'react';
import Header from './containers/header/header';
import Auth from './containers/auth/auth';
import { connect } from 'react-redux';
import { mainMenuIsOpen } from './store/mainMenu/selectors';
import { toggleMenu } from './store/mainMenu/actions';
import MainMenu from './components/mainMenu/mainMenu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import auth0 from './app/auth';
import { login } from './store/user/actions';
import Campaign from './containers/campaign/campaign';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import EditCampaing from './containers/editCampaign/editCampaign';
import {
    EDIT_CAMPAING_CREATE,
    EDIT_CAMPAING_EDIT,
} from './constants';

const useStyles = makeStyles({
    mainContent: {
        marginTop: '3em',
    }
})

function App({
    menuIsOpen,
    dispatch,
}) {
    const classes = useStyles();

    useEffect(() => {
        auth0.getTokenSilently()
            .then(() => auth0.getUser().then(user => {
                if (user) {
                    dispatch(login(user.sub, user.name))
                }
            }))
            .catch(err => console.log(err));
    }, [dispatch]);

    return (
        <div>
            <Router>
                <Header pageName='main' />
                <MainMenu
                    isOpen={menuIsOpen}
                    onClose={() => dispatch(toggleMenu())}
                />
                <Container className={classes.mainContent}>
                    <Switch>
                        <Route exact path='/'>

                        </Route>
                        <Route exact path='/auth'>
                            <Auth />
                        </Route>
                        <Route exact path='/campaign/create'>
                            <EditCampaing type={EDIT_CAMPAING_CREATE} />
                        </Route>
                        <Route exact path='/campaign/:id'>
                            <Campaign />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        menuIsOpen: mainMenuIsOpen(state),
    }
}

export default connect(mapStateToProps)(App);
