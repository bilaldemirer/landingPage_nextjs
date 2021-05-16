import React, { useState } from "react";
import firebaseClient from "../../firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";

import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Stack,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/core";

export default function Register() {
  firebaseClient();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <Flex>
      <Box w={500} p={4} my={12} mx="auto">
        <Heading as="h2" textAlign="center">
          Register
        </Heading>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="emailAddress"
            value={email}
            aria-describedby="email-helper-text"
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            id="pass"
            value={pass}
            aria-describedby="password-helper-text"
          ></Input>
        </FormControl>
        <Stack justify="center" mt={6} isInline spacing={10}>
          <Button
            minWidth="40%"
            variant="solid"
            variantColor="blue"
            isDisabled={email === "" || pass === ""}
            onClick={async () => {
              await firebase
                .auth()
                .createUserWithEmailAndPassword(email, pass)
                .then(function () {
                  window.location.href = "/home";
                })
                .catch(function (error) {
                  const message = error.message;
                  toast({
                    title: "An error occured",
                    description: message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  });
                });
            }}
          >
           Create An Account
          </Button>
          <Button
            minWidth="40%"
            variant="solid"
            variantColor="blue"
            isDisabled={email === "" || pass === ""}
            onClick={async () => {
              await firebase
                .auth()
                .signInWithEmailAndPassword(email, pass)
                .then(function () {
                  window.location.href = "/home";
                })
                .catch(function (error) {
                  const message = error.message;
                  toast({
                    title: "An error occured",
                    description: message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  });
                });
            }}
          >
           Login
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
