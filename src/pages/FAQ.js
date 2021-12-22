import React from 'react';
import { Text } from '@nextui-org/react';
import config from '../components/config.json';

function Configurator() {
    return (
        <div className="faq-main" style={{
            width: "80vw",
            margin: 0,
            margin: "auto"
        }}>
            <div style={{
                display: "block"
            }}>
                <FAQ_1/>
                <FAQ_2/>
                <FAQ_3/>
                <FAQ_4/>
                <FAQ_5/>
            </div>
        </div>
    )
}

function FAQ_1() {
    const header = "Q: Is this website free?"
    const answer = "Yes, this website is completely free to use."
    return (
        <div style={{
            display: "block"
        }}>
            <Text color={config.TITLE_COLOR} style={{
                fontSize: "50px",
                marginTop: "5vh",
                marginBottom: "3vh"
            }}>{header}</Text>
            <Text color={config.TEXT_COLOR} style={{
                fontSize: "25px",
                marginBottom: "3vh"
            }}>{answer}</Text>
        </div>
    )
}

function FAQ_2() {
    const header = "Q: How are you able finance this Application then?"
    const answer = "This App uses affiliate Links. Meaning, when you click on a Link and buy something, we get a small percentage of your purchase."
    return (
        <div style={{
            display: "block"
        }}>
            <Text color={config.TITLE_COLOR} style={{
                fontSize: "50px",
                marginTop: "5vh",
                marginBottom: "3vh"
            }}>{header}</Text>
            <Text color={config.TEXT_COLOR} style={{
                fontSize: "25px",
                marginBottom: "3vh"
            }}>{answer}</Text>
        </div>
    )
}

function FAQ_3() {
    const header = "Q: How did you create this website?"
    const answer = "This Website has been created with React, Airtable and the NextUI Library."
    return (
        <div style={{
            display: "block"
        }}>
            <Text color={config.TITLE_COLOR} style={{
                fontSize: "50px",
                marginTop: "5vh",
                marginBottom: "3vh"
            }}>{header}</Text>
            <Text color={config.TEXT_COLOR} style={{
                fontSize: "25px",
                marginBottom: "3vh"
            }}>{answer}</Text>
        </div>
    )
}

function FAQ_4() {
    const header = "Q: Is this website safe to use?"
    const answer = "Short answer, yes. Long answer, we are not using any trackers and therefore cannot tell, who is currently using our website. Your data won't ever be uploaded in any way to one of our servers or a thridparty."
    return (
        <div style={{
            display: "block"
        }}>
            <Text color={config.TITLE_COLOR} style={{
                fontSize: "50px",
                marginTop: "5vh",
                marginBottom: "3vh"
            }}>{header}</Text>
            <Text color={config.TEXT_COLOR} style={{
                fontSize: "25px",
                marginBottom: "3vh"
            }}>{answer}</Text>
        </div>
    )
}

function FAQ_5() {
    const header = "Q: How can I contact you?"
    const answer = "You can simply join our discord server or direct message me on discord: p4ul#0001"
    return (
        <div style={{
            display: "block"
        }}>
            <Text color={config.TITLE_COLOR} style={{
                fontSize: "50px",
                marginTop: "5vh",
                marginBottom: "3vh"
            }}>{header}</Text>
            <Text color={config.TEXT_COLOR} style={{
                fontSize: "25px",
                marginBottom: "3vh"
            }}>{answer}</Text>
        </div>
    )
}

export default Configurator