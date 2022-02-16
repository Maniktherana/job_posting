import React from "react"
import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import { NextUIProvider, createTheme, Link } from '@nextui-org/react'

const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {
          blur: 'rgba(0,0,0,0.5)'
      }
    }
  })

const NavBarItem = ({ title, classprops }) => (
    <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
  )

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <NextUIProvider theme={darkTheme}>
            <nav className="w-full sticky top-0 z-50 backdrop-blur-lg ">
                <div className="w-30 mx-5 flex md:justify-center justify-between items-center px-3">
                    <div className="md:flex-[0.5] flex-initial justify-center items-center">
                        <h3 className="w-32 cursor-pointer">Job Site</h3>
                    </div>
                    <ul className="md:flex hidden list-none flex-row justify-between items-center flex-initial">
                        <li className={`mx-4 cursor-pointer`}>
                            <Link href="https://www.nowhiteboard.org/" target="_blank" icon color="text">No Whiteboard</Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </NextUIProvider>
    )
}

export default Navbar