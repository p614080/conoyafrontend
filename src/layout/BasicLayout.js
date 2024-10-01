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
  className="bg-blue-200 md:w-3/4 lg:w-3/4 px-5 py-5"> {/* 상단 여백 py-40 변경 flex 제거 */}
      {children}
  </main>
  <aside className="bg-purple-200 md:w-1/4 lg:w-1/4">

  </aside>
  <footer className="bg-yellow-100">

</footer>
 
</div>

</>
        
    );
}
export default BasicLayout;