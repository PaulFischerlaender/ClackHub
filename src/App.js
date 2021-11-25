import React from 'react'
import { Button, Spacer, Tooltip } from '@nextui-org/react';
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
	"/kits": () => <Kits />,
};

function App() {
	const routeResult = useRoutes(routes);
	document.body.style.backgroundColor = config.DARK_COLOR_BACKGROUND;
	document.body.style.overflowY = "hidden";
	document.body.style.height = "100vh"

	//Init HTML for side component.
	//Route to other pages via router
	return (
		<div>
			<div className="hero" style={{
				display: "block",
				width: "100%",
				height: "auto"
			}}>
				<div className="nav" style={{ 
					backgroundColor: config.DARK_COLOR_MAIN,
					display: "flex",
					height: "15%"
				 }}>
					<div className="logo" style={{
						width: "12%"
					}}>
						<h2>logo</h2>
					</div>
					<div className="nav-content" style={{
						display: "flex",
						marginTop: "2vh"
					}}>
						<UILink color={config.DARK_LINK_COLOR} id="nav.overview" className="nav-overview" href="/" style={{
							marginRight: "1vw"
						}}>
							<h4>Overview</h4>
						</UILink>
						<br />
						<UILink color={config.DARK_LINK_COLOR} id="nav.keyboard" href="/kits" style={{
							marginRight: "1vw"
						}}>
							<h4>Keyboard Kits</h4>
						</UILink>
						<br />
						<UILink color={config.DARK_LINK_COLOR} id="nav.keycaps" href="/keycaps" style={{
							marginRight: "1vw"
						}}>
							<h4>Keycaps</h4>
						</UILink>
						<br />
						<UILink color={config.DARK_LINK_COLOR} id="nav.switches" href="/switches" style={{
							marginRight: "1vw"
						}}>
							<h4>Switches</h4>
						</UILink>
						<br />
						<UILink color={config.DARK_LINK_COLOR} id="nav.vendors" href="/vendors" style={{
							marginRight: "1vw"
						}}>
							<h4>Vendors</h4>
						</UILink>
						<br />
						<UILink color={config.DARK_LINK_COLOR} href="#" className="nav-imprint" style={{
							marginRight: "1vw"
						}}><h4>Imprint</h4></UILink>
						<Tooltip content={'Created with ❤️ by P4ul'} color="primary">
							<Button auto rounded={false} flat color="primary">{config.VERSION}</Button>
						</Tooltip>
					</div>
				</div>
				<div style={{
						width: "100%",
						height: "5px",
						backgroundColor: "#DBEAFF"
					}}>
					</div>
				<div className="content" style= {{
					width: "90%",
					margin: 0,
					margin: "auto"
				}}>
					<div id="main" class="main" style={{
						width: "100%"
					}}>
						{routeResult}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App