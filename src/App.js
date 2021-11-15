import React from 'react'
import Switches from './components/Cards'
import Grid from '@material-ui/core/Grid'
import {Button} from '@material-ui/core';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const URL_SWITCHES = 'https://api.airtable.com/v0/appZDJBRdkG0hd1FU/switches';
const URL_KEYCAPS = 'https://api.airtable.com/v0/appZDJBRdkG0hd1FU/keycaps';
const key = 'keyrEGBPInadSIyJC';

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
		booksData: []
	}

	//Bind all filters to App
	componentDidMount = this.componentDidMount.bind(this);
	startKeycaps = this.startKeycaps.bind(this);
	generateFilterSwitches = this.generateFilterSwitches.bind(this);

	//Loads the switches landing-page
	componentDidMount() {
		fetch(URL_SWITCHES + askForKey + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ booksData: res.records })
			})
			.catch(error => console.log(error))
	}

	//Generates Switch filter link by clicked ID with used constant
	generateFilterSwitches(e) {
		if(e.target.id == BtnClicky) {
			fetch(URL_SWITCHES + filterbyFormula + filterClickyString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ booksData: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id == BtnLinear) {
			fetch(URL_SWITCHES + filterbyFormula + filterLinearString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ booksData: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id == BtnTactile) {
			fetch(URL_SWITCHES + filterbyFormula + filterTactileString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ booksData: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id == Btn3Pin) {
			fetch(URL_SWITCHES + filterbyFormula + filter3PinString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ booksData: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id == Btn5Pin) {
			fetch(URL_SWITCHES + filterbyFormula + filter5pinString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ booksData: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id == BtnJWK) {
			fetch(URL_SWITCHES + filterbyFormula + filterJWKString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ booksData: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id == BtnCherry) {
			fetch(URL_SWITCHES + filterbyFormula + filterCherryString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ booksData: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id == BtnGateron) {
			fetch(URL_SWITCHES + filterbyFormula + filterGateronString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ booksData: res.records })
			})
			.catch(error => console.log(error))
		}
		if(e.target.id == BtnEverglide) {
			fetch(URL_SWITCHES + filterbyFormula + filterEverglideString + askForKeyWhenFilter + key)
			.then(res => res.json())
			.then(res => {
				this.setState({ booksData: res.records })
			})
			.catch(error => console.log(error))
		}
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
		const {booksData} = this.state
			return (
				<div>
					<div class="hero">
      					<div class="nav">
        					<div class="logo"></div>
        					<div class="nav-content">
         						<a id="nav.overview" class="nav-overview" href="#"><h4>Overview</h4></a>
          						<a id="nav.keyboard" href="#"><h4>Keyboard Kits</h4></a>
          						<a onClick={this.componentDidMount}><h4>Switches</h4></a>
          						<a onClick={this.startKeycaps}><h4>Keycaps</h4></a>
          						<a id="nav.vendors" href="#"><h4>Vendors</h4></a>
          						<a id="nav.typingtest" href="#"><h4>Typing Test</h4></a>
          						<a id="nav.reddit" href="#"><h4>r/MechanicalKeyboards</h4></a>
          						<button class="button-version">Version: 0.1.1</button>
         						<a href="#" class="nav-imprint"><h5>Imprint</h5></a>
       						</div>
      					</div>
      					<div class="splitter"></div>
      					<div class="content">
        					<div class="header">
          						<div class="filter">
            						<button class="button-contact">Contact</button>
            						<button class="button-submit">Submit</button>
          						</div>
        					</div>
        				<div id="root">
							<div>
							<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        						<FormLabel component="legend">Switch Type</FormLabel>
        							<FormGroup>
         								<FormControlLabel
           									control={
              									<Checkbox name="clicky" id={BtnClicky} onClick={this.generateFilterSwitches} />
            								}
            								label="Clicky"
         								 />
          								<FormControlLabel
            								control={
              								<Checkbox name="tactile" id={BtnTactile} onClick={this.generateFilterSwitches} />
            								}
            								label="Tactile"
          								/>
          								<FormControlLabel
            								control={
              									<Checkbox name="linear" id={BtnLinear} onClick={this.generateFilterSwitches}/>
            								}					
            								label="Linear"
         									/>
        							</FormGroup>
      							</FormControl>
							<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        						<FormLabel component="legend">Configuration</FormLabel>
        							<FormGroup>
          								<FormControlLabel
            								control={
              								<Checkbox name="3pin" id={Btn3Pin} onClick={this.generateFilterSwitches} />
            								}
            								label="3-Pin"
          								/>
          								<FormControlLabel
            								control={
              									<Checkbox name="5pin" id={Btn5Pin} onClick={this.generateFilterSwitches}/>
            								}					
            								label="5-pin"
         									/>
        							</FormGroup>
      						</FormControl>
							<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        						<FormLabel component="legend">Manufacturer</FormLabel>
        							<FormGroup>
          								<FormControlLabel
            								control={
              								<Checkbox name="jwk" id={BtnJWK} onClick={this.generateFilterSwitches} />
            								}
            								label="JWK"
          								/>
          								<FormControlLabel
            								control={
              									<Checkbox name="cherry" id={BtnCherry} onClick={this.generateFilterSwitches}/>
            								}					
            								label="Cherry"
         									/>
										<FormControlLabel
            								control={
              									<Checkbox name="gateron" id={BtnGateron} onClick={this.generateFilterSwitches}/>
            								}					
            								label="Gateron"
         									/>
										<FormControlLabel
            								control={
              									<Checkbox name="everglide" id={BtnEverglide} onClick={this.generateFilterSwitches}/>
            								}					
            								label="Everglide"
         									/>
        							</FormGroup>
      						</FormControl>
								<Button onClick={this.componentDidMount} id='Filter.All'>
									Show All
								</Button>
							</div>
							<Grid container direction='row' spacing={0}>
								{booksData.map(book => (
								<Switches {...book.fields} key={book.fields.id} />
								))}
							</Grid>
						</div>
      					</div>
					</div>
				</div>
				
			)
		}

}

export default App