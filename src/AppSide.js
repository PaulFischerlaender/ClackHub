import React from 'react'
import { Button, Tooltip, Collapse, Text, Col, Card } from '@nextui-org/react';
import { Link as UILink } from '@nextui-org/react'
import config from './components/config.json'
import Vendors from './pages/Vendors'
import Switches from './pages/Switches'
import Keycaps from './pages/Keycaps';
import Kits from './pages/Kits';
import Home from './pages/Home';
import { useRoutes } from 'hookrouter';
import AppLogo from './components/icons/logot.svg';
import AppLogoMobile from './components/icons/logomobile.svg';
import Guide from './pages/Guide';
import { useMediaPredicate } from "react-media-hook";
import DiscordLogo from './Discord-Logo-White.svg'
import Imprint from './pages/Imprint';
import PrivacyPolicy from './pages/PrivacyPolicy'

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

function App() {
	const biggerThan1540 = useMediaPredicate("(min-width: 1540px)");
	const biggerThan1160 = useMediaPredicate("(min-width: 1160px)");
	const biggerThan740 = useMediaPredicate("(min-width: 740px)");
	const routeResult = useRoutes(routes);
	document.body.style.backgroundColor = config.DARK_COLOR_BACKGROUND;
	document.body.style.minHeight = "100vh";

	//Init HTML for side component.
	//Route to other pages via router
	return (
		<div>
			{!biggerThan1160 && <div className="hero" style={{
				display: "block",
				width: "100%",
				height: "auto"
			}}>

				<div id="nav" className="nav" style={{
					display: "flex",
					width: "90vw",
					marginLeft: "1vw",
					marginRight: "1vw"
				}}>
					<div>
						<div className="nav-content" style={{
							display: "flex"
						}}>
							{/**
                         * Renders collpase for devices under 900px width
                         */}
							{/**
                         * Renders Links for devices over 900px width
                         */}
							<Collapse
								shadow
								contentLeft={<div className="logo">
									<img src={AppLogoMobile} alt="" style={{
										width: "40px",
										marginRight: "1vh"
									}}></img>
								</div>}
								title={<Text h3 color="#fff">Navigation</Text>}
								justify="center"
								style={{
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
									<UILink color={config.DARK_LINK_COLOR} id="nav.keyboard" href="/keyboard-kits" style={{
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
									{!biggerThan740 && <div style={{
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
										<UILink color={config.DARK_DSGVO_COLOR} href="/imprint" className="nav-imprint" style={{
											marginRight: "1vw"
										}}><h5>Imprint</h5></UILink>
										<UILink color={config.DARK_DSGVO_COLOR} href="/privacy" className="nav-imprint" style={{
											marginRight: "1vw"
										}}><h5>Privacy policy</h5></UILink>
									</div>}
								</Col>
							</Collapse>
							{biggerThan740 && <div className="nav-content-right" style={{
								display: "flex",
								marginTop: "30px",
								marginLeft: "3vh"
							}}>
								<Tooltip content={'Join our discord!'} placement="bottom" color="primary" style={{
									marginRight: "3vh"
								}}>
									<Button auto color="primary" icon={<Discord fill="white" filled />} onClick={onClickUrl("https://discord.gg/x9kGNGRsYM")} />
								</Tooltip>
								<br />
								<Tooltip content={'Created with ❤️ by P4ulF'} placement="bottom" color="primary" style={{
									marginRight: "3vh"
								}}>
									<Button auto rounded={false} flat color="primary">{config.VERSION}</Button>
								</Tooltip>
								<br />
								<UILink color={config.DARK_DSGVO_COLOR} href="/imprint" className="nav-imprint" style={{
									marginRight: "1vw"
								}}><h5>Imprint</h5></UILink>
								<UILink color={config.DARK_DSGVO_COLOR} href="/privacy" className="nav-imprint" style={{
									marginRight: "1vw"
								}}><h5>Privacy policy</h5></UILink>
							</div>}
						</div>
					</div>
				</div>
				<div className="content" style={{
					width: "95%",
					margin: 0,
					margin: "auto",
					marginTop: "1.5vh"
				}}>
					<div id="main" className="main" style={{
						width: "100%",
						top: "0"
					}}>
						{routeResult}
					</div>
				</div>
			</div>}
			{biggerThan1160 && !biggerThan1540 && <div className="hero" style={{
				display: "flex",
				width: "100%",
				height: "auto"
			}}>
				<Card id="nav" className="nav" style={{
					display: "block",
					backgroundColor: config.DARK_COLOR_SIDE,
					marginTop: "4vh",
					width: "15%",
					marginLeft: "4vh",
					marginRight: "1vw",
					height: "92vh",
					position: "-webkit-sticky",
					position: "sticky",
					top: "4vh"
				}}>
					<div style={{
						overflow: 'hidden'
					}}>
						<div className="logo" style={{
							width: "40%",
							margin: 0,
							margin: "auto"
						}}>
							<a href="/">
								<img src={AppLogoMobile} alt="" style={{
									marginTop: "30px",
									marginBottom: "9vh",
								}}></img>
							</a>
						</div>
						<div className="nav-content" style={{
							display: "block",
							marginTop: "2vh",
							margin: "auto"
						}}>
							{/**
                         * Renders collpase for devices under 900px width
                         */}
							{/**
                         * Renders Links for devices over 900px width
                         */}
							<div className="nav-content-left" style={{
								display: "block",
								marginTop: "30px"
							}}>
								<UILink color={config.DARK_LINK_COLOR} id="nav.guides" href="/guides" style={{
									marginBottom: "1vh"
								}}>
									<h4>Guides</h4>
								</UILink>
								<br />
								<UILink color={config.DARK_LINK_COLOR} id="nav.keyboard" href="/keyboard-kits" style={{
									marginBottom: "1vh"
								}}>
									<h4>Keyboard Kits</h4>
								</UILink>
								<br />
								<UILink color={config.DARK_LINK_COLOR} id="nav.keycaps" href="/keycaps" style={{
									marginBottom: "1vh"
								}}>
									<h4>Keycaps</h4>
								</UILink>
								<br />
								<UILink color={config.DARK_LINK_COLOR} id="nav.switches" href="/switches" style={{
									marginBottom: "1vh"
								}}>
									<h4>Switches</h4>
								</UILink>
								<br />
								<UILink color={config.DARK_LINK_COLOR} id="nav.vendors" href="/vendors" style={{
									marginBottom: "1vh"
								}}>
									<h4>Vendors</h4>
								</UILink>
							</div>
							<div className="nav-content-right" style={{
								display: "block",
								marginTop: "30px"
							}}>
								<Tooltip content={'Join our discord!'} placement="bottom" color="primary" style={{
									marginRight: "3vh"
								}}>
									<Button auto color="primary" icon={<Discord fill="white" filled />} onClick={onClickUrl("https://discord.gg/x9kGNGRsYM")} />
								</Tooltip>
								<br />
								<Tooltip content={'Created with ❤️ by P4ulF'} placement="bottom" color="primary" style={{
									marginRight: "3vh"
								}}>
									<Button auto rounded={false} flat color="primary">{config.VERSION}</Button>
								</Tooltip>
								<br />
								<UILink color={config.DARK_DSGVO_COLOR} href="/imprint" className="nav-imprint" style={{
									marginRight: "1vw"
								}}><h5>Imprint</h5></UILink>
								<UILink color={config.DARK_DSGVO_COLOR} href="/privacy" className="nav-imprint" style={{
									marginRight: "1vw"
								}}><h5>Privacy policy</h5></UILink>
							</div>
						</div>
					</div>
				</Card>
				<div className="content" style={{
					width: "80%",
					marginTop: "4vh"
				}}>
					<div id="main" className="main" style={{
						width: "100%"
					}}>
						{routeResult}
					</div>
				</div>
			</div>}
			{biggerThan1540 && <div className="hero" style={{

				display: "flex",
				width: "100%",
				height: "auto"
			}}>
				<Card id="nav" className="nav" style={{
					display: "block",
					backgroundColor: config.DARK_COLOR_SIDE,
					marginTop: "4vh",
					width: "15%",
					marginLeft: "4vh",
					marginRight: "1vw",
					height: "92vh",
					position: "-webkit-sticky",
					position: "sticky",
					top: "4vh"
				}}>
					<div style={{
						overflow: 'hidden'
					}}>
						<div className="logo" style={{
							margin: 0,
							margin: "auto"
						}}>
							<a href="/">
								<img src={AppLogo} alt="" style={{
									width: "175px",
									marginLeft: "3vh",
									marginRight: "3vh",
									marginTop: "25px",
									marginBottom: "9vh"
								}}></img>
							</a>
						</div>
						<div className="nav-content" style={{
							display: "block",
							marginTop: "2vh",
							margin: "auto",
							position: "relative",
							height: "70vh"
						}}>
							{/**
                         * Renders collpase for devices under 900px width
                         */}
							{/**
                         * Renders Links for devices over 900px width
                         */}
							<div className="nav-content-left" style={{
								display: "block",
								marginTop: "30px"
							}}>
								<UILink color={config.DARK_LINK_COLOR} id="nav.guides" href="/guides" style={{
									marginBottom: "1vh"
								}}>
									<h4>Guides</h4>
								</UILink>
								<br />
								<UILink color={config.DARK_LINK_COLOR} id="nav.keyboard" href="/keyboard-kits" style={{
									marginBottom: "1vh"
								}}>
									<h4>Keyboard Kits</h4>
								</UILink>
								<br />
								<UILink color={config.DARK_LINK_COLOR} id="nav.keycaps" href="/keycaps" style={{
									marginBottom: "1vh"
								}}>
									<h4>Keycaps</h4>
								</UILink>
								<br />
								<UILink color={config.DARK_LINK_COLOR} id="nav.switches" href="/switches" style={{
									marginBottom: "1vh"
								}}>
									<h4>Switches</h4>
								</UILink>
								<br />
								<UILink color={config.DARK_LINK_COLOR} id="nav.vendors" href="/vendors" style={{
									marginBottom: "1vh"
								}}>
									<h4>Vendors</h4>
								</UILink>
								<UILink color={config.DARK_LINK_COLOR} id="nav.vendors" href="/vendors" style={{
									marginRight: "3vw"
								}}>
									<Button flat color={"error"} auto><h4>Configurator</h4></Button>
								</UILink>
							</div>
							<div className="nav-content-right" style={{
								display: "block",
								position: "absolute",
								bottom: "0"
							}}>
								<Tooltip content={'Join our discord!'} placement="right" color="primary" style={{
									marginRight: "3vh"
								}}>
									<Button auto color="primary" icon={<Discord fill="white" filled />} onClick={onClickUrl("https://discord.gg/x9kGNGRsYM")} />
								</Tooltip>
								<br />
								<Tooltip content={'Created with ❤️ by P4ulF'} placement="right" color="primary" style={{
									marginRight: "3vh"
								}}>
									<Button auto rounded={false} flat color="primary">{config.VERSION}</Button>
								</Tooltip>
								<br />
								<UILink color={config.DARK_DSGVO_COLOR} href="/imprint" className="nav-imprint" style={{
									marginRight: "1vw"
								}}><h5>Imprint</h5></UILink>
								<br />
								<UILink color={config.DARK_DSGVO_COLOR} href="/privacy" className="nav-imprint" style={{
									marginRight: "1vw"
								}}><h5>Privacy policy</h5></UILink>
							</div>
						</div>
					</div>
				</Card>
				<div className="content" style={{
					width: "80%",
					margin: 0,
					marginTop: "4vh"
				}}>
					<div id="main" className="main" style={{
						width: "100%",
						top: "0"
					}}>
						{routeResult}
					</div>
				</div>
			</div>}
		</div>
	)
}

function CheckSite() {
	if(window.location.pathname === "/vendors") {
		console.log("VENDORS")
		return (null)
	}
}

function Discord() {
	return (
		<img style={{
			width: "auto",
			height: "25px"
		}} src={DiscordLogo} />
	)
}

export default App