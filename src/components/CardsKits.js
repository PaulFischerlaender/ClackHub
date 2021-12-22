import React from 'react'
import { Modal, Button, Spacer, Card, Row, Text, Col, Container, Grid } from "@nextui-org/react";
import configJSON from './config.json'
import { useMediaPredicate } from "react-media-hook";

function Switches({ title, coverImage, status, price, size, layout, material, pcbtype, lastupdate, keygem, candykeys, splitkb,
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
						backgroundColor: configJSON.SUB_COLOR,
						minWidth: "50%",
						maxWidth: "500px",
						minHeight: "50%"
					}}
				>
					<Modal.Header style={{ position: 'absolute', zIndex: 1, top: 50, left: 30 }}>
						<Button auto rounded={false} color={configJSON.LINK_COLOR}>
							<Text
								size={15}
								weight="bold"
								transform="uppercase"
								color="#fff"
							>
								{title}
							</Text>
						</Button>
					</Modal.Header>
					<Modal.Body>
						<div style={{
							width: "100%",
							height: "100%"
						}}>
							<img style={{
								borderRadius: "8%",
								padding: "20px"
							}} src={coverImage} alt="" width="100%" height="100%" />
						</div>
						<Container style={{
							padding: 20
						}}>
							<Row justify="space-between">
								<Card flat color={configJSON.LINK_COLOR} textColor="white" style={{
									marginRight: "1vw",
									width: "auto",
									alignItems: "center"
								}}>
									<Card.Body style={{
										overflow: "hidden"
									}}>
										<Text h5 transform="capitalize">
											{layout}
										</Text>
									</Card.Body>
								</Card>
								<Card auto flat color={configJSON.LINK_COLOR} textColor="white" style={{
									marginRight: "1vw",
									width: "auto",
									alignItems: "center"
								}}>
									<Card.Body style={{
										overflow: "hidden"
									}}>
										<Text h5 transform="capitalize">
											{price}€
										</Text>
									</Card.Body>
								</Card>
								<Card auto flat color={configJSON.LINK_COLOR} textColor="white" style={{
									width: "auto",
									alignItems: "center"
								}}>
									<Card.Body style={{
										overflow: "hidden"
									}}>
										<Text h5 transform="capitalize">
											{pcbtype}
										</Text>
									</Card.Body>
								</Card>
							</Row>
							<Spacer x={1} />
							<Row justify="space-between">
								<Card auto flat color={configJSON.LINK_COLOR} textColor="white" style={{
									marginRight: "1vw",
									width: "auto",
									alignItems: "center"
								}}>
									<Card.Body style={{
										overflow: "hidden"
									}}>
										<Text h5 transform="capitalize">
											{material}
										</Text>
									</Card.Body>
								</Card>
								<Card auto flat color={configJSON.LINK_COLOR} textColor="white" style={{
									marginRight: "1vw",
									width: "auto",
									alignItems: "center"
								}}>
									<Card.Body style={{
										overflow: "hidden"
									}}>
										<Text h5 transform="capitalize">
											{size}%
										</Text>
									</Card.Body>
								</Card>
								<Card auto flat color={configJSON.LINK_COLOR} textColor="white" style={{
									width: "auto",
									alignItems: "center"
								}}>
									<Card.Body style={{
										overflow: "hidden"
									}}>
										<Text h5 transform="capitalize">
											{status}
										</Text>
									</Card.Body>
								</Card>
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
			{biggerThan534 && <div>
				<Modal
					noPadding={true}
					open={visible}
					onClose={closeHandler}
					blur
					style={{
						backgroundColor: configJSON.SUB_COLOR,
						minWidth: "50%",
						maxWidth: "500px",
						minHeight: "50%"
					}}
				>
					<Modal.Header style={{ position: 'absolute', zIndex: 1, top: 30, left: 30 }}>
						<Button auto rounded={false} color={configJSON.LINK_COLOR}>
							<Text
								size={15}
								weight="bold"
								transform="uppercase"
								color="#fff"
							>
								{title}
							</Text>
						</Button>
					</Modal.Header>
					<Modal.Body>
						<div style={{
							width: "100%",
							height: "100%"
						}}>
							<img style={{
								borderRadius: "8%",
								padding: "20px"
							}} src={coverImage} alt="" width="100%" height="100%" />
						</div>
						<Container style={{
							padding: 20
						}}>
							<Row justify="space-between">
								<Card flat color={configJSON.LINK_COLOR} textColor="white" style={{
									marginRight: "1vw",
									width: "auto",
									alignItems: "center"
								}}>
									<Card.Body style={{
										overflow: "hidden"
									}}>
										<Text h5 transform="capitalize">
											{layout}
										</Text>
									</Card.Body>
								</Card>
								<Card auto flat color={configJSON.LINK_COLOR} textColor="white" style={{
									marginRight: "1vw",
									width: "auto",
									alignItems: "center"
								}}>
									<Card.Body style={{
										overflow: "hidden"
									}}>
										<Text h5 transform="capitalize">
											{price}€
										</Text>
									</Card.Body>
								</Card>
								<Card auto flat color={configJSON.LINK_COLOR} textColor="white" style={{
									width: "auto",
									alignItems: "center"
								}}>
									<Card.Body style={{
										overflow: "hidden"
									}}>
										<Text h5 transform="capitalize">
											{pcbtype}
										</Text>
									</Card.Body>
								</Card>
							</Row>
							<Spacer x={1} />
							<Row justify="space-between">
								<Card auto flat color={configJSON.LINK_COLOR} textColor="white" style={{
									marginRight: "1vw",
									width: "auto",
									alignItems: "center"
								}}>
									<Card.Body style={{
										overflow: "hidden"
									}}>
										<Text h5 transform="capitalize">
											{material}
										</Text>
									</Card.Body>
								</Card>
								<Card auto flat color={configJSON.LINK_COLOR} textColor="white" style={{
									marginRight: "1vw",
									width: "auto",
									alignItems: "center"
								}}>
									<Card.Body style={{
										overflow: "hidden"
									}}>
										<Text h5 transform="capitalize">
											{size}%
										</Text>
									</Card.Body>
								</Card>
								<Card auto flat color={configJSON.LINK_COLOR} textColor="white" style={{
									width: "auto",
									alignItems: "center"
								}}>
									<Card.Body style={{
										overflow: "hidden"
									}}>
										<Text h5 transform="capitalize">
											{status}
										</Text>
									</Card.Body>
								</Card>
							</Row>
						</Container>
					</Modal.Body>
					<Grid.Container gap={1} justify="center">
						<RenderLinks listdata={filtered} />
					</Grid.Container>
				</Modal>
			</div>}
			{/**
                * @style
                * Defines the layout of the grid
                */}
			<Grid fluid>
				{!biggerThan534 && <Card color={configJSON.SUB_COLOR} cover clickable onClick={handler} style={{
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
							<Text h3 color={configJSON.TITLE_COLOR}>
								{title}
							</Text>
						</Row>
					</Card.Footer>
				</Card>}
				{biggerThan534 && <Card width="14vw" color={configJSON.SUB_COLOR} cover clickable onClick={handler} style={{
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
							<Text h3 color={configJSON.TITLE_COLOR}>
								{title}
							</Text>
						</Row>
					</Card.Footer>
				</Card>}
			</Grid>
		</div>
	)

	//Gets list of filtered manufacturers and lists each in a grid
	function RenderLinks(props) {
		const data = props.listdata;
		const listItems = data.map((getdata) =>
			<Button auto flat color={configJSON.LINK_COLOR} textColor="white" onClick={onClickUrl(getdata)}>
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
				<Button auto rounded={false} color={configJSON.LINK_COLOR}>
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
	}
}

export default Switches