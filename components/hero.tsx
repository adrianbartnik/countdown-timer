
import { Grid, Row, Text } from "@nextui-org/react";
import styles from '../styles/Home.module.css';


const Hero = () => {
    return (
        <Grid.Container gap={2} justify="center">
            <Grid.Container xs={4}>
                <Grid.Container alignContent="center">
                    <Row>
                        <Text
                            size={40}
                            css={{
                                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                lineHeight: 1.1
                            }}
                            weight="bold"
                        >
                            Simple & beautiful Count-Down timer in seconds
                        </Text>
                    </Row>
                    <Row css={{ margin: 0 }}>
                        <ul>
                            <li id="1">1. Choose your event, date and time</li>
                            <li id="2">2. Share with all your fiends</li>
                        </ul>
                    </Row>
                    <Row>
                        <Text weight="bold">
                            It's free
                        </Text>
                    </Row>
                </Grid.Container>

            </Grid.Container>
            <Grid.Container xs={6} >
                <div>
                    <video autoPlay={true} className={styles.video}>
                        <source src="demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </Grid.Container>
        </Grid.Container>
    )
}

export default Hero
