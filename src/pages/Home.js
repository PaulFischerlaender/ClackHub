import { Card, Collapse, Grid, Button, Spacer, Text, Link, Tooltip } from "@nextui-org/react";
import config from '../components/config.json'
import React from "react"
import { useMediaPredicate } from "react-media-hook";
import MainImage from '../components/icons/home/main.png';
import SwitchClicked from '../components/icons/home/switch_clicked.png'
import VendorsImage from '../components/icons/home/vendors.png'
import AppLogoMobile from '../components/icons/logomobile.svg';
import DiscordLogo from '../Discord-Logo-White.svg'
import { useRoutes } from 'hookrouter';
import Imprint from '../pages/Imprint';
import PrivacyPolicy from '../pages/PrivacyPolicy'
const header = "KeebLink"

const guidesText = "Getting started with building your own keyboard can be very daunting at first. With our guides we are giving you the opportunity to build your dream board with the least possible headache."
const stockText = "Our website is designed to easily become aware of every notable keyboard part out there. You can filter your results and get links to a majority of vendors who have it in stock."
const vendorText = "Finding the right vendors when starting your keyboard journey is an essential part. With our vendor list you can easily see where each vendor is located. This can not only dramatically help with decreasing shipping times and costs but also preserves you from potential customs fees."

const faqFree = "Yes. This website is completely free for you to use as much as you like."
const faqFinance = "Neither are there any hidden ads nor do we sell your data to thirdparties. We finance ourselves with refferal links. This means when you use a link on our website and then buy something of that vendor we get a little percentage."
const faqTech = "This website is made with React and Airtable. For the UI we use a library called NextUI, check them out here:"
const faqContact = "You can find our contact detials by clicking here:"

const marginBottomHome = "30vh"

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const onClickUrl = (url) => {
    return () => openInNewTab(url)
}

const imprintRoutes = {
    "/imprint": () => <Imprint />
};

const privacyRoutes = {
    "/privacy": () => <PrivacyPolicy />
};

function Home() {
    const imprintResult = useRoutes(imprintRoutes);
    const privacyResult = useRoutes(privacyRoutes);
    const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");
    if (window.location.pathname === "/imprint") {
        document.body.style.backgroundImage = "url(/images/background.svg)"
        return (
            <div>
                {imprintResult}
            </div>
        )
    } else {
        if (window.location.pathname === "/privacy") {
            document.body.style.backgroundImage = "url(/images/background.svg)"
            return (
                <div>
                    {privacyResult}
                </div>
            )
        } else {
            return (
                <div>
                    {!biggerThan1000 && <div>
                        <div>
                            <div className="nav" style={{
                                width: "100%",
                                height: "75px",
                                backgroundColor: "#111111"
                            }}>
                                <div style={{
                                    padding: "16px"
                                }}>
                                    <img src={AppLogoMobile} alt="" style={{
                                        width: "40px",
                                        marginRight: "1vh"
                                    }}></img>
                                    <Button auto color="primary" style={{
                                        float: "right",
                                        marginLeft: "1vw",
                                        marginRight: "1vw"
                                    }}>
                                        <Text style={{
                                            fontSize: "15px",
                                            fontWeight: "bold"
                                        }}>
                                            Submit
                                        </Text>
                                    </Button>
                                    <Button auto flat color="primary" style={{
                                        float: "right",
                                    }}>
                                        <Text style={{
                                            fontSize: "15px",
                                            fontWeight: "bold"
                                        }}>
                                            Contact
                                        </Text>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="hero" style={{
                            marginLeft: "13vw",
                            marginRight: "13vw"
                        }}>

                            <div className="main" style={{
                                height: "75vh",
                                display: "flex"
                            }}>
                                <div className="text" style={{
                                    marginTop: "6vh"
                                }}>
                                    <Text style={{
                                        fontSize: "40px",
                                        fontWeight: "bold",
                                        marginBottom: "3vh",
                                        marginTop: 0
                                    }} color="white">{header}</Text>
                                    <Text style={{
                                        fontSize: "40px",
                                        fontWeight: "bold",
                                        marginTop: 0,
                                        marginBottom: "6vh"
                                    }} color="white">Your all-in-one<br /> Keyboard App</Text>
                                    <Link color={config.DARK_LINK_COLOR} id="nav.vendors" href="/switches">
                                        <Button auto color="gradient" style={{
                                            height: "6vh"
                                        }}>
                                            <Text color="white" style={{
                                                fontSize: "20px",
                                                fontWeight: "bold"
                                            }}>
                                                Start now!
                                            </Text>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="main-image">
                                <img src={MainImage} alt="" style={{
                                    marginTop: "-15vh",
                                    width: "100%"
                                }}></img>
                            </div>
                            <div className="features" style={{
                                marginTop: "15vh",
                            }}>
                                <Text h2 color="white" style={{
                                    marginBottom: "2vh"
                                }}>Our core features!</Text>
                                <RenderCardMobile />
                            </div>
                            <div className="FAQ">
                                <Text h2 color="white" style={{
                                    marginBottom: "2vh",
                                    marginTop: "16vh"
                                }}>Frequently asked Questions!</Text>
                                <RenderFAQ />
                            </div>
                            <Spacer y={3} />
                        </div>
                        <div className="footer" style={{
                            backgroundColor: config.DARK_COLOR_BACKGROUND,
                            width: "100%",
                            height: "75px",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "16px"
                        }}>
                            <Link color={config.DARK_DSGVO_COLOR} href="/imprint" className="nav-imprint" style={{
                                marginRight: "4vw"
                            }}><Text style={{
                                fontSize: "20px",
                                fontWeight: "bold"
                            }}>Imprint</Text>
                            </Link>
                            <Tooltip content={'Join our discord!'} placement="bottom" color="primary">
                                <Button auto color="primary" icon={<Discord fill="white" filled />} onClick={onClickUrl("https://discord.gg/x9kGNGRsYM")} />
                            </Tooltip>
                            <Link color={config.DARK_DSGVO_COLOR} href="/privacy" className="nav-imprint"><Text style={{
                                fontSize: "20px",
                                fontWeight: "bold"
                            }}>Privacy Policy</Text>
                            </Link>
                        </div>
                    </div>}
                    {biggerThan1000 &&
                        <div>
                            <div>
                                <div className="nav" style={{
                                    width: "100%",
                                    height: "75px",
                                    backgroundColor: "#111111"
                                }}>
                                    <div style={{
                                        padding: "16px",
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }}>
                                        <img src={AppLogoMobile} alt="" style={{
                                            width: "40px",
                                            marginRight: "1vh"
                                        }}></img>
                                        <div style={{
                                            display: "flex"
                                        }}>
                                            <Tooltip content={'Join our discord!'} placement="bottom" color="primary">
                                                <Button auto color="primary" icon={<Discord fill="white" filled />} onClick={onClickUrl("https://discord.gg/x9kGNGRsYM")} />
                                            </Tooltip>
                                            <Button auto color="primary" style={{
                                                float: "right",
                                                marginLeft: "1vw",
                                                marginRight: "1vw"
                                            }}>
                                                <Text style={{
                                                    fontSize: "20px",
                                                    fontWeight: "bold"
                                                }}>
                                                    Submit
                                                </Text>
                                            </Button>
                                            <Button auto flat color="primary" style={{
                                                float: "right",
                                            }}>
                                                <Text style={{
                                                    fontSize: "20px",
                                                    fontWeight: "bold"
                                                }}>
                                                    Contact
                                                </Text>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero" style={{
                                marginLeft: "13vw",
                                marginRight: "13vw"
                            }}>

                                <div className="main" style={{
                                    height: "75vh",
                                    display: "flex"
                                }}>
                                    <div className="text" style={{
                                        marginTop: "10vh"
                                    }}>
                                        <Text style={{
                                            fontSize: "65px",
                                            fontWeight: "bold",
                                            marginBottom: "3vh",
                                            marginTop: 0
                                        }} color="white">{header}</Text>
                                        <Text style={{
                                            fontSize: "65px",
                                            fontWeight: "bold",
                                            marginTop: 0,
                                            marginBottom: "6vh"
                                        }} color="white">Your all-in-one<br /> Keyboard App</Text>
                                        <Link color={config.DARK_LINK_COLOR} id="nav.vendors" href="/switches">
                                            <Button color="gradient" style={{
                                                width: "10vw",
                                                height: "6vh"
                                            }}>
                                                <Text color="white" style={{
                                                    fontSize: "20px",
                                                    fontWeight: "bold"
                                                }}>
                                                    Start now!
                                                </Text>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="main-image">
                                    <img src={MainImage} alt="" style={{
                                        marginTop: "1vh",
                                        width: "100%"
                                    }}></img>
                                </div>
                                <div className="features" style={{
                                    marginTop: "20vh",
                                    marginBottom: marginBottomHome
                                }}>
                                    <Text h2 color="white" style={{
                                        marginBottom: "2vh"
                                    }}>Our core features!</Text>
                                    <RenderCard />
                                </div>
                                <div className="FAQ">
                                    <Text h2 color="white" style={{
                                        marginBottom: "2vh",
                                        marginTop: "6vh"
                                    }}>Frequently asked Questions!</Text>
                                    <RenderFAQ />
                                </div>
                                <Spacer y={3} />
                            </div>
                            <div className="footer" style={{
                                backgroundColor: config.DARK_COLOR_BACKGROUND,
                                width: "100%",
                                height: "75px",
                                display: "flex",
                                justifyContent: "space-evenly",
                                padding: "16px"
                            }}>
                                <Link color={config.DARK_DSGVO_COLOR} href="/imprint" className="nav-imprint" style={{
                                    marginRight: "4vw"
                                }}><Text style={{
                                    fontSize: "20px",
                                    fontWeight: "bold"
                                }}>Imprint</Text>
                                </Link>
                                <Link color={config.DARK_DSGVO_COLOR} href="/privacy" className="nav-imprint"><Text style={{
                                    fontSize: "20px",
                                    fontWeight: "bold"
                                }}>Privacy Policy</Text>
                                </Link>
                            </div>
                        </div>}
                </div>
            )
        }
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

function RenderFAQ() {
    return (
        <Collapse.Group splitted style={{
            width: "100%"
        }}>
            <Collapse shadow title={<Text h3 color="white">Is this website free?</Text>} style={{
                backgroundColor: config.DARK_COLOR_BACKGROUND
            }}>
                <Text h4 color="white">{faqFree}</Text>
            </Collapse>
            <Collapse shadow title={<Text h3 color="white">How do you finance this app then?</Text>} style={{
                backgroundColor: config.DARK_COLOR_BACKGROUND
            }}>
                <Text h4 color="white">{faqFinance}</Text>
            </Collapse>
            <Collapse shadow title={<Text h3 color="white">How did you build this website?</Text>} style={{
                backgroundColor: config.DARK_COLOR_BACKGROUND
            }}>
                <Text h4 color="white">{faqTech}</Text>
                <Button stlye={{
                    marginTop: "10px"
                }} onClick={onClickUrl("https://NextUI.org/")}><Link icon>NextUI</Link></Button>
            </Collapse>
        </Collapse.Group>
    )
}

function RenderCard() {
    return (
        <div>
            <Card shadow color={config.DARK_COLOR_BACKGROUND} style={{
                marginBottom: "6vh"
            }}>
                <Card.Header>
                    <Text h3 color="white">
                        Guides
                    </Text>
                </Card.Header>
                <Card.Body>
                    <Text h4 color={config.LIGHT_TEXT_COLOR}>
                        {guidesText}
                    </Text>
                </Card.Body>
                <Card.Image style={{
                    padding: "20px"
                }}
                    autoResize={false}
                    src={SwitchClicked}
                    width="100%"
                    alt="Card example background"
                />
            </Card>
            <Card shadow color={config.DARK_COLOR_BACKGROUND} style={{
                marginBottom: "6vh"
            }}>
                <Card.Header>
                    <Text h3 color="white">
                        Stock Overview
                    </Text>
                </Card.Header>
                <Card.Body>
                    <Text h4 color={config.LIGHT_TEXT_COLOR}>
                        {stockText}
                    </Text>
                </Card.Body>
                <Card.Image style={{
                    padding: "20px"
                }}
                    autoResize={false}
                    src={SwitchClicked}
                    width="100%"
                    alt="Card example background"
                />
            </Card>
            <Card shadow color={config.DARK_COLOR_BACKGROUND}>
                <Card.Header>
                    <Text h3 color="white">
                        Vendor List
                    </Text>
                </Card.Header>
                <Card.Body>
                    <Text h4 color={config.LIGHT_TEXT_COLOR}>
                        {vendorText}
                    </Text>
                </Card.Body>
                <Card.Image style={{
                    padding: "20px"
                }}
                    autoResize={false}
                    src={VendorsImage}
                    width="100%"
                    alt="Card example background"
                />
            </Card>
        </div>
    )
}

function RenderCardMobile() {
    return (
        <div>
            <Card shadow color={config.DARK_COLOR_BACKGROUND} style={{
                marginBottom: "6vh"
            }}>
                <Card.Header>
                    <Text h3 color="white">
                        Guides
                    </Text>
                </Card.Header>
                <Card.Body>
                </Card.Body>
                <Card.Image style={{
                    padding: "20px"
                }}
                    autoResize={false}
                    src={SwitchClicked}
                    width="100%"
                    alt="Card example background"
                />
            </Card>
            <Card shadow color={config.DARK_COLOR_BACKGROUND} style={{
                marginBottom: "6vh"
            }}>
                <Card.Header>
                    <Text h3 color="white">
                        Stock Overview
                    </Text>
                </Card.Header>
                <Card.Body>
                </Card.Body>
                <Card.Image style={{
                    padding: "20px"
                }}
                    autoResize={false}
                    src={SwitchClicked}
                    width="100%"
                    alt="Card example background"
                />
            </Card>
            <Card shadow color={config.DARK_COLOR_BACKGROUND}>
                <Card.Header>
                    <Text h3 color="white">
                        Vendor List
                    </Text>
                </Card.Header>
                <Card.Body>
                </Card.Body>
                <Card.Image style={{
                    padding: "20px"
                }}
                    autoResize={false}
                    src={VendorsImage}
                    width="100%"
                    alt="Card example background"
                />
            </Card>
        </div>
    )
}

export default Home;