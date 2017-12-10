import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ThreadList from './components/ThreadList';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 5 }}>
            <Scene hideNavBar>                
                <Scene key="Auth">
                    <Scene key="login" component={LoginForm} title="Please login" initial/>
                </Scene>
                <Scene key="main">
                    <Scene key="allThreads" component={ThreadList} title="All threads"/>
                </Scene>
            </Scene>

        </Router>
    );
};

export default RouterComponent;
