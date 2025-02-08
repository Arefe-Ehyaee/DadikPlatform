
import VerificationCodeMain from "../../components/VerificationCodeMain";
import LagalPersonLayout from "../Layouts/LagalPersonLayout";

interface VerificationCodeProps {
    phoneNumber: string;
  }

const VerificationCode = ({phoneNumber}:VerificationCodeProps) => {
    return(
        <LagalPersonLayout title={"کد تایید"} description={`کد تایید به شماره همراه ${phoneNumber} ارسال شد.`}>
            <VerificationCodeMain></VerificationCodeMain>
        </LagalPersonLayout>
    );
}

export default VerificationCode;