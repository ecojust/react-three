import React from 'react';
import {HashRouter ,Route, Switch} from 'react-router-dom';
import {demo1} from './pages/three/demo1'




const BasicRoute = () => (
	<HashRouter>
        <Switch>
        	<Route exact path="/" component={demo1} />
        	<Route exact path="/three_1" component={demo1} />
        </Switch>
    </HashRouter>


);


export default BasicRoute;