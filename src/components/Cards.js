import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Modal, Button, Spacer, Card, Row, Text} from "@nextui-org/react";
import Avail from './Avail'

const booksData = []

const useStyles = makeStyles({
	card: {
		maxWidth: 280,
		minWidth: 280,
		minHeight: 140,
		maxHeight: 275,
	},
	cardcontent: {
		paddingLeft: 0,
		paddingRight: 0,
		paddingTop: 0,
		paddingBottom: 0
	},
	media: {
		height: 80
	},
	modalmedia: {
		height: 150
	},
	typo: {
		height: 20

	},
	grid: {
		marginBottom: 20,
		marginRight: 20,
		padding: 0
	}
})

function Switches({ title, coverImage, type, config, manu, price, status }) {
	const classes = useStyles()
	const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log('closed');
    };
	/*
	*
	* Init html for cards
	*
	*/
	return (
		<div className={classes.root}>
			<div>
   				<Modal
				   	style={{backgroundColor: "#111111"}}
        			
        			blur
        			aria-labelledby="modal-title"
        			open={visible}
        			onClose={closeHandler}
					width="30vw"
					backgroundColor='#111'
   				>
        			<Modal.Header>
            			<Text id="modal-title" size={24}>
            				<Text b size={24} color="#fff">
                				{title}
            				</Text>
            			</Text>
        			</Modal.Header>
       				<Modal.Body>
					   <CardMedia className={classes.modalmedia} image={coverImage}/>
					   <Spacer y={2}/>
            			<Row justify="space-between">
							<Card color="primary" textColor="white">
                				<Text h5 transform="capitalize">
                					{price}
                				</Text>
            				</Card>
							<Spacer y={2}/>
							<Card color="primary" textColor="white">
                				<Text h5 transform="capitalize">
                					{config}
                				</Text>
            				</Card>
							<Spacer y={2}/>
							<Card color="primary" textColor="white">
                				<Text h5 transform="capitalize">
                					{type}
                				</Text>
            				</Card>
            			</Row>
						<Row justify="space-between">
							<Card color="primary" textColor="white">
                				<Text h5 transform="capitalize">
                					{manu}
                				</Text>
            				</Card>
							<Spacer y={2}/>
								<Card color="primary" textColor="white">
                					<Text h5 transform="capitalize">
                						{status}
                					</Text>
            					</Card>
						</Row>
        			</Modal.Body>
					<Spacer y={2}/>
					<div class="splittermodal"></div>
					<Spacer y={1}/>
					<Row justify="space-between">
					<Grid container direction='row' spacing={0}>
						{booksData.map(book => (
							<Avail {...book.fields} key={book.fields.id} />
						))}
					</Grid>
					</Row>
        			<Modal.Footer>
            			<Button auto flat color="error" onClick={closeHandler}>
            				Close
            			</Button>
        			</Modal.Footer>
    			</Modal>
			</div>
			<Grid item xs={4} className={classes.grid}>
				<Card className={classes.card} style={{backgroundColor: "#111111"}} clickable height="275" width="100" onClick={handler} shadow={false}>
					<CardContent className={classes.cardcontent}>
						<Typography gutterBottom variant='h5' component='h2' style={{color: "#fff"}}>
							{title}
						</Typography>
							<CardMedia className={classes.media} image={coverImage}/>
						</CardContent>
				</Card>
			</Grid>
		</div>
	)
}

export default Switches