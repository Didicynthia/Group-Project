import React from "react";
import Images from "../assets/image";

function Navbar() {
  return (
    <section>
        <header>
            <img src={Images.Pics} alt="random image" />
            <img src={Images.Ret} alt="random image" />
        </header>
    </section>
  )
}

export default Navbar;