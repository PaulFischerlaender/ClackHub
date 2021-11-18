import React from 'react'
import Switches from './components/Cards'
import {Button, Link, Checkbox, Spacer, Switch} from '@nextui-org/react';
import Grid from '@material-ui/core/Grid'


const URL_SWITCHES = 'https://api.airtable.com/v0/appZDJBRdkG0hd1FU/switches';
const URL_KEYCAPS = 'https://api.airtable.com/v0/appZDJBRdkG0hd1FU/keycaps';
const key = 'keyrEGBPInadSIyJC';
const version = 'Version: 0.1.2';

const askForKey = '?api_key=';
const filterbyFormula = '?filterByFormula='
const askForKeyWhenFilter = '&api_key=';

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
		document.body.style.backgroundColor = "#000"
		fetch(URL_SWITCHES + askForKey + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
	}

	//Generates Switch filter link by clicked ID with used constant
	generateFilterSwitches(e) {
		if(e.target.id === BtnClicky) {
			fetch(URL_SWITCHES + filterbyFormula + filterClickyString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id === BtnLinear) {
			fetch(URL_SWITCHES + filterbyFormula + filterLinearString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id === BtnTactile) {
			fetch(URL_SWITCHES + filterbyFormula + filterTactileString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id === Btn3Pin) {
			fetch(URL_SWITCHES + filterbyFormula + filter3PinString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id === Btn5Pin) {
			fetch(URL_SWITCHES + filterbyFormula + filter5pinString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id === BtnJWK) {
			fetch(URL_SWITCHES + filterbyFormula + filterJWKString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id === BtnCherry) {
			fetch(URL_SWITCHES + filterbyFormula + filterCherryString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id === BtnGateron) {
			fetch(URL_SWITCHES + filterbyFormula + filterGateronString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id === BtnEverglide) {
			fetch(URL_SWITCHES + filterbyFormula + filterEverglideString + askForKeyWhenFilter + key)
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
		fetch(URL_KEYCAPS + askForKey + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ booksData: res.records })
			})
			.catch(error => console.log(error))
	}
	
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
          						<Button flat color="primary" class="button-version">{version}</Button>
         						<Link href="#" class="nav-imprint"><h5>Imprint</h5></Link>
       						</div>
      					</div>
      					<div class="splitter"></div>
      					<div class="content">
        					<div class="header">
          						<div class="filter">
            						<Button rounded={false} flat color="primary" class="button-contact">Contact</Button>
            						<Button rounded={false} flat color="#6E7C90" class="button-submit">Submit</Button>
          						</div>
        					</div>
						<div id="modalOverlay">
						<div id="root">
							<div class="filter-control">
								<Checkbox.Group color="warning" row>
									<Checkbox color="primary" id={BtnClicky} onClick={this.generateFilterSwitches}> Clicky</Checkbox>
									<Checkbox  id={BtnTactile} onClick={this.generateFilterSwitches}> Tactile</Checkbox>
									<Checkbox  id={BtnLinear} onClick={this.generateFilterSwitches}> Linear</Checkbox>
  								</Checkbox.Group>
								<Spacer x="5"/>
								<Checkbox.Group color="warning" row>
									<Checkbox name="3pin" id={Btn3Pin} onClick={this.generateFilterSwitches}> 3-pin</Checkbox>
									<Checkbox name="5pin" id={Btn5Pin} onClick={this.generateFilterSwitches}> 5-pin</Checkbox>
  								</Checkbox.Group>
								<Spacer x="5"/>
								<Checkbox.Group color="warning" row>
									<Checkbox name="JWK" id={BtnJWK} onClick={this.generateFilterSwitches}> JWK</Checkbox>
									<Checkbox name="Cherry" id={BtnCherry} onClick={this.generateFilterSwitches}> Cherry</Checkbox>
									<Checkbox name="Gateron" id={BtnGateron} onClick={this.generateFilterSwitches}> Gateron</Checkbox>
									<Checkbox name="Everglide" id={BtnEverglide} onClick={this.generateFilterSwitches}> Everglide</Checkbox>
  								</Checkbox.Group>
								<Spacer x="5"/>
								<Button flat color="primary" onClick={this.componentDidMount} id='Filter.All'>
									Show All
								</Button>
								<Spacer x="5"/>
							</div>
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