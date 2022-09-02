import { Navbar, Button, Text } from "@nextui-org/react";

import React from "react";
import { AcmeLogo } from "./acme_logo";
import { Layout } from "./layout";

export const Navigation = () => {
    return (
        <Layout>
            <Navbar>
                <Navbar.Brand>
                    <AcmeLogo />
                    <Text b color="inherit" hideIn="xs">
                        ACME
                    </Text>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <Navbar.Link href="#123">Features</Navbar.Link>
                    <Navbar.Link isActive href="#32">Customers</Navbar.Link>
                    <Navbar.Link href="#23">Pricing</Navbar.Link>
                    <Navbar.Link href="#12">Company</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button auto flat href="#">
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
        </Layout>
    )
}
