import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className={"dark:bg-slate-700 bg-slate-100"}>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}