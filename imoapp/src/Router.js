import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 5 }}>
            <Stack key="root">
                <Scene key="login" component={LoginForm} title="Please login"/>
            </Stack>
        </Router>
    );
};

export default RouterComponent;