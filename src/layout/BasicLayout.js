import BasicHeader from "../menus/BasicHeader";

const BasicLayout = ({ children }) => {
  return (
    <>
      {/* Header*/}
      <div>
        <BasicHeader />
      </div>

      <div>
        <main className="bg-white md:w-full lg:w-full px-5 py-5">
          {children}
        </main>

        <footer className="bg-yellow-100 md:w-full lg:w-full">
        
        </footer>
      </div>
    </>
  );
};
export default BasicLayout;
