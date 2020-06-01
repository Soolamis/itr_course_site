import axios from 'axios';
import auth from '../app/auth';

export async function getCampaignTypes() {
    return (await axios('/api/campaignTypes')).data;
}

export async function getCampaignData(id) {
    return (await axios(`/api/campaign/${id}`)).data;
}

export async function getCampaigns() {
    return (await axios('/api/campaigns')).data
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
    );
}