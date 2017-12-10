import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ThreadList from './components/ThreadList';
import CreateThread from './components/CreateThread';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 5 }}>
            <Scene hideNavBar>                
                <Scene key="Auth">
                    <Scene key="login" component={LoginForm} title="Please login" initial/>
                </Scene>
                <Scene key="main">
                    <Scene 
                        rightTitle="Add"
                        onRight = {() => Actions.createThread()}
                        key="allThreads" 
                        component={ThreadList} 
                        title="All threads"
                        initial/>
                    <Scene 
                        key="createThread"
                        title="New thread"
                        component={CreateThread}/>
                </Scene>
            </Scene>

        </Router>
    );
};

export default RouterComponent;
