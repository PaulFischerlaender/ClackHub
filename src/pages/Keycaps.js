import React, { Component } from "react";
import { Button, Spacer, Text, Radio, Collapse, Grid } from '@nextui-org/react';
import config from '../components/config.json'
//import Grid from '@material-ui/core/Grid'
import Cards from '../components/CardsKeycaps'

const filterKAMString = 'SEARCH("KAM", type)'
const filterXDAString = 'SEARCH("DSA", type)';
const filterSAString = 'SEARCH("SA", type)';
const filterCherryString = 'SEARCH("Cherry", type)';
const filterOEMString = 'SEARCH("OEM", type)';
const filterISOString = 'SEARCH("ISO", layout)';
const filterANSIString = 'SEARCH("ANSI", layout)';
const filterISOANSItring = 'SEARCH("ISO/ANSI", layout)';
const key = process.env.REACT_APP_API_KEY;

class Keycaps extends Component {

    /**
     * Renders the Keycap site with all of its available cards, fed by airbase,
     * generates Modals and its parent card dynamically.
     */


    //Defines 'data' as an array of 'state'
    state = {
        data: [],
        typeOption: "",
        layoutOption: ""
    }

    //Mounts the component to access it from HTML
    componentDidMount = this.componentDidMount.bind(this);
    generateLinkType = this.generateLinkType.bind(this);
    generateLinkLayout = this.generateLinkLayout.bind(this);
    generateFilterLink = this.generateFilterLink.bind(this)

    //Fetch results from database and store them in 'data'
    componentDidMount() {
        fetch(config.URL_KEYCAPS + config.ASK_FOR_KEY + key)
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

    generateLinkLayout(e) {
        var value = e.target.value
        this.setState({ layoutOption: value }, this.generateFilterLink);
    }

    generateFilterLink() {
        //Only typeOption checked
        if (this.state.typeOption !== "" && this.state.layoutOption === "") {
            fetch(config.URL_KEYCAPS + config.FILTER_BY_FORMULA + this.state.typeOption + config.ASK_FOR_KEY_WHEN_FILTER + key)
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res.records })
                })
                .catch(error => console.log(error))
        } else
        //Only layoutOption checked
            if (this.state.typeOption === "" && this.state.layoutOption !== "") {
                fetch(config.URL_KEYCAPS + config.FILTER_BY_FORMULA + this.state.layoutOption + config.ASK_FOR_KEY_WHEN_FILTER + key)
                    .then(res => res.json())
                    .then(res => {
                        this.setState({ data: res.records })
                    })
                    .catch(error => console.log(error))
            } else
                //Both checked
                if (this.state.typeOption !== "" && this.state.layoutOption !== "") {
                    fetch(config.URL_KEYCAPS + config.FILTER_BY_FORMULA + "AND(" + this.state.layoutOption + ","  + this.state.typeOption + ")" + config.ASK_FOR_KEY_WHEN_FILTER + key)
                        .then(res => res.json())
                        .then(res => {
                            this.setState({ data: res.records })
                        })
                        .catch(error => console.log(error))
                } else
                    //Nothing checked
                    if (this.state.typeOption === "" && this.state.layoutOption === "") { console.log("NONE") }
    }

    //Render the grid with all cards, fed by 'data'
    render() {
        const { data } = this.state
        return (
            <div style={{
                marginTop: "5vh",
                marginBottom: "5vh"
            }}>
                <div className="filter-control" style={{
                    margin: 0,
                    margin: "auto",
                    width: "95vw"
                }}>
                    <Collapse
                        shadow
                        title={<Text h3 color="#2563EB">Filter</Text>}
                        textColor="primary"
                        subtitle={<Text h5 color="#6B7280">Look for specific combinations of keycaps</Text>}
                        justify="center"
                        style={{
                            width: "100%",
                            backgroundColor: "#EFF6FF"
                        }}
                    >
                        <div className="filterLayout" style={{
                            display: "flex"
                        }}>
                            <div>
                                <div>
                                <Text h4 color="#222531">Layout</Text>
                                </div>
                                <Spacer y="1" />
                                {/**
                             * Container for switchtype radios
                             */}
                                <div style={{
                                    marginBottom: "15px"
                                }}>
                                    <Radio.Group row value="" id="switchtype" className="switchtype">
                                        <div onChange={this.generateLinkLayout}>
                                            <Radio value={filterISOString}>
                                            <Text h4 color="#6B7280">ISO</Text></Radio>
                                            <Radio value={filterANSIString}>
                                            <Text h4 color="#6B7280">ANSI</Text></Radio>
                                            <Radio value={filterISOANSItring}>
                                            <Text h4 color="#6B7280">ISO/ANSI</Text></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                            <Spacer x="2" />
                            <div>
                                <div>
                                <Text h4 color="#222531">Type</Text>
                                </div>
                                <Spacer y="1" />
                                {/**
                             * Container for switchconfig radios
                             */}
                                <div>
                                    <Radio.Group row >
                                        <div onChange={this.generateLinkType}>
                                            <Radio value={filterKAMString}>
                                            <Text h4 color="#6B7280">KAM</Text></Radio>
                                            <Radio value={filterXDAString}>
                                            <Text h4 color="#6B7280">DSA</Text></Radio>
                                            <Radio value={filterSAString}>
                                            <Text h4 color="#6B7280">SA</Text></Radio>
                                            <Radio value={filterCherryString}>
                                            <Text h4 color="#6B7280">Cherry</Text></Radio>
                                            <Radio value={filterOEMString}>
                                            <Text h4 color="#6B7280">Oem</Text></Radio>
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

export default Keycaps