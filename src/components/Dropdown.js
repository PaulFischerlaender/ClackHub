import React from "react";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

function DropDownMenu() {

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger />

            <DropdownMenu.Content>
                <DropdownMenu.Label />
                <DropdownMenu.Item />

                <DropdownMenu.Group>
                    <DropdownMenu.Item />
                </DropdownMenu.Group>

                <DropdownMenu.CheckboxItem>
                    <DropdownMenu.ItemIndicator />
                </DropdownMenu.CheckboxItem>

                <DropdownMenu.RadioGroup>
                    <DropdownMenu.RadioItem>
                        <DropdownMenu.ItemIndicator />
                    </DropdownMenu.RadioItem>
                </DropdownMenu.RadioGroup>

                <DropdownMenu.Root>
                    <DropdownMenu.TriggerItem />
                    <DropdownMenu.Content />
                </DropdownMenu.Root>

                <DropdownMenu.Separator />
                <DropdownMenu.Arrow />
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}

export default DropDownMenu