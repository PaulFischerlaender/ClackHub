import React from 'react'
import { Button, Tooltip } from '@nextui-org/react';
import { Route, Routes, Link } from 'react-router-dom';
import { Link as UILink } from '@nextui-org/react'
import config from './components/config.json'
import Vendors from './pages/Vendors'
import Switches from './pages/Switches'
import Keycaps from './pages/Keycaps';
import Kits from './pages/Kits';
import Home from './pages/Home';

/**
 * 
 * 
 *  @author Paul Fischerländer
 *  Created in Late 2021
 * 
 * 
 */

class App extends React.Component {

	//Init HTML for side component.
	//Route to other pages via react router
	render() {
		document.body.style.backgroundColor = "#000"
		return (
			<div>
				<div class="hero">
					<div class="nav">
						<div class="logo"></div>
						<div class="nav-content">
							<UILink id="nav.overview" class="nav-overview">
								<Link to={config.HOME_SITE_LINK}>Overview</Link>
							</UILink>
							<UILink id="nav.keyboard">
								<Link to={config.KIT_SITE_LINK}>Keyboard Kits</Link>
							</UILink>
							<UILink>
								<Link to={config.SWITCH_SITE_LINK}>Switches</Link>
							</UILink>
							<UILink>
								<Link to={config.KEYCAP_SITE_LINK}>Keycaps</Link>
							</UILink>
							<UILink id="nav.vendors">
								<Link to={config.VENDOR_SITE_LINK}>Vendors</Link>
							</UILink>
							<UILink id="nav.typingtest" href="#"><h4>Typing Test</h4></UILink>
							<UILink id="nav.reddit" href="#"><h4>r/MechanicalKeyboards</h4></UILink>
							<Tooltip content={'Created with ❤️ by P4ul'} color="primary">
								<Button auto rounded={false} flat color="primary" class="button-version">{config.VERSION}</Button>
							</Tooltip>
							<UILink href="#" class="nav-imprint"><h5>Imprint</h5></UILink>
						</div>
					</div>
					<div class="content">
						<div class="header">
							<div class="filter">
								<Button auto rounded={false} flat color="primary" class="button-contact">Contact</Button>
								<Button auto rounded={false} flat color="#6E7C90" class="button-submit">Submit</Button>
							</div>
						</div>
						<div id="modalOverlay">
							<div id="main">
								<Routes>
									<Route exact path={config.HOME_SITE_LINK} element={Home} />
									<Route path={config.VENDOR_SITE_LINK} element={Vendors} />
									<Route path={config.SWITCH_SITE_LINK} element={Switches} />
									<Route path={config.KEYCAP_SITE_LINK} element={Keycaps} />
									<Route path={config.KIT_SITE_LINK} element={Kits} />
								</Routes>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default App