import React from 'react'
import { Modal, Button, Spacer, Card, Row, Text, Col, Container, Grid } from "@nextui-org/react";
import configJSON from './config.json'
import { useMediaPredicate } from "react-media-hook";

function Switches({ title, lastupdate, coverImage, type, config, manu, price, status, keygem, candykeys, splitkb,
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

	const biggerThan534 = useMediaPredicate("(min-width: 534px)");

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
			{/**
			 * Shows modal with CloseButton when device is smaller than value
			 */}
			{!biggerThan534 && <div>
				<Modal
					noPadding={true}
					open={visible}
					onClose={closeHandler}
					closeButton
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
					<Grid.Container gap={1} justify="center">
						<RenderLinks listdata={filtered} />
					</Grid.Container>
				</Modal>
			</div>}
			{/**
			 * Shows modal without CloseButton when devie is bigger than value
			 */}
			<Grid fluid>
				{!biggerThan534 && <Card color={configJSON.DARK_COLOR_SIDE} cover clickable onClick={handler} style={{
					width: "90vw",
					height: "34vh"
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
				</Card>}
				{biggerThan534 && <Card width="80vw" height="45vh" color={configJSON.DARK_COLOR_SIDE} style={{
					minWidth: "235px"
				}}>
					<Card.Body>
						<div style={{
							display: "flex",
							width: "80vw",
							overflow: "hidden"
						}}>
							<div className="image" style={{
								marginLeft: "10px",
								marginTop: "10px",
								marginBottom: "10px",
								width: "200px"
							}}>
								<Card>
									<img src={coverImage} style={{
										width: "15vw",
										height: "38vh"
									}}>
									</img>
								</Card>
							</div>
							<div className="stats">
								<div className="stats-title">{title}</div>
								<div className="stats-grid"></div>
							</div>
							<div className="vendors"></div>
						</div>
					</Card.Body>
				</Card>}
			</Grid>
		</div>
	)

	//Gets list of filtered manufacturers and lists each in a grid
	function RenderLinks(props) {
		const data = props.listdata;
		const listItems = data.map((getdata) =>
			<Button auto flat color="primary" textColor="white" onClick={onClickUrl(getdata)}>
				<Text h5 transform="capitalize">
					{abbreviateLinks(getdata)}
				</Text>
			</Button>
		);

		return (
			<Grid.Container gap={1} justify="space-evenly" style={{
				padding: 20
			}}>
				<Grid fluid>{listItems}</Grid>
			</Grid.Container>
		)

		function abbreviateLinks(props) {
			if (props.includes(keygem)) {
				return ("keygem")
			} else if (props.includes(candykeys)) {
				return ("candykeys")
			} else if (props.includes(splitkb)) {
				return ("splitkb")
			} else if (props.includes(eloquentclicks)) {
				return ("eloquentclicks")
			} else if (props.includes(mykeyboard)) {
				return ("mykeyboard")
			} else if (props.includes(novelkeys)) {
				return ("novelkeys")
			} else if (props.includes(minokeys)) {
				return ("minokeys")
			} else if (props.includes(zeal)) {
				return ("zeal")
			} else if (props.includes(drop)) {
				return ("drop")
			} else if (props.includes(tkc)) {
				return ("tkc")
			} else if (props.includes(cannonkeys)) {
				return ("cannonkeys")
			} else if (props.includes(fancycustoms)) {
				return ("fancycustoms")
			} else if (props.includes(rheset)) {
				return ("rheset")
			} else if (props.includes(latamkeys)) {
				return ("latamkeys")
			} else if (props.includes(kprepublic)) {
				return ("kprepublic")
			} else if (props.includes(kbdfans)) {
				return ("kbdfans")
			} else if (props.includes(monstargear)) {
				return ("monstargear")
			} else if (props.includes(ilumkb)) {
				return ("ilumkb")
			} else if (props.includes(dailyclack)) {
				return ("dailyclack")
			} else if (props.includes(switchkeys)) {
				return ("switchkeys")
			} else if (props.includes(ctrlshiftesc)) {
				return ("ctrlshiftesc")
			}
		}
	}

	//Checks if status is 'Released' or 'Groupbuy' and changes tag color
	function CheckStatus() {
		if (status === "Released") {
			return (
				<Button auto flat rounded={false} color="#000">
					<Text
						size={12}
						weight="bold"
						transform="uppercase"
						color="#fff"
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