// src/pages/_app.tsx
import "../styles/globals.css";
import type {AppProps, AppType} from "next/app";
import {trpc} from "../utils/trpc";
import Layout from "../components/Layout";
import {ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, UserButton} from '@clerk/nextjs';
import {Toaster} from "react-hot-toast";

const MyApp: AppType = ({Component, pageProps: {...pageProps}}: AppProps) => {
    return (
        <ClerkProvider {...pageProps}>
            <Layout>
                <SignedIn>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*// @ts-ignore*/}
                    <Component {...pageProps} />
                </SignedIn>
                <SignedOut>
                    <RedirectToSignIn />
                </SignedOut>
            </Layout>
            <Toaster/>
        </ClerkProvider>
    );
};

export default trpc.withTRPC(MyApp);
