import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "@/component/Layout/Navbar"

const Index = (props) => {
    const { children, isLogin = false } = props;

    return (
        <>
            <Head>
                <title>My App </title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no, height=device-height, user-scalable=0"
                />
            </Head>
            {!isLogin && (
                <Navbar />
            )}
            {children}
        </>
    )
}

export default Index;