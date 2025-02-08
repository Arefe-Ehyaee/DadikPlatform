import EnterPhoneNumberComponent from "../../components/EnterPhoneNumberComponent";
import LagalPersonLayout from "../Layouts/LagalPersonLayout";



const ForgetPassword = () => {

    return(
        <LagalPersonLayout back={false} title={"رمز عبور خود را فراموش کرده اید ؟"} description={"شماره تلفن همراه خود را وارد کنید تا کد برای شما ارسال شود."}>
           <EnterPhoneNumberComponent></EnterPhoneNumberComponent>
        </LagalPersonLayout>
    );
}

export default ForgetPassword;