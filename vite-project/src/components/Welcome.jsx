import React from "react"
import { NextUIProvider } from '@nextui-org/react'
import { useTheme, Button, Input, Spacer, Text, createTheme, styled } from '@nextui-org/react'

const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {}
    }
  })

const Welcome = () => {
    return (
        <NextUIProvider>
            <div className="flex w-full justify-center items-center">
                <div className="flex mf:flex row flex-col items-start justify-between md:p-20 py-12 px-4">
                    <div className="flex flex-1 justify-start flex-col mf:mr-10">
                        <h1 className="text-3xl sm:text-5xl text-gradient py-1">
                            Get A<br />Job In Tech
                        </h1>
                    </div>
                </div>
            </div>
        </NextUIProvider>
    )
}

export default Welcome