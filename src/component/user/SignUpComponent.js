import { Link, useNavigate } from "react-router-dom";


const SignupComponent = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [userType, setUserType] = useState("individual"); // 기본값은 일반회원

const [userType, setUserType] = userState('');

const handleUserTypeChange = (type) => {
  setUserType(type);
}

const navigate = useNavigate();

const handleMoveSignUp = (e) => {
    e.preventDefault();
    const userType = `${e.target.id}`; // 여기에 가입 처리 로직 추가
    console.log(userType);
   if(userType == "btnJoinInUser"){
    alert("일반회원입니다.");
   }
   if(userType == "btnJoinInOwner"){
    
   }
  };
  return (
    <div class="mt-5 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
          회원가입
        </h2>
        <div className="w-full mt-5">
          <button
            id="btnJoinInUser"
            className=" pt-20 pb-20 w-1/2 justify-center py-2 text-white font-bold bg-indigo-600 rounded hover:bg-indigo-500"
            onClick={handleMoveSignUp}
          >
            일반회원
          </button>
          <button
            id="btnJoinInOwner"
            className="pt-20 pb-20 w-1/2 ml-auto justify-center py-2 text-white font-bold bg-cyan-600 rounded hover:bg-cyan-500"
            onClick={handleMoveSignUp}
          >
            기업회원
          </button>
        </div>
    </div>
</div>
  );
};

export default SignupComponent;
