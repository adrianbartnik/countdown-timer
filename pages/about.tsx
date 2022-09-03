import { Container } from "@nextui-org/react";
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from "next/router";
import { Navigation } from "../components/navigation";

const Home: NextPage = () => {
    const router = useRouter();

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
