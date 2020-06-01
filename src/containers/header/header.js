import React from 'react';
import HeaderComponent from '../../components/header/header';
import { connect } from 'react-redux';
import { toggleMenu } from '../../store/mainMenu/actions';
import { actions } from '../../store/locale/reducer';
import { useLocale } from '../../app/locale';
import { LOCALE_EN, LOCALE_RU } from '../../constants';

function Header({
    pageName,
    dispatch,
}) {
    const locale = useLocale();

    return (
        <HeaderComponent
            pageName={pageName}
            onMenuButtonClick={() => dispatch(toggleMenu())}
            onToggleLanguage={() => dispatch(actions.setLocale(
                locale == LOCALE_RU ?
                LOCALE_EN : LOCALE_RU
            ))}
        />
    )
}

export default connect()(Header);