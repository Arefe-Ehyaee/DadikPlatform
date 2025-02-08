import LoginPasswordMainComponent from "./LoginPasswordMainComponent";
import LagalPersonLayout from "../Layouts/LagalPersonLayout";

const LoginWithPassword = () => {

    return(
        <LagalPersonLayout back={true} title={"ورود به حساب کاربری"} description={"نام کاربری و رمز عبور خود را وارد کنید."}>
            <LoginPasswordMainComponent></LoginPasswordMainComponent>
        </LagalPersonLayout>
    );
}

export default LoginWithPassword;