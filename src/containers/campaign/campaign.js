import React, { useCallback, useEffect } from 'react';
import CampaignComponent from '../../components/campaign/campaign';
import { connect } from 'react-redux';
import { selectors, actions } from '../../store/campaign/reducer';
import { MODE_EDIT } from '../../constants';

const Campaign = ({
    label,
    labelMode,
    canEdit,
    userRating,
    averageRating,
    media,
    dispatch,
    goalSum,
    goalCurrent,
    goalEndDate,
    description,
    rewards,
}) => {
    const handleToggleLabelMode = useCallback(() => {
        if (labelMode === MODE_EDIT) {
            dispatch(actions.syncLabel());
        }
        dispatch(actions.toggleLabelMode());
    }, [dispatch, labelMode]);

    const handleLabelChange = useCallback((value) => {
        dispatch(actions.setLabel(value));
    }, [dispatch]);

    const handleRatingChange = useCallback((value) => {
        dispatch(actions.setUserRating(value));
    }, [dispatch])

    useEffect(() => { dispatch(actions.initPage()) }, [dispatch]);

    return (
        <CampaignComponent
            label={label}
            labelMode={labelMode}
            onToggleLabelMode={handleToggleLabelMode}
            canEdit={canEdit}
            onLabelChange={handleLabelChange}
            rating={{ user: userRating, average: averageRating }}
            onRatingChange={handleRatingChange}
            media={media}
            goalSum={goalSum}
            goalCurrent={goalCurrent}
            goalEndDate={goalEndDate}
            description={description}
            rewards={rewards}
        />
    );
}

function mapStateToProps(state) {
    return {
        label: selectors.label(state),
        labelMode: selectors.labelMode(state),
        canEdit: selectors.canEdit(state),
        userRating: selectors.userRating(state),
        averageRating: selectors.averageRating(state),
        media: selectors.media(state),
        goalSum: selectors.goalSum(state),
        goalCurrent: selectors.goalCurrent(state),
        goalEndDate: selectors.goalEndDate(state),
        description: selectors.description(state),
        rewards: selectors.rewards(state),
    }
}

export default connect(mapStateToProps)(Campaign)