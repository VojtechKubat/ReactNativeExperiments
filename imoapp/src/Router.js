import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ThreadList from './components/ThreadList';
import CreateThread from './components/CreateThread';
import ScreenTrending from './components/ScreenTrending';
import ScreenThread from './components/ScreenThread';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 5 }}>
            <Scene hideNavBar>                
                <Scene key="Auth">
                    <Scene key="login" component={LoginForm} title="Please login" initial/>
                </Scene>
                <Scene key="main">
                    <Scene 
                        leftTitle = "Test"
                        onLeft = { () => Actions.screenTrending() }
                        rightTitle="Add"
                        onRight = { () => Actions.createThread() }
                        key="allThreads" 
                        component={ThreadList} 
                        title="All threads"
                        initial
                        />
                    <Scene 
                        key="createThread"
                        title="New thread"
                        component={CreateThread}
                        />
                    <Scene 
                        key="screenTrending"      // this will be called as Actions.screenTrenidng() to navigate on the screen
                        title="Trending"
                        component={ScreenTrending}
                        />
                    <Scene 
                        key="screenThread"
                        title="Thread"
                        component={ScreenThread}
                        />
                </Scene>
            </Scene>

        </Router>
    );
};

export default RouterComponent;
