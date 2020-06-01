import React, { useEffect } from 'react';
import MainPageComponent from '../../components/mainPage/mainPage';
import { connect } from 'react-redux';
import { actions, selectors } from '../../store/mainPage/reducer';
import { selectors as campaignTypes } from '../../store/campaignTypes/reducer';

function MainPage(props) {
    const {loadCampaigns, ...rest} = props;

    useEffect(() => {
        loadCampaigns();
    }, [loadCampaigns])

    return <MainPageComponent {...rest}/>
}

function mapStateToProps(state) {
    return {    
        pagination: selectors.pagination(state),
        campaigns: selectors.campaigns(state),
        types: selectors.campaignsByTypes(state),
        typeNames: campaignTypes.types(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadCampaigns: () => dispatch(actions.load()),
        onChangePage: (type, page) => dispatch(actions.setPage({
            type: type,
            page: page,
        })),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);