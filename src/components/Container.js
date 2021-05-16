import React from "react";

import { Flex } from "@chakra-ui/core";

export default function Conntainer ({children}){
    return(
        <>
        <Flex as="main" justifyContent="center" flexDirection="column" px={8}>{children}</Flex>
        </>
    )
}