import BasicFooter from "../menus/BasicFooter";
import BasicHeader from "../menus/BasicHeader";

const BasicLayout = ({ children }) => {
  return (
    <>
      {/* Header*/}
      <header className="flex justify-center w-full">
        <div className="md:w-full lg:w-3/4">
        <BasicHeader />
        </div>
      </header>
      <hr className="border-t-2 mt-3 border-customCornflower w-full" /> 
      <div>
        <main className ="bg-white flex justify-center w-full ">
          <div  className="md:w-full lg:w-3/4 px-10 pt-5">
          {children}
          </div>
        </main>
        

        <footer className="mt-10 bg-customPeriwinkle md:w-full lg:w-full">
          <div class = "md:w-full lg:w-3/4">
          <BasicFooter/>
          </div>
        </footer>
      </div>
    </>
  );
};
export default BasicLayout;
