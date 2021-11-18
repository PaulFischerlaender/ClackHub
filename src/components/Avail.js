import React from "react";
import {Card, Text} from '@nextui-org/react'



function ListAvail(avail) {
    <div class="grid-container">
		<Card color="primary" textColor="white">
            <Text h5 transform="capitalize">
                {avail}
            </Text>
        </Card>
	</div>
}

export default ListAvail