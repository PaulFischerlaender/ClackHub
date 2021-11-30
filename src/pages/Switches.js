import React, { Component } from "react";
import { Button, Spacer, Text, Radio, Collapse, Grid } from '@nextui-org/react';
import config from '../components/config.json'
//import Grid from '@material-ui/core/Grid'
import Cards from '../components/Cards'

const BtnClicky = 'filter.Clicky';
const BtnLinear = 'filter.linear';
const BtnTactile = 'filter.tactile';
const BtnSilentLinear = 'filter.silentlinear';
const BtnSilentTactile = 'filter.silenttactile';
const Btn3Pin = 'filter.3pin';
const Btn5Pin = 'filter.5pin';
const BtnJWK = 'filter.Jwk';
const BtnCherry = 'filter.Cherry';
const BtnGateron = 'filter.Gateron';
const BtnEverglide = 'filter.Everglide';

const filterClickyString = '%7Btype%7D%3D%22Clicky%22'
const filterTactileString = '%7Btype%7D%3D%22Tactile%22';
const filterLinearString = '%7Btype%7D%3D%22Linear%22';
const filterSilentLinearString = '%7Btype%7D%3D%22SilentLinear%22';
const filterSilentTactileString = '%7Btype%7D%3D%22SilentTactile%22';
const filter3PinString = '%7Bconfig%7D%3D%223-pin%22';
const filter5pinString = '%7Bconfig%7D%3D%225-pin%22';
const filterJWKString = '%7Bmanu%7D%3D%22JWK%22';
const filterCherryString = '%7Bmanu%7D%3D%22Cherry%22';
const filterGateronString = '%7Bmanu%7D%3D%22Gateron%22';
const filterEverglideString = '%7Bmanu%7D%3D%22Everglide%22';

const key = process.env.REACT_APP_API_KEY;

class Switches extends Component {

    /**
     * Renders the Switch site with all of its available cards, fed by airbase,
     * generates Modals and its parent card dynamically.
     */


    //Defines 'data' as an array of 'state'
    state = {
        data: []
    }

    //Mounts the component to access it from HTML
    componentDidMount = this.componentDidMount.bind(this);
    generateFilterSwitches = this.generateFilterSwitches.bind(this);
    generateLink = this.generateLink.bind(this);

    //Fetch results from database and store them in 'data'
    componentDidMount() {
        fetch(config.URL_SWITCHES + config.ASK_FOR_KEY + key)
            .then(res => res.json())
            .then(res => {
                //Sets fetched 'res' to 'data'
                this.setState({ data: res.records })
            })
            .catch(error => console.log(error))
    }

    //Generate filter links for selected checkboxes
    //TODO: Dont hardcode filterlinks + make them stackable, like '3pin + tactile'
    generateFilterSwitches(e) {
        if (e.target.id === BtnClicky) {
            fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filterClickyString + config.ASK_FOR_KEY_WHEN_FILTER + key)
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res.records })
                })
                .catch(error => console.log(error))
        }
        if (e.target.id === BtnLinear) {
            fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filterLinearString + config.ASK_FOR_KEY_WHEN_FILTER + key)
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res.records })
                })
                .catch(error => console.log(error))
        }
        if (e.target.id === BtnTactile) {
            fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filterTactileString + config.ASK_FOR_KEY_WHEN_FILTER + key)
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res.records })
                })
                .catch(error => console.log(error))
        }
        if (e.target.id === BtnSilentLinear) {
            fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filterSilentLinearString + config.ASK_FOR_KEY_WHEN_FILTER + key)
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res.records })
                })
                .catch(error => console.log(error))
        }
        if (e.target.id === BtnSilentTactile) {
            fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filterSilentTactileString + config.ASK_FOR_KEY_WHEN_FILTER + key)
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res.records })
                })
                .catch(error => console.log(error))
        }
        if (e.target.id === Btn3Pin) {
            fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filter3PinString + config.ASK_FOR_KEY_WHEN_FILTER + key)
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res.records })
                })
                .catch(error => console.log(error))
        }
        if (e.target.id === Btn5Pin) {
            fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filter5pinString + config.ASK_FOR_KEY_WHEN_FILTER + key)
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res.records })
                })
                .catch(error => console.log(error))
        }
        if (e.target.id === BtnJWK) {
            fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filterJWKString + config.ASK_FOR_KEY_WHEN_FILTER + key)
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res.records })
                })
                .catch(error => console.log(error))
        }
        if (e.target.id === BtnCherry) {
            fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filterCherryString + config.ASK_FOR_KEY_WHEN_FILTER + key)
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res.records })
                })
                .catch(error => console.log(error))
        }
        if (e.target.id === BtnGateron) {
            fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filterGateronString + config.ASK_FOR_KEY_WHEN_FILTER + key)
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res.records })
                })
                .catch(error => console.log(error))
        }
        if (e.target.id === BtnEverglide) {
            fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filterEverglideString + config.ASK_FOR_KEY_WHEN_FILTER + key)
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res.records })
                })
                .catch(error => console.log(error))
        }
    }

    generateLink(e) {
        //const valueTarget = e.value;
        console.log(e.currentTarget.value)
    }

    //Render the grid with all cards, fed by 'data'
    render() {
        const { data } = this.state
        return (
            <div>
                {/**
                 * @style
                 * 'filter-control' defines the width of the fitler area
                 */}
                <div className="filter-control" style={{
                    display: "flex",
                    margin: 0,
                    margin: "auto",
                    marginTop: "30px",
                    width: "100%"
                }}>
                    <Collapse
                        shadow
                        title={<Text h3 color="#fff">Filter</Text>}
                        textColor="primary"
                        subtitle="Look for specific combinations of switches"
                        justify="center"
                        style={{
                            width: "100%",
                            backgroundColor: config.DARK_COLOR_SIDE,
                        }}
                    >
                        <div>
                            <div>
                                <Text b h4>Switch Types</Text>
                            </div>
                            <Spacer y="1" />
                            {/**
                         * Container for the 'type' radio group
                         */}
                            <div style={{
                                marginBottom: "15px"
                            }}>
                                <Radio.Group row value="group">
                                    <Radio value="linear" id={BtnLinear} onClick={this.generateFilterSwitches}>
                                        Linear</Radio>
                                    <Radio value="tactile" id={BtnTactile} onClick={this.generateFilterSwitches}>
                                        Tactile</Radio>
                                    <Radio value="clicky" id={BtnClicky} onClick={this.generateFilterSwitches}>
                                        Clicky</Radio>
                                    <Radio value="silentlinear" id={BtnSilentLinear} onClick={this.generateFilterSwitches}>
                                        Silent Linear</Radio>
                                    <Radio value="silentclicky" id={BtnSilentTactile} onClick={this.generateFilterSwitches}>
                                        Silent Tactile</Radio>
                                </Radio.Group>
                            </div>
                        </div>
                        <Spacer x="2" />
                        <div>
                            <div>
                                <Text b h4>Pin Type</Text>
                            </div>
                            <Spacer y="1" />
                            {/**
                         * Container for the 'config' radio group
                         */}
                            <div>
                                <Radio.Group row>
                                    <Radio value="5pin" id={Btn5Pin} onClick={this.generateFilterSwitches}>
                                        5pin</Radio>
                                    <Radio value="3pin" id={Btn3Pin} onClick={this.generateFilterSwitches}>
                                        3pin</Radio>
                                </Radio.Group>
                            </div>
                        </div>
                        <Spacer x="2" />
                        <Button auto flat rounded={false} color="primary" onClick={this.componentDidMount} id='Filter.All'>
                            Show All
                        </Button>
                    </Collapse>
                </div>
                <Spacer y="3" />
                <div className="grid-container">
                    <Grid.Container gap={1} justify="center">
                        {data.map(book => (
                            <Cards {...book.fields} key={book.fields.id} />
                        ))}
                    </Grid.Container>
                </div>
            </div>
        )
    }
}

export default Switches