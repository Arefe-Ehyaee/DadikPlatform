import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../Schemas/LegalSignupSchema";
import useSignUpLegal from "../../Pages/Entrance/SignUpLegal";
import useAuthStore from "../../Stores/authStore";

interface SignUpLegalFormData {
  username: string;
  email: string;
  password: string;
  repeatpassword: string;
}

const SignUpLegal = () => {

  const login = useAuthStore((state) => state.login);
  const { signUpLegal, signUpLegalData, isSignUpLegalError, signUpLegalError } = useSignUpLegal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpLegalFormData>({
    resolver: zodResolver(signupSchema),
  });

  

  // const handleSignUp = (e) => {
  //   e.preventDefault();
  //   signUpLegal(
  //     {  }, // Input data for sign-up
  //     {
  //       onSuccess: (data) => {
  //         // Update Zustand state with the user data
  //         login(data.user);
  //       },
  //       onError: (error) => {
  //         console.error('Sign-up failed:', error);
  //       },
  //     }
  //   );
  // };

  return <div></div>;
};

export default SignUpLegal;
