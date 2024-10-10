import SingroomDetailComponent from "../../component/singroom/SingRoomDetailComPonent";
import BasicLayout from "../../layout/BasicLayout";
const SingroomDetailPage = ({sno}) =>{
    return(
        <BasicLayout>
            노래방 상세페이지 
            <SingroomDetailComponent/>
        </BasicLayout>
    );
}
export default SingroomDetailPage;