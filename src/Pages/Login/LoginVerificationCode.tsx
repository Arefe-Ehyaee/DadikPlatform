import VerificationCodeMain from "../../components/VerificationCodeMain";
import LagalPersonLayout from "../Layouts/LagalPersonLayout";

interface VerificationCodeProps {
    phoneNumber: string;
  }

const LoginVerificationCode = ({phoneNumber}:VerificationCodeProps) => {
    return(
        <LagalPersonLayout title={"کد یک بار مصرف"} description={`کد به شماره همراه ${phoneNumber} ارسال شد.`}>
            <VerificationCodeMain></VerificationCodeMain>
        </LagalPersonLayout>
    );
}

export default LoginVerificationCode;