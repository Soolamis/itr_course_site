import {
    MEDIA_CONTENT,
    USER_RATING,
    AVERAGE_RATING,
    CAMPAING_LABEL,
    GOAL_CURRENT,
    GOAL_END_TIME,
    GOAL_GOAL,
    DESCRIPTION,
    REWARDS,
} from '../constants';
import axios from 'axios';
import auth from '../app/auth';

export async function getCampaignData(id) {
    return {
        id: undefined,
        label: CAMPAING_LABEL,
        userRating: USER_RATING,
        averageRating: AVERAGE_RATING,
        media: MEDIA_CONTENT,
        goal: {
            goal: GOAL_GOAL,
            endDate: GOAL_END_TIME,
            current: GOAL_CURRENT,
        },
        description: DESCRIPTION,
        rewards: REWARDS,
    }
}

export async function syncLabel() {
    return 'ok';
}

export async function updateCampaign(
    id,
    type,
    avatar,
    locale,
    goal,
    mediaContent,
    rewards,
) {
    const token = await auth.getTokenSilently();

    axios('/api/campaign/update',
        {
            method: 'post',
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                id,
                type,
                avatar,
                locale,
                goal,
                mediaContent,
                rewards,
            },
        }
    ).then(() => console.log('Done')).catch(err => console.log(err));
}