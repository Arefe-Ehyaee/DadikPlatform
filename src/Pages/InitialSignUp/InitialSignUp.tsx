import LagalPersonLayout from "../Layouts/LagalPersonLayout";
import InitialSignUpMain from "./InitialSignUpMain";


const InitialSignUp = () => {
    return(
        <LagalPersonLayout back={true} title={"ایجاد حساب کاربری"} description={"نام کاربری و رمز عبور خود را وارد کنید"}>
            <InitialSignUpMain></InitialSignUpMain>
        </LagalPersonLayout>
    );
}

export default InitialSignUp;