import {BadgeDelta, Bold, DeltaType, Flex, List, ListItem, Text} from "@tremor/react";


interface StockData {
    name: string;
    value: number;
    performance: string;
    deltaType: DeltaType;
}

const stocks: StockData[] = [
    {
        name: "Off Running AG",
        value: 10456,
        performance: "6.1%",
        deltaType: "increase",
    },
    {
        name: "Not Normal Inc.",
        value: 5789,
        performance: "1.2%",
        deltaType: "moderateDecrease",
    },
    {
        name: "Logibling Inc.",
        value: 4367,
        performance: "2.3%",
        deltaType: "moderateIncrease",
    },
    {
        name: "Raindrop Inc.",
        value: 3421,
        performance: "0.5%",
        deltaType: "moderateDecrease",
    },
    {
        name: "Mwatch Group",
        value: 1432,
        performance: "3.4%",
        deltaType: "decrease",
    },
];

export default function ExpensesList() {
    return <>
        <Flex className="mt-8" justifyContent="between">
            <Text className="truncate">
                <Bold>Stocks</Bold>
            </Text>
            <Text>Since transaction</Text>
        </Flex>
        <List className="mt-4">
            {stocks.map((stock) => (
                <ListItem key={stock.name}>
                    <Text>{stock.name}</Text>
                    <Flex justifyContent="end" className="space-x-2">
                        <Text>$ {Intl.NumberFormat("us").format(stock.value).toString()}</Text>
                        <BadgeDelta deltaType={stock.deltaType} size="xs">
                            {stock.performance}
                        </BadgeDelta>
                    </Flex>
                </ListItem>
            ))}
        </List>
    </>
}