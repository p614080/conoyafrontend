import MainCarousel from "./MainCarousel"

const MainComponent = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="border-2 border-teal-400  bg-white text-black h-32 flex items-center justify-center p-4">
          노래방
        </div>
        <div className="border-2 border-teal-400  bg-white text-black h-32 flex items-center justify-center p-4">
          노래 
        </div>
        <div className="border-2 border-teal-400  bg-white text-black h-32 flex items-center justify-center p-4">
          아이템 3
        </div>
        <div className="border-2 border-teal-400  bg-white text-black h-32 flex items-center justify-center p-4">
          아이템 4
        </div>       
      </div>
    <div className="mt-10">
        <h1>이벤트</h1>
        <MainCarousel/>
    </div>

    </div>
  );
};
export default MainComponent;
