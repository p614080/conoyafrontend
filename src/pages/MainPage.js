import BookmarkListComponent from "../component/bookmark/BookmarkListComponent";
import BasicLayout from "../layout/BasicLayout";

const MainPage = () => {
    return(
        <BasicLayout>          
            <div className="text 3xl">MainPage</div>
            <BookmarkListComponent/>
        </BasicLayout>
    );
}

export default MainPage;