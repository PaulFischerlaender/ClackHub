import React from 'react'
import { Modal, Button, Spacer, Card, Row, Text, Col, Container, Grid } from "@nextui-org/react";
import configJSON from './config.json'

function Switches({ title, lastupdate, creator, coverImage, type, config, manu, price, status, keygem, candykeys, splitkb,
	eloquentclicks, mykeyboard, novelkeys, minokeys, zeal, drop, tkc, cannonkeys, fancycustoms, rheset, latamkeys, kprepublic,
	kbdfans, monstargear, ilumkb, dailyclack, switchkeys, ctrlshiftesc }) {
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);
	const closeHandler = () => {
		setVisible(false);
	};
	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}
	const onClickUrl = (url) => {
		return () => openInNewTab(url)
	}

	const getManu = [keygem, candykeys, splitkb,
		eloquentclicks, mykeyboard, novelkeys, minokeys, zeal, drop, tkc, cannonkeys, fancycustoms, rheset, latamkeys, kprepublic,
		kbdfans, monstargear, ilumkb, dailyclack, switchkeys, ctrlshiftesc]

	var filtered = getManu.filter(function (fed) {
		return fed != null;
	});

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
						backgroundColor: configJSON.DARK_COLOR_SIDE,
						minWidth: "50%",
						maxWidth: "500px",
						minHeight: "50%"
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
						<img src={coverImage} alt="" width="100%" height="100%" />
						<Container style={{
							padding: 20
						}}>
							<Row justify="space-evenly">
								<Button auto flat color="primary" textColor="white">
									<Text h5 transform="capitalize">
										{price}
									</Text>
								</Button>
								<Button auto flat color="primary" textColor="white">
									<Text h5 transform="capitalize">
										{config}
									</Text>
								</Button>
								<Button auto flat color="primary" textColor="white">
									<Text h5 transform="capitalize">
										{type}
									</Text>
								</Button>
							</Row>
							<Spacer x={1} />
							<Row justify="space-between">
								<Button auto flat color="primary" textColor="white">
									<Text h5 transform="capitalize">
										{manu}
									</Text>
								</Button>
								<Text color={configJSON.LIGHT_LINK_COLOR} size={12}>Last updated on<Text color="primary">{lastupdate}</Text></Text>
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
			<Grid xs={6}>
				<Card width="14vw" color={configJSON.DARK_COLOR_SIDE} cover clickable onClick={handler} style={{
					minWidth: "235px"
				}}>
					<Card.Header style={{ position: 'absolute', zIndex: 1, top: 5 }}>
						<Col>
							<CheckStatus />
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
							<Text h3 color={configJSON.LIGHT_LINK_COLOR}>
								{title}
							</Text>
						</Row>
					</Card.Footer>
				</Card>
			</Grid>
		</div>
	)

	//Converts the filtered results in an Array and returns a button with its value for each
	function RenderFiltered() {
		console.log(filtered)
		const data = filtered
		return (
			data.map(x => {
				<RenderFilteredButtons {...x.fields} key={x.fields} />
			})
		)

		function RenderFilteredButtons() {
			console.log("FILTERED")
			return (
				<Button auto flat color="primary" textColor="white" onClick={onClickUrl(data)}>
					<Text h5 transform="capitalize">
						{data}
					</Text>
				</Button>
			)
		}
	}

	//Renders all checked Vendors
	function RenderLinks() {
		return (
			<Modal.Footer style={{
				backgroundColor: configJSON.DARK_COLOR_SIDE
			}}>
				<Container style={{
					padding: 20
				}}>
					<Row justify="space-between">
						<RenderFiltered />
					</Row>
				</Container>
			</Modal.Footer>
		)
	}

	//Checks if status is 'Released' or 'Groupbuy' and changes tag color
	function CheckStatus() {
		if (status === "Released") {
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
		if (status === "Groupbuy") {
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