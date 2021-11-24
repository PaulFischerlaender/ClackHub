import React from 'react'
import { Button, Tooltip } from '@nextui-org/react';
import { Link as UILink } from '@nextui-org/react'
import config from './components/config.json'
import Vendors from './pages/Vendors'
import Switches from './pages/Switches'
import Keycaps from './pages/Keycaps';
import Kits from './pages/Kits';
import Home from './pages/Home';
import { useRoutes } from 'hookrouter';

/**
 * 
 * 
 *  @author Paul Fischerländer
 *  Created in Late 2021
 * 
 * 
 */

const routes = {
	"/": () => <Home />,
	"/vendors": () => <Vendors />,
	"/switches": () => <Switches />,
	"/keycaps": () => <Keycaps />,
	"/kits": () => <Kits />
};

function App() {
	const routeResult = useRoutes(routes);
	document.body.style.backgroundColor = "#000";

	//Init HTML for side component.
	//Route to other pages via react router
	return (
		<div>
			<div className="hero">
				<div className="nav">
					<div className="logo"></div>
					<div className="nav-content">
						<UILink color="primary" id="nav.overview" className="nav-overview" href="/">
							<h4>Overview</h4>
						</UILink>
						<br/>
						<UILink color="primary" id="nav.keyboard" href="/kits">
							<h4>Keyboard Kits</h4>
						</UILink>
						<br/>
						<UILink color="primary" id="nav.keycaps" href="/keycaps">
							<h4>Keycaps</h4>
						</UILink>
						<br/>
						<UILink color="primary" id="nav.switches" href="/switches">
							<h4>Switches</h4>
						</UILink>
						<br/>
						<UILink color="primary" id="nav.vendors" href="/vendors">
							<h4>Vendors</h4>
						</UILink>
						<br/>
						<UILink href="#" className="nav-imprint"><h5>Imprint</h5></UILink>
						<Tooltip content={'Created with ❤️ by P4ul'} color="primary">
							<Button auto rounded={false} flat color="primary">{config.VERSION}</Button>
						</Tooltip>
					</div>
				</div>
				<div className="content">
					<div className="header">
						<div className="filter">
							<Button auto rounded={false} flat color="primary" className="button-contact">Contact</Button>
							<Button auto rounded={false} flat color="#6E7C90" className="button-submit">Submit</Button>
						</div>
					</div>
					<div id="modalOverlay">
						<div id="main">
							{routeResult}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App