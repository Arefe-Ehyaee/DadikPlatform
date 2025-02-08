import { useMutation } from "@tanstack/react-query";
import axios from "axios";


const useSignUpLegal = () => {
  const {
    mutate: signUpLegal,          // The mutation function to call for sign-up
    data: signUpLegalData,        // Data returned from the API on success
    isError: isSignUpLegalError,  // Error state
    error: signUpLegalError,      // Error details
  } = useMutation({
    mutationFn: async (signUpLegalData) => {
      const response = await axios.post('/signup', signUpLegalData); // API call for sign-up
      return response.data; // Return the data from the API
    },
  });

  return { signUpLegal, signUpLegalData, isSignUpLegalError, signUpLegalError };
};

export default useSignUpLegal;