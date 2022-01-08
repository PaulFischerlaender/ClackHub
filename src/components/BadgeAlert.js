import { Container, Text } from "@nextui-org/react";


export default function BadgeAlert(alert, texthead, textsub) {
    return (
        <div style={{
            backgroundColor: "#FFF323",
            borderRadius: "20px",
            border: "2px solid #FFE652",
            padding: "10px",
            marginTop: "2vh",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <div style={{
                   marginRight: "2vw"
                }}>
                    <Text b>
                        {alert}
                    </Text>
                </div>
                <div style={{
                  
                }}>
                    <Text b>
                        {texthead} {textsub}
                    </Text>
                </div>
            </div>
        </div>
    )
}