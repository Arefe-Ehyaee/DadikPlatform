import EnterPhoneNumberComponent from "../../components/EnterPhoneNumberComponent";
import LagalPersonLayout from "../Layouts/LagalPersonLayout";



const LoginWithCode = () => {

    return(
        <LagalPersonLayout title={"ورود از طریق کد یکبار مصرف"} description={"شماره تلفن همراه خود را وارد کنید."}>
           <EnterPhoneNumberComponent></EnterPhoneNumberComponent>
        </LagalPersonLayout>
    );
}

export default LoginWithCode;