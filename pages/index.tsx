import { Container, Link, Spacer, Text } from "@nextui-org/react";
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { EventTimeInputForm } from "../components/event_input_form";
import Footer from '../components/footer';
import Header from '../components/hero';
import NextLink from 'next/link'


import Navigation from '../components/navigation';


const Home: NextPage = () => {

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main>

        <Container>

          <Header />

          <Spacer y={2} />

          <EventTimeInputForm />

          <Spacer y={3} />

          <Footer />
        </Container>
      </main>
    </div>
  )
}

export default Home
