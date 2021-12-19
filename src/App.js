import React from 'react'
import { Button, Tooltip, Collapse, Text, Col, Card, Link } from '@nextui-org/react';
import { Link as UILink } from '@nextui-org/react'
import config from './components/config.json'
import Vendors from './pages/Vendors'
import Switches from './pages/Switches'
import Keycaps from './pages/Keycaps';
import Kits from './pages/Kits';
import Home from './pages/Home';
import Imprint from './pages/Imprint';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { useRoutes } from 'hookrouter';
import AppLogoMobile from './components/icons/logomobile.svg';
import Guide from './pages/Guide';
import { useMediaPredicate } from "react-media-hook";
import DiscordLogo from './Discord-Logo-White.svg'
import Configurator from './pages/Configurator';

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
	"/configurator": () => <Configurator />,
	"/vendors": () => <Vendors />,
	"/switches": () => <Switches />,
	"/keycaps": () => <Keycaps />,
	"/keyboard-kits": () => <Kits />,
	"/guides": () => <Guide />,
	"/imprint": () => <Imprint />,
	"/privacy": () => <PrivacyPolicy />
};

const openInNewTab = (url) => {
	const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
	if (newWindow) newWindow.opener = null
}

const onClickUrl = (url) => {
	return () => openInNewTab(url)
}

const colorBlack = "#222531";
const colorGray = "#6B7280";
const colorBlueTag = "#2563EB";
const colorBlue = "#3B82F6";

const headerSize = "90px";
const tagSize = "20px";
const textSize = "20px";

const navColor = config.DARK_COLOR_BACKGROUND;

function App() {
	const biggerThan1540 = useMediaPredicate("(min-width: 1540px)");
	const biggerThan1160 = useMediaPredicate("(min-width: 1350px)");
	const biggerThan740 = useMediaPredicate("(min-width: 740px)");
	const routeResult = useRoutes(routes);
	document.body.style.minHeight = "100vh";

	//Init HTML for side component.
	//Route to other pages via router
	return (
		<div>
			{!biggerThan1160 && <div className="hero">
				<Navbar />
				{routeResult}
				<Footer />
			</div>}
			{biggerThan1160 && !biggerThan1540 && <div className="hero">
				<Navbar />
				{routeResult}
				<Footer />
			</div>}
			{biggerThan1540 && <div className="hero">
				<Navbar />
				{routeResult}
				<Footer />
			</div>}
		</div>
	)
}


function Discord() {
	return (
		<img style={{
			width: "auto",
			height: "25px"
		}} src={DiscordLogo} />
	)
}

function Footer() {
	return (
		<div style={{
			backgroundColor: "#F4F6FB",
			paddingBottom: "5vh",
			paddingTop: "5vh"
		}}>
			<div className="footer" style={{
				width: "80vw",
				margin: 0,
				margin: "auto",
				display: "flex",
				justifyContent: "space-between",
				backgroundColor: "#F4F6FB"
			}}>
				<div className="logo" style={{
					display: "block"
				}}>
					<Text color={colorBlueTag} style={{
						fontSize: textSize,
						fontWeight: "bold",
					}}>keeblink</Text>
					<Text color={colorGray} style={{
						fontSize: textSize,
						fontWeight: "normal",
					}}>Created by <br />Paul Fischerländer in 2021.</Text>
				</div>
				<div className="important" style={{
					display: "block"
				}}>
					<Text color={colorBlue} style={{
						fontSize: textSize,
						fontWeight: "bold",
					}}>Important</Text>
					<a href="/imprint">
						<Text color={colorBlack} style={{
							fontSize: textSize,
							fontWeight: "normal"
						}}>Imprint</Text></a>
					<a href="privacy">
						<Text color={colorBlack} style={{
							fontSize: textSize,
							fontWeight: "normal"
						}}>Privacy Policy</Text></a>
				</div>
				<div className="socialmedia" style={{
					display: "block"
				}}>
					<Text color={colorBlue} style={{
						fontSize: textSize,
						fontWeight: "bold",
					}}>Social Media</Text>
					<Tooltip content={'Join our discord!'} placement="bottom" color="primary">
						<Button auto color="primary" icon={<Discord fill="white" filled />} onClick={onClickUrl("https://discord.gg/x9kGNGRsYM")} />
					</Tooltip>
				</div>
			</div>
		</div>
	)
}

function Navbar() {
	return (
		<div style={{
			padding: "2vh",
			display: "flex",
			justifyContent: "space-between",
			boxShadow: "0 10px 4px -2px #F4F6FB"
		}}>
			<div className="logo">
				<a href="/"><Text color={colorBlueTag} style={{
					fontSize: textSize,
					fontWeight: "bold",
				}}>keeblink</Text></a>
			</div>
			<div className="action" style={{
				display: "flex"
			}}>
				<Link href="/vendors" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text color={colorBlueTag} style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Vendors</Text>
				</Link>
				<Link href="/keyboard-kits" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text color={colorBlueTag} style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Keyboard Kits</Text>
				</Link>
				<Link color={colorBlueTag} href="/switches" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Switches</Text>
				</Link>
				<Link color={colorBlueTag} href="/keycaps" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Keycaps</Text>
				</Link>
				<Button auto>
					<Text style={{
						fontSize: "20px",
						fontWeight: "bold"
					}}>Submit</Text>
				</Button>
			</div>
		</div>
	)
}

export default App