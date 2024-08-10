
import Image from "next/image";
import PlaystationLogo from "@/assets/images/playstation_logo.png"

const HomePage = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen text-white">
      <p className="absolute top-1/4 text-center">Click anywhere</p>
      <Image src={PlaystationLogo} width={150} height={150} alt="Playstation Logo" />
    </div>
  )
}

export default HomePage;