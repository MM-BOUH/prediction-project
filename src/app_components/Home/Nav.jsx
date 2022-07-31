import React from "react"
import logo from "../../assets/images/logo.jpg"
function Nav() {
  return (
    <React.Fragment>
      {/* <!-- Navbar --> */}
      <nav className="relative container mx-auto p-6">
        {/* <!-- Flex container --> */}
        <div className="flex items-center justify-between">
          {/* <!-- Logo --> */}
          <div className="pt-2">
            <img src={logo} alt="" />
          </div>
          {/* <!-- Menu Items --> */}

          {/* <!-- Button --> */}
          <a
            href="localhost:8000"
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
          >
            About PHC
          </a>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Nav
