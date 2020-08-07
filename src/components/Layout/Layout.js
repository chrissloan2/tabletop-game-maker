/* eslint-disable object-curly-spacing */
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import GameCreator from '../../pages/GameCreator/GameCreator';
import Lobby from '../../pages/Lobby/Lobby';

const Layout = () => {
    return (
        <Switch>
            <Route
                path="/"
                exact
                render={() => <Redirect to="/lobby" />}
            />
            <Route path="/lobby" exact component={Lobby} />
            <Route path="/game-creator" component={GameCreator} />
        </Switch>
    );
};

export default Layout;
