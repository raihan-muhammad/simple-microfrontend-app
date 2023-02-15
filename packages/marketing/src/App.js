import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const App = () => {
	return (
		<>
			<StylesProvider>
				<BrowserRouter>
					<Switch>
						<Route exact path="/pricing" component={Pricing}/>
						<Route path="/" component={Landing} />
					</Switch>
				</BrowserRouter>
			</StylesProvider>
		</>
	)
}

export default App;