import { Container } from "@nextui-org/react";
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from "next/router";
import { Navigation } from "../components/navigation";

const allFieldsProvided = (message?: string | string[], date?: string | string[], time?: string | string[]): boolean => {
    return Boolean(message) && Boolean(date) && Boolean(time);
}

const Home: NextPage = () => {
    const router = useRouter();

    const showHeader = allFieldsProvided(router.query.message, router.query.date, router.query.time);

    // router.push({ pathname: "countdown", query: { message: router.query.message, date: router.query.date, time: router.query.time } })

    if (!showHeader) {
        return (
            <div>
                <Head>
                    <title>Countdown Timer</title>
                </Head>

                <Navigation />

                <main>
                    <Container>
                        Missing Input Parameter
                    </Container>
                </main>
            </div>
        )
    }

    return (
        <div >
            <Head>
                <title>Countdown Timer</title>
            </Head>

            <Navigation />

            <main>

                <Container>
                    Holly Molly
                </Container>
            </main>
        </div>
    )
}

export default Home
