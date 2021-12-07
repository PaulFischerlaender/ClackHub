import React, { Component } from "react"
import { Button, Card, Grid, Text, Tooltip, Spacer } from "@nextui-org/react";
import config from '../components/config.json'
import { useMediaPredicate } from "react-media-hook";

const key = process.env.REACT_APP_API_KEY;
const tagPlacement = "right";

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const onClickUrl = (url) => {
    return () => openInNewTab(url)
}

const minWidthCards = "260px"

class Vendors extends Component {

    //Defines 'data' as an array of 'state'
    state = {
        data: [],
    }

    //Mounts the component to access it from HTML
    componentDidMount = this.componentDidMount.bind(this);

    //Fetch results from database and store them in 'data'
    componentDidMount() {
        fetch(config.URL_VENDORS + config.ASK_FOR_KEY + key)
            .then(res => res.json())
            .then(res => {
                //Sets fetched 'res' to 'data'
                this.setState({ data: res.records })
            })
            .catch(error => console.log(error))
    }

    render() {
        const { data } = this.state;
        return (
            <div style={{
                display: "flex"
            }}>
                <Grid.Container gap={1} justify="center">
                    <Grid fluid>
                        <Card style={{
                            backgroundColor: config.DARK_COLOR_SIDE,
                            minWidth: minWidthCards
                        }}>
                            <Card color={config.EUROPE_COLOR} auto style={{
                                marginBottom: "2vh",
                                overflow: "hidden"
                            }}>
                                <h5 style={{
                                    color: "#fff"
                                }}>
                                    EUROPE
                                </h5>
                            </Card>
                            {data.map(book => (
                                <CheckRegionEU {...book.fields} key={book.fields.id} />
                            ))}
                        </Card>
                    </Grid>
                    <Grid fluid>
                        <Card style={{
                            backgroundColor: config.DARK_COLOR_SIDE,
                            minWidth: minWidthCards
                        }}>
                            <Card color={config.NA_COLOR} auto style={{
                                marginBottom: "2vh"
                            }}>
                                <h5 style={{
                                    color: "#fff"
                                }}>
                                    NORTH AMERICA
                                </h5>
                            </Card>
                            {data.map(book => (
                                <CheckRegionNA {...book.fields} key={book.fields.id} />
                            ))}
                        </Card>
                    </Grid>
                    <Grid fluid>
                        <Card style={{
                            backgroundColor: config.DARK_COLOR_SIDE,
                            minWidth: minWidthCards
                        }}>
                            <Card color={config.SA_COLOR} auto style={{
                                marginBottom: "2vh"
                            }}>
                                <h5 style={{
                                    color: "#fff"
                                }}>
                                    SOUTH AMERICA
                                </h5>
                            </Card>
                            {data.map(book => (
                                <CheckRegionSA {...book.fields} key={book.fields.id} />
                            ))}
                        </Card>
                    </Grid>
                    <Grid fluid>
                        <Card style={{
                            backgroundColor: config.DARK_COLOR_SIDE,
                            minWidth: minWidthCards
                        }}>
                            <Card color={config.ASIA_COLOR} auto style={{
                                marginBottom: "2vh"
                            }}>
                                <h5 style={{
                                    color: "#fff"
                                }}>
                                    ASIA
                                </h5>
                            </Card>
                            {data.map(book => (
                                <CheckRegionAsia {...book.fields} key={book.fields.id} />
                            ))}
                        </Card>
                    </Grid>
                    <Grid fluid>
                        <Card style={{
                            backgroundColor: config.DARK_COLOR_SIDE,
                            minWidth: minWidthCards
                        }}>
                            <Card color={config.OCEANIA_COLOR} auto style={{
                                marginBottom: "2vh"
                            }}>
                                <h5 style={{
                                    color: "#fff"
                                }}>
                                    OCEANIA
                                </h5>
                            </Card>
                            {data.map(book => (
                                <CheckRegionOceania {...book.fields} key={book.fields.id} />
                            ))}
                        </Card>
                    </Grid>
                    <Grid fluid>
                        <Card style={{
                            backgroundColor: config.DARK_COLOR_SIDE,
                            minWidth: minWidthCards
                        }}>
                            <Card color={config.AFRICA_COLOR} auto style={{
                                marginBottom: "2vh"
                            }}>
                                <h5 style={{
                                    color: "#fff"
                                }}>
                                    AFRICA
                                </h5>
                            </Card>
                            {data.map(book => (
                                <CheckRegionAfrica {...book.fields} key={book.fields.id} />
                            ))}
                        </Card>
                    </Grid>
                </Grid.Container>
            </div>
        )
    }
}

//Sorts the results in regions and returns them
function CheckRegionNA({ name, website, region, location }) {
    if (region === "NorthAmerica") {
        return (
            <Button style={{
                marginBottom: "1vh"
            }} auto flat color={config.NA_COLOR} textColor="white" onClick={onClickUrl(website)}>
                <Tooltip content={config.LOCATION_STRING + location} placement={tagPlacement} color={config.NA_COLOR}>
                    <Text h5 transform="capitalize">
                        {name}
                    </Text>
                </Tooltip>
            </Button>
        )
    } else {
        return (
            null
        )
    }
}

function CheckRegionSA({ name, website, region, location }) {
    if (region === "SouthAmerica") {
        return (
            <Button style={{
                marginBottom: "1vh"
            }} auto flat color={config.SA_COLOR} textColor="white" onClick={onClickUrl(website)}>
                <Tooltip content={config.LOCATION_STRING + location} placement={tagPlacement} color={config.SA_COLOR}>
                    <Text h5 transform="capitalize">
                        {name}
                    </Text>
                </Tooltip>
            </Button>
        )
    } else {
        return (
            null
        )
    }
}

function CheckRegionEU({ name, website, region, location }) {
    if (region === "Europe") {
        return (
            <Button style={{
                marginBottom: "1vh"
            }} auto flat color={config.EUROPE_COLOR} textColor="white" onClick={onClickUrl(website)}>
                <Tooltip content={config.LOCATION_STRING + location} placement={tagPlacement} color={config.EUROPE_COLOR}>
                    <Text h5 transform="capitalize">
                        {name}
                    </Text>
                </Tooltip>
            </Button>
        )
    } else {
        return (
            null
        )
    }
}

function CheckRegionAsia({ name, website, region, location }) {
    if (region === "Asia") {
        return (
            <Button style={{
                marginBottom: "1vh"
            }} auto flat color={config.ASIA_COLOR} textColor="white" onClick={onClickUrl(website)}>
                <Tooltip content={config.LOCATION_STRING + location} placement={tagPlacement} color={config.ASIA_COLOR}>
                    <Text h5 transform="capitalize">
                        {name}
                    </Text>
                </Tooltip>
            </Button>
        )
    } else {
        return (
            null
        )
    }
}

function CheckRegionOceania({ name, website, region, location }) {
    if (region === "Oceania") {
        return (
            <Button style={{
                marginBottom: "1vh"
            }} auto flat color={config.OCEANIA_COLOR} textColor="white" onClick={onClickUrl(website)}>
                <Tooltip content={config.LOCATION_STRING + location} placement={tagPlacement} color={config.OCEANIA_COLOR}>
                    <Text h5 transform="capitalize">
                        {name}
                    </Text>
                </Tooltip>
            </Button>
        )
    } else {
        return (
            null
        )
    }
}

function CheckRegionAfrica({ name, website, region, location }) {
    if (region === "Africa") {
        return (
            <Button style={{
                marginBottom: "1vh"
            }} auto flat color={config.AFRICA_COLOR} textColor="white" onClick={onClickUrl(website)}>
                <Tooltip content={config.LOCATION_STRING + location} placement={tagPlacement} color={config.AFRICA_COLOR}>
                    <Text h5 transform="capitalize">
                        {name}
                    </Text>
                </Tooltip>
            </Button>
        )
    } else {
        return (
            null
        )
    }
}


export default Vendors;