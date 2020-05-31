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
        mediaContent: selectors.mediaContent(state),
        rewardsNewElem: selectors.rewardsNewElem(state),
        rewardsLocale: selectors.rewardsLocale(state),
        rewards: selectors.rewards(state),
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
        setMediaContentNewElemType: (type) => {
            dispatch(actions.setMediaContentNewElemType(type));
        },
        setMediaContentNewElemUrl: (url) => {
            dispatch(actions.setMediaContentNewElemUrl(url));
        },
        setMediaContentNewElemPosition: (position) => {
            dispatch(actions.setMediaContentNewElemPosition(position));
        },
        addMediaContent: () => {
            dispatch(actions.addMediaContent());
            dispatch(actions.clearMediaContentNewElem());
        },
        removeMediaContent: (url) => {
            dispatch(actions.removeMediaContent(url));
        },
        changeMediaContentPosition: (url, position) => {
            dispatch(actions.changeMediaContentPosition({ url: url, position: position }));
        },
        onChangeRewardsNewElem: (type, value) => {
            let act;

            switch(type) {
                case 'name':
                    act = actions.setRewardsNewElemName(value);
                    break;
                case 'description':
                    act = actions.setRewardsNewElemDescription(value);
                    break;
                case 'cost':
                    act = actions.setRewardsNewElemCost(value);
                    break;
                default: return;
            }
            dispatch(act);
        },
        onChangeRewardsLocale: (locale) => {
            dispatch(actions.setRewardsLocale(locale));
        },
        addReward: () => {
            dispatch(actions.addReward());
        },
        onChangeRewardPosition: (id, position) => {
            dispatch(
                actions.changeRewardPosition({ 
                    id: id, 
                    position: position
                })
            );
        },
        onDeleteReward: (id) => {
            dispatch(actions.removeReward(id));
        },
        onEditReward: (id) => {
            dispatch(actions.editReward(id));
            dispatch(actions.removeReward(id));
        },
        onApply: () => {
            dispatch(actions.onSend());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(EditCampaign)