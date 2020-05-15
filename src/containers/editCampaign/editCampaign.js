import React from 'react';
import { connect } from 'react-redux'
import EditCampaignComponent from '../../components/editCampaign/editCampaign';
import { actions, selectors } from '../../store/editCampaign/reducer';

const EditCampaign = (props) => {
    return <EditCampaignComponent {...props} />
}

const mapStateToProps = (state) => {
    return {
        name: selectors.name(state),
        campaignType: selectors.campaignType(state),
        nameLocale: selectors.nameLocale(state),
        description: selectors.description(state),
        descriptionLocale: selectors.descriptionLocale(state),
        avatar: selectors.avatar(state),
        goalFinishDate: selectors.goalFinishDate(state),
        goalSum: selectors.goalSum(state),
    }
}

const mapDispatchToPros = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(actions.setName(name));
        },
        setCampaignType: (cType) => {
            dispatch(actions.setCampaignType(cType));
        },
        setNameLocale: (locale) => {
            dispatch(actions.setNameLocale(locale));
        },
        setDescriptionLocale: (locale) => {
            dispatch(actions.setDescriptionLocale(locale));
        },
        setDescription: (text) => {
            dispatch(actions.setDescription(text));
        },
        setAvatar: (file) => {
            dispatch(actions.setAvatar(file));
        },
        setGoalFinishDate: (date) => {
            dispatch(actions.setGoalFinishDate(date));
        },
        setGoalSum: (cost) => {
            dispatch(actions.setGoalSum(cost));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(EditCampaign)