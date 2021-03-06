import React from "react";
import nookies from "nookies";
import { verifyIdToken } from "../../firebaseAdmin";
import firebaseClient from "../../firebaseClient";
import firebase from "firebase/app";
import { Box, Flex, Text, Heading, Button } from "@chakra-ui/core";

function Authenticated({ session }) {
  firebaseClient();
  if (session) {
    return (
      <Flex>
        <Box w={500} p={4} my={12} mx="auto">
          <Heading as="h2" textAlign="center">
            Authenticated
          </Heading>
          <Text textAlign="center">{session}</Text>
          <Text textAlign="center">You can do anything now you are authenticated.</Text>
        </Box>
        <Box w={500} p={4} my={12} mx="auto">
            <Button width="100%" variant="solid" variantColor="red"
            onClick={async () => {
                await firebase.auth().signOut();
                window.location.href = "/home"
            }}>Sign Out</Button>
        </Box>
      </Flex>
    );
  } else {
      return(
          <Box>
              <Text> Loading ... </Text>
          </Box>
      )
  }
}

export async function getServerSideProps(context) {
    try{
        const cookies = nookies.get(context);
        const token = await verifyIdToken(cookies.token);
        const {uid, email} = token;
        return {
            props: {session: `Your email is ${email} and your UID is ${uid}.`},
        };
    }catch (err) {
        context.res.writeHead(302, { location: "/home" });
        context.res.end();
        return {props: [] };
    }
}

export default Authenticated;
