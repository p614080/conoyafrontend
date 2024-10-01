import BasicHeader from "../menus/BasicHeader";



const BasicLayout = ({children}) => {
    return(
        <>
        {/* Header*/}
        <div>
            <BasicHeader/>
        </div>

<div className="bg-white my-1 w-full flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0">
  
  <main 
  className="bg-blue-200 md:w-full lg:w-full px-5 py-5"> 
      {children}
  </main>
 
  <footer className="bg-yellow-100">

</footer>
 
</div>

</>
        
    );
}
export default BasicLayout;