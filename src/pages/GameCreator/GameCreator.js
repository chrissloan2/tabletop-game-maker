import './GameCreator.less';
import React from 'react';
import Button from '@material-ui/core/Button';

const GameCreator = () => {
    return <div>
            <h1>{'Welcome to the Game Creator Page'}</h1>
            <Button variant="contained" color="primary">
                {'Create a new game'}
            </Button>
    </div>;
};

export default GameCreator;