import { Container, Spacer } from "@nextui-org/react";
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from "next/router";
import { useState } from "react";
import { EventTimeInputForm } from "../components/event_input_form";
import Footer from '../components/footer';
import { Hero } from "../components/hero";
import { Navigation } from "../components/navigation";


const Home: NextPage = () => {
  const router = useRouter();

  const [countdownMessage, setCountdownMessage] = useState("");
  const [countdownDate, setCountdownDate] = useState("");
  const [countdownTime, setCoutndownTime] = useState("");

  const createTimerCallback = () => { router.push({ pathname: "countdown", query: { message: countdownMessage, date: countdownDate, time: countdownTime } }) }

  return (
    <div >
      <Head>
        <title>Countdown Timer</title>
      </Head>

      <Navigation />

        <Container>

          <Hero />

          <Spacer y={2} />

          <EventTimeInputForm
            setCountdownMessage={setCountdownMessage}
            setCountdownDate={setCountdownDate}
            setCoutndownTime={setCoutndownTime}
            createTimerCallback={createTimerCallback} />

          <Spacer y={3} />

          <Footer />
        </Container>
    </div>
  )
}

export default Home
