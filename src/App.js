import React from 'react'
import Switches from './components/Cards'
import {Button, Link, Checkbox, Spacer, Tooltip, Text} from '@nextui-org/react';
import Grid from '@material-ui/core/Grid'
import config from './components/config.json'



const key = process.env.REACT_APP_API_KEY;

//Swtich filter constants
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

/**
 * 
 * 
 *  @author Paul Fischerländer
 *  Created in Late 2021
 * 
 * 
 */

class App extends React.Component {
	
	state = {
		data: []
	}

	//Bind all filters to App
	componentDidMount = this.componentDidMount.bind(this);
	startKeycaps = this.startKeycaps.bind(this);
	generateFilterSwitches = this.generateFilterSwitches.bind(this);
	createModal = this.createModal.bind(this);

	//Loads the switches landing-page
	componentDidMount() {
		console.log(process.env)
		document.body.style.backgroundColor = "#000"
		fetch(config.URL_SWITCHES + config.ASK_FOR_KEY + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
	}

	//Generates Switch filter link by clicked ID with used constant
	generateFilterSwitches(e) {
		if(e.target.id === BtnClicky) {
			fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filterClickyString + config.ASK_FOR_KEY_WHEN_FILTER + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id === BtnLinear) {
			fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filterLinearString + config.ASK_FOR_KEY_WHEN_FILTER + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id === BtnTactile) {
			fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filterTactileString + config.ASK_FOR_KEY_WHEN_FILTER + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id === Btn3Pin) {
			fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filter3PinString + config.ASK_FOR_KEY_WHEN_FILTER + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id === Btn5Pin) {
			fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filter5pinString + config.ASK_FOR_KEY_WHEN_FILTER + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id === BtnJWK) {
			fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filterJWKString + config.ASK_FOR_KEY_WHEN_FILTER + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id === BtnCherry) {
			fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filterCherryString + config.ASK_FOR_KEY_WHEN_FILTER + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id === BtnGateron) {
			fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filterGateronString + config.ASK_FOR_KEY_WHEN_FILTER + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id === BtnEverglide) {
			fetch(config.URL_SWITCHES + config.FILTER_BY_FORMULA + filterEverglideString + config.ASK_FOR_KEY_WHEN_FILTER + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
	}

	//Creates modal overlay when a card is clicked
	createModal() {
		
	}

	//Loads keycaps landing-page
	startKeycaps() {
		fetch(config.URL_KEYCAPS + config.ASK_FOR_KEY + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ booksData: res.records })
			})
			.catch(error => console.log(error))
	}

	/*
	*
	* Init html for page
	*
	*/
	render() {
		const {data} = this.state
			return (
				<div>
					<div class="hero">
      					<div class="nav">
        					<div class="logo"></div>
        					<div class="nav-content">
         						<Link id="nav.overview" class="nav-overview" href="#"><h4>Overview</h4></Link>
          						<Link id="nav.keyboard" href="#"><h4>Keyboard Kits</h4></Link>
          						<Link onClick={this.componentDidMount}><h4>Switches</h4></Link>
          						<Link onClick={this.startKeycaps}><h4>Keycaps</h4></Link>
          						<Link id="nav.vendors" href="#"><h4>Vendors</h4></Link>
          						<Link id="nav.typingtest" href="#"><h4>Typing Test</h4></Link>
          						<Link id="nav.reddit" href="#"><h4>r/MechanicalKeyboards</h4></Link>
								  <Tooltip content={'Created with ❤️ by P4ul'} color="primary">
								  	<Button auto rounded={false} flat color="primary" class="button-version">{config.VERSION}</Button>
								  </Tooltip>
         						<Link href="#" class="nav-imprint"><h5>Imprint</h5></Link>
       						</div>
      					</div>
      					<div class="content">
        					<div class="header">
          						<div class="filter">
            						<Button auto rounded={false} flat color="primary" class="button-contact">Contact</Button>
            						<Button auto rounded={false} flat color="#6E7C90" class="button-submit">Submit</Button>
          						</div>
        					</div>
						<div id="modalOverlay">
						<div id="root">
							<div class="filter-control">
								<div>
									<div>
										<Text b h4>Switch Types</Text>
									</div>
									<Spacer y="1"/>
									<div>
										<Checkbox.Group color="warning" row>
											<Checkbox color="primary" id={BtnClicky} onClick={this.generateFilterSwitches}> Clicky</Checkbox>
											<Checkbox  id={BtnTactile} onClick={this.generateFilterSwitches}> Tactile</Checkbox>
											<Checkbox  id={BtnLinear} onClick={this.generateFilterSwitches}> Linear</Checkbox>
  										</Checkbox.Group>
									</div>
								</div>
								<Spacer x="5"/>
								<div>
									<div>
										<Text b h4>Pin Type</Text>
									</div>
									<Spacer y="1"/>
									<div>
										<Checkbox.Group color="warning" row>
											<Checkbox name="3pin" id={Btn3Pin} onClick={this.generateFilterSwitches}> 3pin</Checkbox>
											<Checkbox name="5pin" id={Btn5Pin} onClick={this.generateFilterSwitches}> 5pin</Checkbox>
  										</Checkbox.Group>
									</div>
								</div>
								<Spacer x="5"/>
								<div>
									<div>
										<Text b h4>Manufacturer</Text>
									</div>
									<Spacer y="1"/>
									<div>
										<Checkbox.Group color="warning" row>
											<Checkbox name="JWK" id={BtnJWK} onClick={this.generateFilterSwitches}> JWK</Checkbox>
											<Checkbox name="Cherry" id={BtnCherry} onClick={this.generateFilterSwitches}> Cherry</Checkbox>
											<Checkbox name="Gateron" id={BtnGateron} onClick={this.generateFilterSwitches}> Gateron</Checkbox>
											<Checkbox name="Everglide" id={BtnEverglide} onClick={this.generateFilterSwitches}> Everglide</Checkbox>
  										</Checkbox.Group>
									</div>
								</div>
								<Spacer x="5"/>
								<Button auto flat rounded={false} color="primary" onClick={this.componentDidMount} id='Filter.All'>
									Show All
								</Button>
								<Spacer x="5"/>
							</div>
							<Spacer y="3"/>
							<div class="grid-container">
								<Grid container direction='row' spacing={0}>
									{data.map(book => (
									<Switches {...book.fields} key={book.fields.id} />
									))}
								</Grid>
							</div>
						</div>
						</div>
      					</div>
					</div>
				</div>
				
			)
		}

}

export default App