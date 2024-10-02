import LoginComponent from "../../component/user/LoginComponent";
import BasicLayout from "../../layout/BasicLayout";

const LoginPage = () => {
    return(
        <BasicLayout>
            <h1> LoginPage</h1>
           <LoginComponent/>
        </BasicLayout>
    );
}
export default LoginPage;