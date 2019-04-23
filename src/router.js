import React from 'react';
import {HashRouter ,Route, Switch} from 'react-router-dom';
import {demo1} from './pages/three/demo1'
import {demo2} from './pages/three/demo2'
import {vmodel} from './pages/react/v_model'



const BasicRoute = () => (
	<HashRouter>
        <Switch>
        	<Route exact path="/three_2" component={demo2} />
        	<Route exact path="/three_1" component={demo1} />
        	<Route exact path="/vmodel" component={vmodel} />
        </Switch>
    </HashRouter>


);


export default BasicRoute;