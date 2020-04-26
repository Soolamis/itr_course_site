import React from 'react';
import HeaderComponent from '../../components/header/header';
import { connect } from 'react-redux';
import { toggleMenu } from '../../store/mainMenu/actions';

function Header({
    pageName,
    dispatch,
}) {
    return (
        <HeaderComponent
            pageName={pageName}
            onMenuButtonClick={() => dispatch(toggleMenu())}
        />
    )
}

export default connect()(Header);