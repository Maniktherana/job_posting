import React from "react"
import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import { NextUIProvider } from '@nextui-org/react'
import { useTheme, Button, Input, Spacer, Text, createTheme, styled } from '@nextui-org/react'

const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {}
    }
  })

const NavBarItem = ({ title, classprops }) => (
    <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
  )

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <NextUIProvider theme={darkTheme}>
            <nav className="w-full">
                <div className="w-30 mx-5 flex md:justify-center justify-between items-center py-3 px-3">
                    <div className="md:flex-[0.5] flex-initial justify-center items-center">
                        <h3 className="w-32 cursor-pointer">Job Site</h3>
                    </div>
                    <ul className="md:flex hidden list-none flex-row justify-between items-center flex-initial">
                        {["About", "Contact", "Jobs"].map((item, index) => (
                        <NavBarItem key={item + index} title={item} />
                        ))}
                    </ul>
                    <div className="flex relative">
                        {!toggleMenu && (
                        <HiMenuAlt4 fontSize={28} className="md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                        )}
                        {toggleMenu && (
                        <AiOutlineClose fontSize={28} className="md:hidden cursor-pointer z-20" onClick={() => setToggleMenu(false)} />
                        )}
                        {toggleMenu && (
                        <ul className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                            flex flex-col justify-start items-center rounded-md blue-glassmorphism text-black animate-slide-in">
                                {["About", "Contact", "Jobs"].map((item, index) => 
                                <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
                                )}
                            
                        </ul>
                        )}
                    </div>
                </div>
            </nav>
        </NextUIProvider>
    )
}

export default Navbar