import React, { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { ImCross } from "react-icons/im"

const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <header>
      {/* Mobile to Tab screens sizes */}
      {/* <nav className="bg-[#F3EED9]">
        <div className="max-w-[1180px] mx-auto">
          <div className="flex justify-between items-center font-semibold text-[#824936] px-3 py-6">
            <h1 className="text-2xl">VM Consultant</h1>

            {!toggle ? (
              <GiHamburgerMenu
                className="fill-[#824936] w-10 h-6 cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <ImCross
                className="fill-[#824936] w-10 h-6 cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
            )}
            <ul className="hidden lg:flex justify-between gap-8 border">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SERVICES</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </div>
      </nav> */}

      {/* Laptop and above screen size */}
      <nav className="bg-[#F3EED9]">
        <div className="max-w-[1180px] mx-auto">
          <div className="flex justify-between items-center font-semibold text-[#824936] px-3 py-6">
            <h1 className="text-2xl">VM Consultant</h1>

            <ul className="hidden lg:flex justify-between gap-8 ">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SERVICES</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
