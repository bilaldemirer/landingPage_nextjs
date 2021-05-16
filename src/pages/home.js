import React from 'react';
import Link from "next/link";
import { useAuth } from "../../auth";

import  Container from "../components/Container";

import { Flex, Box, Button, Text, Heading, Stack} from "@chakra-ui/core";


export default function IndexPage() {
  const { user } = useAuth(); 
  return (
    <Container>
        <Flex>
            <Box w={500} p={4} my={12} mx="auto">
                <Heading as="h2" textAlign="center">
                    Welcome to the home page.
                </Heading>
                <Text mt={8} textAlign="center">{`User ID: ${user ? user.uid : "No user signed in"}`}</Text>
                <Stack 
                mt={8} 
                alignItems="center"
                justifyContent="center"
                isInline
                width="100%"
                >
                    <Button variant="solid" variantColor="blue" width="100%" isDisabled={!user}>
                        <Link href="/authenticated">
                            <a>Go to authenticated route</a>
                        </Link>
                    </Button>

                    <Button variant="solid" variantColor="green" width="100%" isDisabled={user}>
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </Button>
                </Stack>
            </Box>
        </Flex>
    </Container>
  );
}