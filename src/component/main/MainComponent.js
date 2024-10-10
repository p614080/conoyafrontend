import MainCarousel from "./MainCarousel";
const MainComponent = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="border-2 border-customPeriwinkle bg-customPeriwinkle shadow-md rounded-md text-white text-2xl font-bold h-32 flex items-center justify-center p-4 hover:bg-customCornflower">
          노래방
        </div>
        <div className="border-2 border-customPeriwinkle bg-customPeriwinkle shadow-md rounded-md text-white text-2xl font-bold h-32 flex items-center justify-center p-4 hover:bg-customCornflower">
          노래방
        </div>
        <div className="border-2 border-customPeriwinkle bg-customPeriwinkle shadow-md rounded-md text-white text-2xl font-bold h-32 flex items-center justify-center p-4 hover:bg-customCornflower">
          노래방
        </div>
        <div className="border-2 border-customPeriwinkle bg-customPeriwinkle shadow-md rounded-md text-white text-2xl font-bold h-32 flex items-center justify-center p-4 hover:bg-customCornflower">
          노래방
        </div>
      </div>
      <div className="mt-10">
        <h1>이벤트</h1>
        <MainCarousel />
      </div>
    </div>
  );
};
export default MainComponent;
