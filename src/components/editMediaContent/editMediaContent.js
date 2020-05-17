import React from 'react';
import Grid from '@material-ui/core/Grid';
import MediaContentForm from '../mediaContentForm/mediaContentForm';
import MediaContentList from '../mediaContentList/mediaContentList';

export default function({
    newElemType,
    onChangeNewElemType,
    newElemUrl,
    onChangeNewElemUrl,
    newElemPosition,
    onChangeNewElemPosition,
    onChangePosition,
    onDelete,
    onAdd,
    elems,
    elemsOrder,
}) {
    return (
        <Grid 
            container
            spacing={1}
        >
            <Grid 
                item
                sm={4}
                xs={12}
            >
                <MediaContentForm 
                    type={newElemType}
                    onChangeType={onChangeNewElemType}
                    url={newElemUrl}
                    onChangeUrl={onChangeNewElemUrl}
                    position={newElemPosition}
                    onChangePosition={onChangeNewElemPosition}
                    onAdd={onAdd}
                />
            </Grid>
            <Grid 
                item
                sm={8}
                xs={12}
            >
                <MediaContentList 
                    onChangePosition={onChangePosition}
                    onDelete={onDelete}
                    value={elems}
                    valueOrder={elemsOrder}
                />
            </Grid>
        </Grid>
    );
}