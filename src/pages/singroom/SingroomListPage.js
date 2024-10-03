import SingroomListComponent from "../../component/singroom/SingroomListComponent";
import BasicLayout from "../../layout/BasicLayout";

const SingroomListPage = () => {
  return (
    <BasicLayout>
      <div>
        <h1 className="text-2xl font-extrabold ">노래방 리스트</h1>
      </div>
      <SingroomListComponent />
    </BasicLayout>
  );
};
export default SingroomListPage;
