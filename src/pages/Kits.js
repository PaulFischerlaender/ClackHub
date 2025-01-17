import React, { Component } from "react";
import { Button, Spacer, Text, Radio, Collapse, Grid } from '@nextui-org/react';
import config from '../components/config.json'
//import Grid from '@material-ui/core/Grid'
import Cards from '../components/CardsKits'

const filter40String = 'SEARCH("40", size)'
const filter65String = 'SEARCH("65", size)';
const filter75tring = 'SEARCH("75", size)';
const filter100String = 'SEARCH("100", size)';
const filterSolderString = 'SEARCH("Solder", pcbtype)';
const filterHotswapString = 'SEARCH("Hotswap", pcbtype)';
const filterSolderHotswapString = 'SEARCH("Solder/Hotswap", pcbtype)';
const key = process.env.REACT_APP_API_KEY;

class Kits extends Component {

    /**
     * Renders the Keycap site with all of its available cards, fed by airbase,
     * generates Modals and its parent card dynamically.
     */


    //Defines 'data' as an array of 'state'
    state = {
        data: [],
        sizeOption: "",
        pcbOption: ""
    }

    //Mounts the component to access it from HTML
    componentDidMount = this.componentDidMount.bind(this);
    generateFilterLink = this.generateFilterLink.bind(this);
    generateLinkSize = this.generateLinkSize.bind(this);
    generateLinkPCB = this.generateLinkPCB.bind(this)

    //Fetch results from database and store them in 'data'
    componentDidMount() {
        fetch(config.URL_KITS + config.ASK_FOR_KEY + key)
            .then(res => res.json())
            .then(res => {
                //Sets fetched 'res' to 'data'
                this.setState({ data: res.records })
            })
            .catch(error => console.log(error))
    }

    generateLinkSize(e) {
        var value = e.target.value
        this.setState({ sizeOption: value }, this.generateFilterLink);
    }

    generateLinkPCB(e) {
        var value = e.target.value
        this.setState({ pcbOption: value }, this.generateFilterLink);
    }

    generateFilterLink() {
        //Only sizeOption checked
        if (this.state.sizeOption !== "" && this.state.pcbOption === "") {
            fetch(config.URL_KITS + config.FILTER_BY_FORMULA + this.state.sizeOption + config.ASK_FOR_KEY_WHEN_FILTER + key)
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res.records })
                })
                .catch(error => console.log(error))
        } else
            //Only pcbOption checked
            if (this.state.sizeOption === "" && this.state.pcbOption !== "") {
                fetch(config.URL_KITS + config.FILTER_BY_FORMULA + this.state.pcbOption + config.ASK_FOR_KEY_WHEN_FILTER + key)
                    .then(res => res.json())
                    .then(res => {
                        this.setState({ data: res.records })
                    })
                    .catch(error => console.log(error))
            } else
                //Both checked
                if (this.state.sizeOption !== "" && this.state.pcbOption !== "") {
                    fetch(config.URL_KITS + config.FILTER_BY_FORMULA + "AND(" + this.state.sizeOption + "," + this.state.pcbOption + ")" + config.ASK_FOR_KEY_WHEN_FILTER + key)
                        .then(res => res.json())
                        .then(res => {
                            this.setState({ data: res.records })
                        })
                        .catch(error => console.log(error))
                } else
                    //Nothing checked
                    if (this.state.sizeOption === "" && this.state.pcbOption === "") { console.log("NONE") }
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
                        title={<Text h3 color={config.LINK_COLOR}>Filter</Text>}
                        textColor="primary"
                        subtitle={<Text h5 color={config.TEXT_COLOR}>Look for specific combinations of keyboard kits</Text>}
                        justify="center"
                        style={{
                            width: "100%",
                            backgroundColor: config.SUB_COLOR
                        }}
                    >
                        <div className="filterLayout" style={{
                            display: "flex"
                        }}>
                            <div>
                                <div>
                                    <Text h4 color={config.TITLE_COLOR}>Size layout</Text>
                                </div>
                                <Spacer y="1" />
                                {/**
                             * Container for switchtype radios
                             */}
                                <div style={{
                                    marginBottom: "15px"
                                }}>
                                    <Radio.Group row value="" id="switchtype" className="switchtype">
                                        <div onChange={this.generateLinkSize}>
                                            <Radio value={filter40String}>
                                            <Text h4 color={config.TEXT_COLOR}>40%</Text></Radio>
                                            <Radio value={filter65String}>
                                            <Text h4 color={config.TEXT_COLOR}>65%</Text></Radio>
                                            <Radio value={filter75tring}>
                                            <Text h4 color={config.TEXT_COLOR}>75%</Text></Radio>
                                            <Radio value={filter100String}>
                                            <Text h4 color={config.TEXT_COLOR}>100%</Text></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                            <Spacer x="2" />
                            <div>
                                <div>
                                    <Text h4 color={config.TITLE_COLOR}>PCB type</Text>
                                </div>
                                <Spacer y="1" />
                                {/**
                             * Container for switchconfig radios
                             */}
                                <div>
                                    <Radio.Group row >
                                        <div onChange={this.generateLinkPCB}>
                                            <Radio value={filterSolderString}>
                                            <Text h4 color={config.TEXT_COLOR}>Solder</Text></Radio>
                                            <Radio value={filterHotswapString}>
                                            <Text h4 color={config.TEXT_COLOR}>Hotswap</Text></Radio>
                                            <Radio value={filterSolderHotswapString}>
                                            <Text h4 color={config.TEXT_COLOR}>Solder/Hotswap</Text></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                        <Spacer x="2" />
                        <Button auto flat rounded={false} color={config.LINK_COLOR} onClick={this.componentDidMount} id='Filter.All'>
                            Show All
                        </Button>
                    </Collapse>
                </div>
                <Spacer y="3" />
                <div className="grid-container" style={{
                    minHeight: "70vh"
                }}>
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

export default Kits