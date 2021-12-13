import React, { Component } from "react";
import { Button, Spacer, Text, Radio, Collapse, Grid } from '@nextui-org/react';
import config from '../components/config.json'
//import Grid from '@material-ui/core/Grid'
import Cards from '../components/CardsSwitches'

const filterClickyString = 'SEARCH("Clicky", type)'
const filterTactileString = 'SEARCH("Tactile", type)';
const filterLinearString = 'SEARCH("Linear", type)';
const filterSilentLinearString = 'SEARCH("SilentLinear", type)';
const filterSilentTactileString = 'SEARCH("SilentTactile", type)';
const filter3PinString = 'SEARCH("3-pin", config)';
const filter5pinString = 'SEARCH("5-pin", config)';
const key = process.env.REACT_APP_API_KEY;

class Switches extends Component {

    /**
     * Renders the Switch site with all of its available cards, fed by airbase,
     * generates Modals and its parent card dynamically.
     */


    //Defines 'data' as an array of 'state'
    state = {
        data: [],
        typeOption: "",
        configOption: ""
    }

    //Mounts the component to access it from HTML
    componentDidMount = this.componentDidMount.bind(this);
    generateLinkType = this.generateLinkType.bind(this);
    generateLinkConfig = this.generateLinkConfig.bind(this);
    generateFilterLink = this.generateFilterLink.bind(this)

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

    generateLinkType(e) {
        var value = e.target.value
        this.setState({ typeOption: value }, this.generateFilterLink);
    }

    generateLinkConfig(e) {
        var value = e.target.value
        this.setState({ configOption: value }, this.generateFilterLink);
    }

    generateFilterLink() {
        console.log("TYPECHECK: " + this.state.typeOption)
        if (this.state.typeOption !== "" && this.state.configOption === "") {
            fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + this.state.typeOption + config.ASK_FOR_KEY_WHEN_FILTER + key)
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res.records })
                })
                .catch(error => console.log(error))
            console.log("TYPEOPTION")
        } else if (this.state.typeOption === "" && this.state.configOption !== "") {
            fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + this.state.configOption + config.ASK_FOR_KEY_WHEN_FILTER + key)
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res.records })
                })
                .catch(error => console.log(error))
            console.log("CONFIGOPTION")
        } else if (this.state.typeOption !== "" && this.state.configOption !== "") {
            fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + "AND(" + this.state.typeOption + "," + this.state.configOption + ")" + config.ASK_FOR_KEY_WHEN_FILTER + key)
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res.records })
                })
                .catch(error => console.log(error))
            console.log("BOTHOPTION")
        } else if (this.state.typeOption === "" && this.state.configOption === "") { console.log("NONE") }
    }

    //Render the grid with all cards, fed by 'data'
    render() {
        const { data } = this.state
        return (
            <div>
                <div className="filter-control" style={{
                    margin: 0,
                    margin: "auto",
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
                        <div className="filterLayout" style={{
                            display: "flex"
                        }}>
                            <div>
                                <div>
                                    <Text h4>Switch Types</Text>
                                </div>
                                <Spacer y="1" />
                                {/**
                             * Container for switchtype radios
                             */}
                                <div style={{
                                    marginBottom: "15px"
                                }}>
                                    <Radio.Group row value="" id="switchtype" className="switchtype">
                                        <div onChange={this.generateLinkType}>
                                            <Radio value={filterLinearString}>
                                                Linear</Radio>
                                            <Radio value={filterTactileString}>
                                                Tactile</Radio>
                                            <Radio value={filterClickyString}>
                                                Clicky</Radio>
                                            <Radio value={filterSilentLinearString}>
                                                Silent Linear</Radio>
                                            <Radio value={filterSilentTactileString}>
                                                Silent Tactile</Radio>
                                        </div>
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
                             * Container for switchconfig radios
                             */}
                                <div>
                                    <Radio.Group row >
                                        <div onChange={this.generateLinkConfig}>
                                            <Radio value={filter5pinString}>
                                                5pin</Radio>
                                            <Radio value={filter3PinString}>
                                                3pin</Radio>
                                        </div>
                                    </Radio.Group>
                                </div>
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