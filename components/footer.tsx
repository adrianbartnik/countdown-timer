
import { Col, Container, Link as NextUiLink, Row, Spacer, Text } from '@nextui-org/react';
import { FaTwitter } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { Image } from "@nextui-org/react";
import Link from 'next/link'

const Footer = () => {
    return (
        <footer >
            <Spacer y={1} />

            <Container gap={0}>
                <Row gap={1} align="center" style={{ textAlign: "center" }}>
                    <Col>
                        <Text size="$xl"><NextUiLink color="text" style={{ maxWidth: "none", display: "inline-block" }} href="about">About</NextUiLink></Text>
                    </Col>
                    <Col>
                        <Text size="$xl"><NextUiLink color="text" style={{ maxWidth: "none", display: "inline-block" }} href="impressum">Impressum</NextUiLink></Text>
                    </Col>
                    <Col>
                        <Text size="$xl"><NextUiLink color="text" style={{ maxWidth: "none", display: "inline-block" }} href="mailto:countdowntimer@adrianbartnik.de">Contact</NextUiLink></Text>
                    </Col>
                </Row>
            </Container>

            <Spacer y={2} />

            <Row justify="center" align="center">
                <Text>© 2022 Countdown Timer</Text>
            </Row>

            <Spacer y={0.3} />

            <Row justify="center" align="center">
                <Text>
                    Made with <TbBrandNextjs /> <Text b>NextJs</Text> and <Text b>NextUI</Text> by <FaTwitter />
                    <Text b>
                        <Link href="http://www.twitter.com/whoww" color="text" style={{ display: "inline-block" }}>
                            @whoww
                        </Link>
                    </Text>
                </Text>
            </Row>

        </footer>
    )
}

export default Footer
