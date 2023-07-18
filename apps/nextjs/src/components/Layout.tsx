import {Card, Flex, Tab, TabGroup, TabList, Title} from "@tremor/react";
import {useRouter} from "next/router";
import {ViewListIcon, ChartPieIcon} from "@heroicons/react/outline";
import {ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, UserButton} from '@clerk/nextjs';

interface Props {
    children: React.ReactNode;
}

export default function Layout({children}: Props) {
    const router = useRouter();
    //  selected index is 0 if  it's /forecast, 2 if it's /expenses-list and 1 if it's root or default:
    const selectedIndex = router.pathname === "/forecast" ? 0 : router.pathname === "/expenses-list" ? 2 : 1;

    return (

        <Card className="w-[60vw] h-[100vh]  mx-auto my-8">
            <Flex className="space-x-8" justifyContent="between" alignItems="center">
                <Title>AllCash</Title>
                <TabGroup index={selectedIndex} onIndexChange={async (index) => {
                    if (index === 0) {
                        void router.push("/forecast")
                    }
                    if (index === 1) {
                        void router.push("/")
                    }
                    if (index === 2) {
                        void router.push("/expenses-list")
                    }
                }}>
                    <TabList variant="solid">
                        <Tab icon={ChartPieIcon}>Forecast</Tab>
                        <Tab icon={ChartPieIcon}>Balaces Overview</Tab>
                        <Tab icon={ViewListIcon}>Expenses List</Tab>
                    </TabList>
                </TabGroup>
                <UserButton />
            </Flex>
            {children}
        </Card>
    )
}