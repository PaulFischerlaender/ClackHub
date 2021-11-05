import React from 'react'
import Switches from './components/Switches'
import Grid from '@material-ui/core/Grid'

class App extends React.Component {
	state = {
		booksData: []
	}
	
	componentDidMount() {
		fetch('https://api.airtable.com/v0/appZDJBRdkG0hd1FU/switches?api_key=keyrEGBPInadSIyJC')
			.then(res => res.json())
			.then(res => {
				console.log(res.records)
				this.setState({ booksData: res.records })
			})
			.catch(error => console.log(error))
	}

	/*
	*
	* Um zb. nach tactile zu filtern: https://api.airtable.com/v0/appZDJBRdkG0hd1FU/switches?filterByFormula=%7Btype%7D%3D%22Tactile%22&api_key=keyrEGBPInadSIyJC
	* Sprich der Link+'?filterbyFormula='+'%7BCATEGORY%7D%3D%22VALUE%22+'&api_key=API_KEY'
	*/

	
	render() {
		const {booksData} = this.state
		const typel = document.getElementsByName('tpye-linear');
		if(typel.checked == true) {
				
				fetch('https://api.airtable.com/v0/appZDJBRdkG0hd1FU/switches?filterByFormula=%7Btype%7D%3D%22Linear%22&api_key=keyrEGBPInadSIyJC')
					.then(res => res.json())
					.then(res => {
						console.log(res.records)
						this.setState({ booksData: res.records })
					})
					.catch(error => console.log(error))
			}	
			return (
				<Grid container direction='row' spacing={0}>
					{booksData.map(book => (
						<Switches {...book.fields} key={book.fields.id} />
					))}
				</Grid>
			)
		}

}

export default App