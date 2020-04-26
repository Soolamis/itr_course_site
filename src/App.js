import React from 'react';
import Registration from './containers/registration/registration';
import Header from './containers/header/header';
import { connect } from 'react-redux';
import { mainMenuIsOpen } from './store/mainMenu/selectors';
import { toggleMenu } from './store/mainMenu/actions';
import MainMenu from './components/mainMenu/mainMenu';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

function App({
    menuIsOpen,
    dispatch,
}) {
    return (
        <div>
            <Router>
                <Header pageName='registration' />
                <Registration />
                <MainMenu
                    isOpen={menuIsOpen}
                    onClose={() => dispatch(toggleMenu())}
                />
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
