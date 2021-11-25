import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Modal, Button, Spacer, Card, Row, Text, Col, Link, Container } from "@nextui-org/react";
import configJSON from './config.json'

const useStyles = makeStyles({
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



function Switches({ title, lastupdate, creator, coverImage, type, config, manu, price, status, keygem, candykeys, novelkeys }) {
	const classes = useStyles()
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);
	const closeHandler = () => {
		setVisible(false);
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
					noPadding={true}
					open={visible}
					onClose={closeHandler}
				>
					<Modal.Header style={{ position: 'absolute', zIndex: 1, top: 20, left: 20 }}>
						<Button auto flat rounded={false} color="#000">
							<Text
								size={15}
								weight="bold"
								transform="uppercase"
								color={configJSON.LIGHT_LINK_COLOR}
							>
								{title}
							</Text>
						</Button>
					</Modal.Header>
					<Modal.Body>
						<img src={coverImage} width="100%" height="100%" />
						<Container style={{
							padding: 20
						}}>
							<Row justify="space-between">
								<Button auto flat color="primary" textColor="white">
									<Text h5 transform="capitalize">
										{price}
									</Text>
								</Button>
								<Spacer y={1} />
								<Button auto flat color="primary" textColor="white">
									<Text h5 transform="capitalize">
										{config}
									</Text>
								</Button>
								<Spacer y={3} />
								<Button auto flat color="primary" textColor="white">
									<Text h5 transform="capitalize">
										{type}
									</Text>
								</Button>
							</Row>
							<Row justify="space-between">
								<Button auto flat color="primary" textColor="white">
									<Text h5 transform="capitalize">
										{manu}
									</Text>
								</Button>
								<Spacer y={1} />
								<Button auto flat color="primary" textColor="white">
									<Text h5 transform="capitalize">
										{status}
									</Text>
								</Button>
							</Row>
						</Container>
					</Modal.Body>
					<RenderLinks />
				</Modal>
			</div>
			<Grid className={classes.grid}>
				{/**
                 * @style
                 * 'classes.card' defines looks of the card
                 */}

				<Card width="14vw" color="#f6f6f6" cover clickable onClick={handler}>
					<Card.Header style={{ position: 'absolute', zIndex: 1, top: 5 }}>
						<Col>
							<CheckStatus/>
							<Text h3 color="black">
								{title}
							</Text>
						</Col>
					</Card.Header>
					<Card.Image
						autoResize={false}
						src={coverImage}
						height={400}
						width="100%"
						alt="Card example background"
					/>
					<Card.Footer
						blur
						border
						borderColor="rgba(255, 255, 255, 0.2)"
						style={{ position: 'absolute', zIndex: 1, bottom: 0 }}>
						<Row>
							<Col>
								<Text color="#000" size={12}>Last updated on<Text color="primary">{lastupdate}</Text></Text>
							</Col>
							<Col>
								<CheckCreator />
							</Col>
						</Row>
					</Card.Footer>
				</Card>
			</Grid>
		</div>
	)

	//Checks if there is an entry in keygem and returns a Button
	function CheckKeygem(props) {
		if (keygem != null) {
			return (
				<Button auto flat color="primary" textColor="white" onClick={(e) => {
					e.preventDefault();
					window.location.href = keygem.toString();
				}}>
					<Text h5 transform="capitalize">
						Keygem
					</Text>
				</Button>
			)
		} else {
			return (
				null
			)
		}
	}

	function CheckCandykeys(props) {
		if (candykeys != null) {
			return (
				<Button auto flat color="primary" textColor="white" onClick={(e) => {
					e.preventDefault();
					window.location.href = candykeys.toString();
				}}>
					<Text h5 transform="capitalize">
						Candykeys
					</Text>
				</Button>
			)
		} else {
			return (
				null
			)
		}
	}

	function CheckNovelkeys(props) {
		if (novelkeys != null) {
			return (
				<Button auto flat color="primary" textColor="white" onClick={(e) => {
					e.preventDefault();
					window.location.href = novelkeys.toString();
				}}>
					<Text h5 transform="capitalize">
						Novelkeys
					</Text>
				</Button>
			)
		} else {
			return (
				null
			)
		}
	}

	//Renders all checked Vendors
	function RenderLinks() {
		return (
			<Modal.Footer blur>
					<Container style={{
						padding: 20
					}}>
						<Row justify="space-between">
							<CheckKeygem />
							<CheckCandykeys />
							<CheckNovelkeys />
						</Row>
					</Container>
			</Modal.Footer>
		)
	}

	//Checks if there is a creator entry
	function CheckCreator(props) {
		if (creator != null) {
			return (
				<Text color="#000" size={12}>Created by <Text color="primary">{creator}</Text></Text>
			)
		} else {
			return (
				null
			)
		}
	}

	//Checks if status is 'Released' or 'Groupbuy' and changes tag color
	function CheckStatus() {
		if (status == "Released") {
			return (
				<Button auto flat rounded={false} color="secondary">
					<Text
						size={12}
						weight="bold"
						transform="uppercase"
					>
						{status}
					</Text>
				</Button>
			)
		}
		if (status == "Groupbuy") {
			return (
				<Button auto flat rounded={false} color="primary">
					<Text
						size={12}
						weight="bold"
						transform="uppercase"
					>
						{status}
					</Text>
				</Button>
			)
		}
	}
}

export default Switches