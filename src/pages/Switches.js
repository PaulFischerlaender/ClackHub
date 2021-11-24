import React, { Component } from "react";
import { Button, Checkbox, Spacer, Text } from '@nextui-org/react';
import config from '../components/config.json'
import Grid from '@material-ui/core/Grid'
import Cards from '../components/Cards'

const BtnClicky = 'filter.Clicky';
const BtnLinear = 'filter.linear';
const BtnTactile = 'filter.tactile';
const Btn3Pin = 'filter.3pin';
const Btn5Pin = 'filter.5pin';
const BtnJWK = 'filter.Jwk';
const BtnCherry = 'filter.Cherry';
const BtnGateron = 'filter.Gateron';
const BtnEverglide = 'filter.Everglide';

const filterClickyString = '%7Btype%7D%3D%22Clicky%22'
const filterTactileString = '%7Btype%7D%3D%22Tactile%22';
const filterLinearString = '%7Btype%7D%3D%22Linear%22';
const filter3PinString = '%7Bconfig%7D%3D%223-pin%22';
const filter5pinString = '%7Bconfig%7D%3D%225-pin%22';
const filterJWKString = '%7Bmanu%7D%3D%22JWK%22';
const filterCherryString = '%7Bmanu%7D%3D%22Cherry%22';
const filterGateronString = '%7Bmanu%7D%3D%22Gateron%22';
const filterEverglideString = '%7Bmanu%7D%3D%22Everglide%22';

const key = process.env.REACT_APP_API_KEY;


class Switches extends Component {

    //Defines 'data' as an array of 'state'
    state = {
        data: []
    }

    //Mounts the component to access it from HTML
    componentDidMount = this.componentDidMount.bind(this);
    generateFilterSwitches = this.generateFilterSwitches.bind(this);

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

    //Render the grid with all cards, fed by 'data'
    render() {
        const { data } = this.state
        return (
            <div>
                <div class="filter-control">
                    <div>
                        <div>
                            <Text b h4>Switch Types</Text>
                        </div>
                        <Spacer y="1" />
                        <div>
                            <Checkbox.Group color="warning" row>
                                <Checkbox color="primary" id={BtnClicky} onClick={this.generateFilterSwitches}> Clicky</Checkbox>
                                <Checkbox id={BtnTactile} onClick={this.generateFilterSwitches}> Tactile</Checkbox>
                                <Checkbox id={BtnLinear} onClick={this.generateFilterSwitches}> Linear</Checkbox>
                            </Checkbox.Group>
                        </div>
                    </div>
                    <Spacer x="5" />
                    <div>
                        <div>
                            <Text b h4>Pin Type</Text>
                        </div>
                        <Spacer y="1" />
                        <div>
                            <Checkbox.Group color="warning" row>
                                <Checkbox name="3pin" id={Btn3Pin} onClick={this.generateFilterSwitches}> 3pin</Checkbox>
                                <Checkbox name="5pin" id={Btn5Pin} onClick={this.generateFilterSwitches}> 5pin</Checkbox>
                            </Checkbox.Group>
                        </div>
                    </div>
                    <Spacer x="5" />
                    <div>
                        <div>
                            <Text b h4>Manufacturer</Text>
                        </div>
                        <Spacer y="1" />
                        <div>
                            <Checkbox.Group color="warning" row>
                                <Checkbox name="JWK" id={BtnJWK} onClick={this.generateFilterSwitches}> JWK</Checkbox>
                                <Checkbox name="Cherry" id={BtnCherry} onClick={this.generateFilterSwitches}> Cherry</Checkbox>
                                <Checkbox name="Gateron" id={BtnGateron} onClick={this.generateFilterSwitches}> Gateron</Checkbox>
                                <Checkbox name="Everglide" id={BtnEverglide} onClick={this.generateFilterSwitches}> Everglide</Checkbox>
                            </Checkbox.Group>
                        </div>
                    </div>
                    <Spacer x="5" />
                    <Button auto flat rounded={false} color="primary" onClick={this.componentDidMount} id='Filter.All'>
                        Show All
                    </Button>
                    <Spacer x="5" />
                </div>
                <Spacer y="3" />
                <div class="grid-container">
                    <Grid container direction='row' spacing={0}>
                        {data.map(book => (
                            <Cards {...book.fields} key={book.fields.id} />
                        ))}
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Switches