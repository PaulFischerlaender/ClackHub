import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles({
	gutterTop: {
		marginTop: 20
	},
	card: {
		maxWidth: 225,
		minWidth: 225,
		minHeight: 250,
		maxHeight: 250,
		marginBottom: 20,
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20
	},
	media: {
		height: 80
	},
	typo: {
		height: 20

	}
})

function Switches({ title, coverImage, type, config, manu, price, status }) {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Grid item xs={10}>
				<Card className={classes.card} style={{backgroundColor: "#F8FAFD"}} elevation={0}>
					<CardActionArea>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								{title}
							</Typography>
							<CardMedia className={classes.media} image={coverImage} title='React' />
						</CardContent>
					</CardActionArea>
					<CardContent>
						<Typography className={classes.typo}paragraph variant='body2'>
							{type} {config} {manu} {price} {status}
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</div>
	)
}

export default Switches