import {
    Button,
    Flex,
    Bold,
    Divider,
    Metric,
    Text,

} from "@tremor/react";

import {ArrowNarrowRightIcon, PlusIcon, MinusIcon} from "@heroicons/react/solid";

import {useState} from "react";
import CardChatListDataBars from "../components/CardChatListDataBars";
import NewExpensePopUp from "../components/pop-ups/NewExpensePopUp";
import NewIncomePopUp from "../components/pop-ups/NewIncomePopUp";
import toast from "react-hot-toast";


export default function Example() {
    const [newExpensePopUpOpen, setNewExpensePopUpOpen] = useState<boolean>(false);
    const [newIncomePopUpOpen, setNewIncomePopUpOpen] = useState<boolean>(false);
    return (
        <>
            <>
                <Text className="mt-8">Portfolio value</Text>
                <Metric>$ 25,465</Metric>
                <Text className="mt-8">
                    <Bold>Asset Allocation</Bold>
                </Text>
                <Text>1 Asset class • 5 Holdings</Text>
                <Divider/>


                <CardChatListDataBars/>

                <div className={"flex justify-between my-8"}>
                    <Button
                        onClick={() => {
                            toast("new expense")
                            setNewExpensePopUpOpen(true)
                        }}
                        size="xl"
                        variant="primary"
                        icon={MinusIcon}
                        iconPosition="right"
                        tooltip={""}>
                        Add New Expense
                    </Button>

                    <Button
                        onClick={() => setNewExpensePopUpOpen(true)}
                        size="xl"
                        variant="primary"
                        icon={PlusIcon}
                        iconPosition="right">
                        Add New Income
                    </Button>
                </div>

                <NewExpensePopUp isOpen={newExpensePopUpOpen} setIsOpen={setNewExpensePopUpOpen}/>
                <NewIncomePopUp isOpen={newIncomePopUpOpen} setIsOpen={setNewIncomePopUpOpen}/>
            </>

            <Flex className="mt-6 pt-4 border-t">
                <Button size="xs" variant="light" icon={ArrowNarrowRightIcon} iconPosition="right">
                    View more
                </Button>
            </Flex>
        </>
    );
}