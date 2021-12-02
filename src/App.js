import React from 'react'
import { Button, Tooltip, Collapse, Text, Col } from '@nextui-org/react';
import { Link as UILink } from '@nextui-org/react'
import config from './components/config.json'
import Vendors from './pages/Vendors'
import Switches from './pages/Switches'
import Keycaps from './pages/Keycaps';
import Kits from './pages/Kits';
import Home from './pages/Home';
import { useRoutes } from 'hookrouter';
import AppLogo from './components/icons/logo.svg';
import AppLogoMobile from './components/icons/logomobile.svg';
import Guide from './pages/Guide';
import { useMediaPredicate } from "react-media-hook";
import DiscordLogo from './Discord-Logo-White.svg'

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

const openInNewTab = (url) => {
	const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
	if (newWindow) newWindow.opener = null
}

const onClickUrl = (url) => {
	return () => openInNewTab(url)
}

function App() {
	const biggerThan1070 = useMediaPredicate("(min-width: 1140px)");
	const biggerThan570 = useMediaPredicate("(min-width: 740px)");
	const routeResult = useRoutes(routes);
	document.body.style.backgroundColor = config.DARK_COLOR_BACKGROUND;
	document.body.style.minHeight = "100vh";

	//Init HTML for side component.
	//Route to other pages via router
	return (
		<div>
			<div className="hero" style={{
				display: "block",
				width: "100%",
				height: "auto"
			}}>
				<div id="nav" className="nav" style={{
					display: "flex",
					height: "15%"
				}}>
					{biggerThan1070 && <div className="logo" style={{
						marginTop: "30px",
						display: "flex",
						marginRight: "3vh"
					}}>
						<a href="/">
							<img src={AppLogo} alt="" style={{
								width: "175px",
								marginLeft: "3vh",
								marginRight: "3vh"
							}}></img>
						</a>
					</div>}
					<div className="nav-content" style={{
						display: "flex",
						marginTop: "2vh",
						width: "88%",
						justifyContent: "space-between",
						margin: "auto"
					}}>
						{/**
                         * Renders collpase for devices under 900px width
                         */}
						{!biggerThan1070 && <Collapse
							shadow
							contentLeft={<div className="logo">
								<img src={AppLogoMobile} alt="" style={{
									width: "40px",
									marginRight: "3vh"
								}}></img>
							</div>}
							title={<Text h3 color="#fff">Navigation</Text>}
							justify="center"
							style={{
								width: "100%",
								backgroundColor: config.DARK_COLOR_SIDE,
								marginTop: "30px"
							}}>
							<Col>
								<UILink color={config.DARK_LINK_COLOR} id="nav.home" href="/" style={{
									marginRight: "3vw"
								}}>
									<h4>Home</h4>
								</UILink>
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
								{!biggerThan570 && <div style={{
									display: "flex",
									marginTop: "30px",
									marginBottom: "20px"
								}}>
									<Tooltip content={'Join our discord!'} placement="bottom" color="primary" style={{
										marginRight: "3vh"
									}}>
										<Button auto color="primary" icon={<Discord fill="white" filled />} onClick={onClickUrl("https://discord.gg/x9kGNGRsYM")} />
									</Tooltip>
									<Tooltip content={'Created with ❤️ by Paul Fischerländer'} placement="bottom" color="primary" style={{
										marginRight: "3vh"
									}}>
										<Button auto rounded={false} flat color="primary">{config.VERSION}</Button>
									</Tooltip>
									<UILink color={config.DARK_LINK_COLOR} href="#" className="nav-imprint" style={{
										marginRight: "1vw"
									}}><h5>Imprint</h5></UILink></div>}
							</Col>
						</Collapse>}
						{/**
                         * Renders Links for devices over 900px width
                         */}
						{biggerThan1070 && <div className="nav-content-left" style={{
							display: "flex",
							marginTop: "30px"
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
						</div>}
						{biggerThan570 && <div className="nav-content-right" style={{
							display: "flex",
							marginTop: "30px",
							marginLeft: "3vh"
						}}>
							<Tooltip content={'Join our discord!'} placement="bottom" color="primary" style={{
								marginRight: "3vh"
							}}>
								<Button auto color="primary" icon={<Discord fill="white" filled />} onClick={onClickUrl("https://discord.gg/x9kGNGRsYM")} />
							</Tooltip>
							<Tooltip content={'Created with ❤️ by Paul Fischerländer'} placement="bottom" color="primary" style={{
								marginRight: "3vh"
							}}>
								<Button auto rounded={false} flat color="primary">{config.VERSION}</Button>
							</Tooltip>
							<UILink color={config.DARK_LINK_COLOR} href="#" className="nav-imprint" style={{
								marginRight: "1vw"
							}}><h4>Imprint</h4></UILink>
						</div>}
					</div>
				</div>
				<div className="content" style={{
					width: "90%",
					margin: 0,
					margin: "auto"
				}}>
					<div id="main" className="main" style={{
						width: "100%"
					}}>
						{routeResult}
					</div>
				</div>
			</div>
		</div>
	)
}

function Discord() {
	return (
		<img style={{
			width: "auto",
			height: "25px"
		}}src={DiscordLogo} />
	)
}

export default App