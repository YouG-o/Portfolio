
const Loader: React.FC = () => {
  return (
    <div className="absolute w-[96px] h-[96px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-wrap">
      <div className="w-[48px] h-[48px] flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 115" className="w-4/5 animate-rotateAnimation delay-0">
          <path fill="#FFF" d="M64.5 0L129 115H0L64.5 0zm0 24.531L20.489 103h88.021L64.5 24.531z" />
        </svg>
      </div>

      <div className="w-[48px] h-[48px] flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" className="w-4/5 animate-rotateAnimation delay-[0.5s]">
          <path fill="#FFF" d="M64.5 0C100.122 0 129 28.878 129 64.5S100.122 129 64.5 129 0 100.122 0 64.5 28.878 0 64.5 0zm0 12C35.505 12 12 35.505 12 64.5S35.505 117 64.5 117 117 93.495 117 64.5 93.495 12 64.5 12z" />
        </svg>
      </div>

      <div className="w-[48px] h-[48px] flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110" className="w-4/5 animate-rotateAnimation delay-[2s]">
          <path fill="#FFF" d="M101 .515L109.485 9l-46 46 46 46-8.485 8.485-46-46-46 46L.515 101l46-46-46-46L9 .515l46 46 46-46z" />
        </svg>
      </div>

      <div className="w-[48px] h-[48px] flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113 113" className="w-4/5 animate-rotateAnimation delay-[1s]">
          <path fill="#FFF" d="M113 0v113H0V0h113zm-12 12H12v89h89V12z" />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
