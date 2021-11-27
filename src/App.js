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
import AppLogo from './logo.svg';
import Guide from './pages/Guide';

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
	"/guides": () => <Guide />
};

function App() {
	const routeResult = useRoutes(routes);
	document.body.style.backgroundColor = config.DARK_COLOR_BACKGROUND;
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
					display: "flex",
					height: "15%"
				}}>
					<div className="logo">
						<a href="/">
							<img src={AppLogo} style={{
								width: "40px",
								height: "40px",
								marginLeft: "3vh",
								marginTop: "1vh",
								marginRight: "3vh"
							}}></img>
						</a>
					</div>
					<div className="nav-content" style={{
						display: "flex",
						marginTop: "2vh",
						width: "88%",
						justifyContent: "space-between"
					}}>
						<div className="nav-content-left" style={{
							display: "flex"
						}}>
							<UILink color={config.DARK_LINK_COLOR} id="nav.guides" href="/guides" style={{
								marginRight: "3vw"
							}}>
								<h4>Guides</h4>
							</UILink>
							<UILink color={config.DARK_LINK_COLOR} id="nav.keyboard" href="/kits" style={{
								marginRight: "3vw"
							}}>
								<h4>Keyboard Kits</h4>
							</UILink>
							<UILink color={config.DARK_LINK_COLOR} id="nav.keycaps" href="/keycaps" style={{
								marginRight: "3vw"
							}}>
								<h4>Keycaps</h4>
							</UILink>
							<UILink color={config.DARK_LINK_COLOR} id="nav.switches" href="/switches" style={{
								marginRight: "3vw"
							}}>
								<h4>Switches</h4>
							</UILink>
							<UILink color={config.DARK_LINK_COLOR} id="nav.vendors" href="/vendors" style={{
								marginRight: "3vw"
							}}>
								<h4>Vendors</h4>
							</UILink>
						</div>
						<div className="nav-content-right" style={{
							display: "flex",
						}}>
							<Tooltip content={'Created with ❤️ by Paul Fischerländer'} placement="bottom" color="primary" style={{
								marginRight: "3vh"
							}}>
								<Button auto rounded={false} flat color="primary">{config.VERSION}</Button>
							</Tooltip>
							<UILink color={config.DARK_LINK_COLOR} href="#" className="nav-imprint" style={{
								marginRight: "1vw"
							}}><h4>Imprint</h4></UILink>
						</div>
					</div>
				</div>
				<div className="content" style={{
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