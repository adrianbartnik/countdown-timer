
import { Button, Col, Container, Input, Row } from "@nextui-org/react";
import { SetStateAction } from "react";

type EventTimeInputFormProps = {
    setCountdownMessage: (value: SetStateAction<string>) => void;
    setCountdownDate: (value: SetStateAction<string>) => void;
    setCoutndownTime: (value: SetStateAction<string>) => void;
    createTimerCallback: () => void;
};


export const EventTimeInputForm = ({ setCountdownMessage, setCountdownDate, setCoutndownTime, createTimerCallback }: EventTimeInputFormProps) => {
    return (
        <Container gap={0}>
            <Row gap={1} align="flex-end" css={{ height: '90px' }}>
                <Col>
                    <Input
                        bordered
                        fullWidth
                        labelPlaceholder="Name"
                        placeholder="Your Title"
                        onChange={(event) => setCountdownMessage(event.target.value)} />
                </Col>
                <Col>
                    <Input
                        bordered
                        fullWidth
                        label="Date"
                        type="date"
                        onChange={(event) => setCountdownDate(event.target.value)}
                    />
                </Col>
                <Col>
                    <Input
                        bordered
                        fullWidth
                        label="Time"
                        type="time"
                        onChange={(event) => setCoutndownTime(event.target.value)}
                    />
                </Col>
                <Col>
                    <Button css={{ width: '100%' }} onPress={createTimerCallback}>
                        Create Countdown Timer
                    </Button>
                </Col>
            </Row>
        </Container>
    )
};
