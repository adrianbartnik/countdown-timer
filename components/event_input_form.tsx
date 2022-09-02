
import { Button, Col, Container, Input, Row, Link } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";



export const EventTimeInputForm = () => {
    const [data, setData] = useState({ message: "", date: "", time: "" });
    const router = useRouter();

    console.log(router.query);

    return (
        <Container gap={0}>
            <Row gap={1} align="flex-end" css={{ height: '90px' }}>
                <Col>
                    {router.query.date} / {router.query.message} / {router.query.time}
                </Col>
                <Col>
                    <Input
                        bordered
                        fullWidth
                        labelPlaceholder="Name"
                        placeholder="Your Title"
                        onChange={(event) => setData({ ...data, message: event.target.value })} />
                </Col>
                <Col>
                    <Input
                        bordered
                        fullWidth
                        label="Date"
                        type="date"
                        onChange={(event) => setData({ ...data, date: event.target.value })}
                    />
                </Col>
                <Col>
                    <Input
                        bordered
                        fullWidth
                        label="Time"
                        type="time"
                        onChange={(event) => setData({ ...data, time: event.target.value })}
                    />
                </Col>
                <Col>
                    <Button css={{ width: '100%' }} onPress={() => { router.push({ pathname: "", query: data }) }}>
                        Create Countdown Timer
                    </Button>
                </Col>
            </Row>
        </Container>
    )
};
