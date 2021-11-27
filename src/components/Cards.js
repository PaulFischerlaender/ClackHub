import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Modal, Button, Spacer, Card, Row, Text, Col, Link, Container } from "@nextui-org/react";
import configJSON from './config.json'

function Switches({ title, lastupdate, creator, coverImage, type, config, manu, price, status, keygem, candykeys, novelkeys }) {
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
		<div>
			<div>
				<Modal
					noPadding={true}
					open={visible}
					onClose={closeHandler}
					blur
					style={{
						backgroundColor: configJSON.DARK_COLOR_BACKGROUND
					}}
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
			{/**
                * @style
                * Defines the layout of the grid
                */}
			<Grid style={{
				marginBottom: 15,
				marginRight: 15,
				padding: 0
			}}>
				<Card width="14vw" color={configJSON.DARK_COLOR_SIDE} cover clickable onClick={handler}>
					<Card.Header style={{ position: 'absolute', zIndex: 1, top: 5 }}>
						<Col>
							<CheckStatus />
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

	//Checks if there are entries in the link sections and returns buttons
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
			<Modal.Footer blur style={{
				backgroundColor: configJSON.DARK_COLOR_SIDE
			}}>
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