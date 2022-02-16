import React from "react"
import { Divider } from '@chakra-ui/react'
import {  NextUIProvider, Text, createTheme } from '@nextui-org/react'

const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {}
    }
  })

const Footer = () => {
    return (
        <NextUIProvider theme={darkTheme}>
              <Divider />
              <Text className="text-center my-2" size={12}>Job Posting 2022 - All Rights Reserved</Text>
        </NextUIProvider>
    )
}

export default Footer