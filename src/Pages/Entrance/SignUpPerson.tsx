import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../Schemas/LegalSchema";

interface SignUpPersonFormData {
  username: string;
  email: string;
  password: string;
  repeatpassword: string;
}

const SignUpPerson = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpPersonFormData>({
    resolver: zodResolver(signupSchema),
  });

  return <div></div>;
};

export default SignUpPerson;
