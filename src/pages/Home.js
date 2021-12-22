import { Text } from "@nextui-org/react";
import React from "react"
import { useMediaPredicate } from "react-media-hook";
import config from '../components/config.json'
import stockSVG from '../components/icons/stock.svg'
import configuratorSVG from '../components/icons/configurator.svg'
import contentright from '../components/icons/contentright.png'

const headerSize = "90px";
const tagSize = "20px";
const textSize = "20px";

function Home() {
    console.log(window.location.pathname)
    const biggerThan1300 = useMediaPredicate("(min-width: 1300px)");
    const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");
    const biggerThan740 = useMediaPredicate("(min-width: 740px)");
    const biggerThan480 = useMediaPredicate("(min-width: 480px)");
    document.body.style.height = "auto"
    return (
        <div>
            {!biggerThan480 && <div className="main" style={{
                width: "80vw",
                margin: 0,
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <div className="splitter" style={{
                    display: "block",
                    marginTop: "10vh",
                    marginBottom: "5vh"
                }}>
                    <div className="content-left" style={{
                        width: "80vw"
                    }}>
                        <div>
                            <div className="tag" style={{
                                height: "auto",
                                marginBottom: "1vh"
                            }}>
                                <Text color={config.LINK_COLOR} style={{
                                    fontWeight: "bold",
                                    fontSize: tagSize
                                }}>Keyboard Hub.</Text>
                            </div>
                            <div className="header" style={{
                                height: "auto",
                                marginBottom: "1vh"
                            }}>
                                <Text color={config.TITLE_COLOR} style={{
                                    fontWeight: "bolder",
                                    fontSize: "65px"
                                }}>KeebLink</Text>
                            </div>
                            <div className="header-footer">
                                <Text color={config.TEXT_COLOR} style={{
                                    fontSize: textSize
                                }}>Free to use Custom Keyboard Hub. From Switches
                                    to Keyboard Kits,<br /> we got everything you need.</Text>
                            </div>
                        </div>
                    </div>
                    <div className="features" style={{
                        marginTop: "10vh",
                        display: "block",
                        marginBottom: "5vh"
                    }}>
                        <div style={{
                            marginBottom: "10vh"
                        }}>
                            <StockOverview />
                        </div>
                        <div>
                            <Configurator />
                        </div>
                    </div>
                </div>
            </div>}
            {biggerThan480 && !biggerThan740 && <div className="main" style={{
                width: "80vw",
                margin: 0,
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <div className="splitter" style={{
                    display: "block",
                    marginTop: "10vh",
                    marginBottom: "5vh"
                }}>
                    <div className="content-left" style={{
                        width: "80vw"
                    }}>
                        <div>
                            <div className="tag" style={{
                                height: "auto",
                                marginBottom: "1vh"
                            }}>
                                <Text color={config.LINK_COLOR} style={{
                                    fontWeight: "bold",
                                    fontSize: tagSize
                                }}>Keyboard Hub.</Text>
                            </div>
                            <div className="header" style={{
                                height: "auto",
                                marginBottom: "1vh"
                            }}>
                                <Text color={config.TITLE_COLOR} style={{
                                    fontWeight: "bolder",
                                    fontSize: "65px"
                                }}>KeebLink</Text>
                            </div>
                            <div className="header-footer">
                                <Text color={config.TEXT_COLOR} style={{
                                    fontSize: textSize
                                }}>Free to use Custom Keyboard Hub. From Switches
                                    to Keyboard Kits,<br /> we got everything you need.</Text>
                            </div>
                        </div>
                    </div>
                    <div className="features" style={{
                        marginTop: "10vh",
                        display: "flex",
                        marginBottom: "5vh"
                    }}>
                        <StockOverview />
                        <Configurator />
                    </div>
                </div>
            </div>}
            {biggerThan740 && !biggerThan1000 && <div className="main" style={{
                width: "80vw",
                margin: 0,
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <div className="splitter" style={{
                    display: "block",
                    marginTop: "10vh",
                    marginBottom: "5vh"
                }}>
                    <div className="content-left" style={{
                        width: "80vw"
                    }}>
                        <div>
                            <div className="tag" style={{
                                height: "auto",
                                marginBottom: "1vh"
                            }}>
                                <Text color={config.LINK_COLOR} style={{
                                    fontWeight: "bold",
                                    fontSize: tagSize
                                }}>Keyboard Hub.</Text>
                            </div>
                            <div className="header" style={{
                                height: "auto",
                                marginBottom: "1vh"
                            }}>
                                <Text color={config.TITLE_COLOR} style={{
                                    fontWeight: "bolder",
                                    fontSize: headerSize
                                }}>KeebLink</Text>
                            </div>
                            <div className="header-footer">
                                <Text color={config.TEXT_COLOR} style={{
                                    fontSize: textSize
                                }}>Free to use Custom Keyboard Hub. From Switches
                                    to Keyboard Kits,<br /> we got everything you need.</Text>
                            </div>
                        </div>
                    </div>
                    <div className="features" style={{
                        marginTop: "10vh",
                        display: "flex",
                        marginBottom: "5vh"
                    }}>
                        <StockOverview />
                        <Configurator />
                    </div>
                </div>
            </div>}
            {biggerThan1000 && !biggerThan1300 &&
                <div>
                    <div className="main" style={{
                        width: "80vw",
                        margin: 0,
                        margin: "auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}>
                        <div className="splitter" style={{
                            display: "flex",
                            marginTop: "10vh",
                            marginBottom: "5vh"
                        }}>
                            <div className="content-left" style={{
                                height: "50px",
                                width: "40vw"
                            }}>
                                <div>
                                    <div className="tag" style={{
                                        height: "auto",
                                        marginBottom: "1vh"
                                    }}>
                                        <Text color={config.LINK_COLOR} style={{
                                            fontWeight: "bold",
                                            fontSize: tagSize
                                        }}>Keyboard Hub.</Text>
                                    </div>
                                    <div className="header" style={{
                                        height: "auto",
                                        marginBottom: "1vh"
                                    }}>
                                        <Text color={config.TITLE_COLOR} style={{
                                            fontWeight: "bolder",
                                            fontSize: headerSize
                                        }}>KeebLink</Text>
                                    </div>
                                    <div className="header-footer">
                                        <Text color={config.TEXT_COLOR} style={{
                                            fontSize: textSize
                                        }}>Free to use Custom Keyboard Hub. From Switches
                                            to Keyboard Kits,<br /> we got everything you need.</Text>
                                    </div>
                                </div>
                            </div>
                            <div className="content-right" style={{
                                width: "30vw"
                            }}>
                                <ContentCard />
                            </div>
                        </div>
                        <div className="features" style={{
                            marginTop: "10vh",
                            display: "flex",
                            marginBottom: "10vh"
                        }}>
                            <StockOverview />
                            <Configurator />
                        </div>
                    </div>
                </div>}
            {biggerThan1300 &&
                <div>
                    <div className="main" style={{
                        width: "80vw",
                        margin: 0,
                        margin: "auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}>
                        <div className="splitter" style={{
                            display: "flex",
                            marginTop: "10vh",
                            marginBottom: "30vh"
                        }}>
                            <div className="content-left" style={{
                                height: "50px",
                                width: "40vw"
                            }}>
                                <div>
                                    <div className="tag" style={{
                                        height: "auto",
                                        marginBottom: "1vh"
                                    }}>
                                        <Text color={config.LINK_COLOR} style={{
                                            fontWeight: "bold",
                                            fontSize: tagSize
                                        }}>Keyboard Hub.</Text>
                                    </div>
                                    <div className="header" style={{
                                        height: "auto",
                                        marginBottom: "1vh"
                                    }}>
                                        <Text color={config.TITLE_COLOR} style={{
                                            fontWeight: "bolder",
                                            fontSize: headerSize
                                        }}>KeebLink</Text>
                                    </div>
                                    <div className="header-footer">
                                        <Text color={config.TEXT_COLOR} style={{
                                            fontSize: textSize
                                        }}>Free to use Custom Keyboard Hub. From Switches
                                            to Keyboard Kits,<br /> we got everything you need.</Text>
                                    </div>
                                </div>
                                <div className="features" style={{
                                    marginTop: "10vh",
                                    display: "flex"
                                }}>
                                    <StockOverview />
                                    <Configurator />
                                </div>
                            </div>
                            <div className="content-right" style={{
                                width: "40vw"
                            }}>
                                <ContentCard />
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

function ContentCard() {
    return (
        <div>
            <img src={contentright} alt="" style={{
                width: "100%"
            }}></img>
        </div>
    )
}

function StockOverview() {
    return (
        <div className="stock-overview" style={{
            display: "block",
            marginRight: "2vw"
        }}>
            <img src={stockSVG} alt="" style={{
                width: "80px",
                marginBottom: "2vh"
            }}></img>
            <Text color={config.TITLE_COLOR} style={{
                fontSize: textSize,
                fontWeight: "bold",
                marginBottom: "1vh"
            }}>Stock Overview</Text>
            <Text color={config.TEXT_COLOR} style={{
                fontSize: textSize,
                marginBottom: "3vh"
            }}>Lists of the most desired keyboard
                parts, with links to different vendors
                in the world.</Text>
            <a href="/switches">
                <Text color={config.LINK_LIGHT_COLOR} style={{
                    fontSize: textSize,
                    fontWeight: "bold"
                }}>Learn More</Text>
            </a>
        </div>
    )
}

function Configurator() {
    return (
        <div className="configurator" style={{
            display: "block"
        }}>
            <img src={configuratorSVG} alt="" style={{
                width: "80px",
                marginBottom: "2vh"
            }}></img>
            <Text color={config.TITLE_COLOR} style={{
                fontSize: textSize,
                fontWeight: "bold",
                marginBottom: "1vh"
            }}>Configurator</Text>
            <Text color={config.TEXT_COLOR} style={{
                fontSize: textSize,
                marginBottom: "3vh"
            }}>Configure your next dream board
                and automatically check if there
                are any issues with it.</Text>
            <a href="configurator">
                <Text color={config.LINK_LIGHT_COLOR} style={{
                    fontSize: textSize,
                    fontWeight: "bold"
                }}>Learn More</Text>
            </a>
        </div>
    )
}

export default Home;