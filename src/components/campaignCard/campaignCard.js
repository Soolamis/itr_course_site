import React, { useCallback } from 'react';
import Card from '@material-ui/core/Card';
import ActionArea from '@material-ui/core/CardActionArea';
import Media from '@material-ui/core/CardMedia';
import Content from '@material-ui/core/CardContent';
import { Image } from 'cloudinary-react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'

export default function (
    {
        img,
        id,
        name,
    }
) {
    const history = useHistory();
    const redirectToCampaign = useCallback(
        () => {
            history.push(`/campaign/${id}`);
        }, [history, id]
    );

    return (
        <Card>
            <ActionArea onClick={redirectToCampaign}>
                <Media>
                    <Image
                        publicId={img}
                        width='300'
                    />
                </Media>
                <Content>
                    <Typography variant='h6'>
                        {name}
                    </Typography>
                </Content>
            </ActionArea>
        </Card>
    );
}