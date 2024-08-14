/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import PlaystationLogo from "@/src/assets/images/playstation_logo.png"
import Link from "next/link";

const HomePage = () => {
  return (
    <Link href="/about">
      <div className="relative flex flex-col justify-center items-center min-h-full text-white" >
        <p className="absolute top-1/4 text-center">Cliquez n'importe où</p>
        <Image src={PlaystationLogo} width={150} height={150} alt="Playstation Logo" />
      </div>
    </Link>
  )
}

export default HomePage;