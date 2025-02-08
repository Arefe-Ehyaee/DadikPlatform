import { useMutation } from '@tanstack/react-query';
import axios from "axios"

const useSignUpPerson = () => {
  const {
    mutate: signUpPerson,         
    data: signUpPersonData,     
    isError: isSignUpPersonError, 
    error: signUpPersonError,      
  } = useMutation({
    mutationFn: async (signUpPersonData) => {
      const response = await axios.post('/signUpLegal', signUpPersonData); 
      return response.data; 
    },
  });

  return { signUpPerson, signUpPersonData, isSignUpPersonError, signUpPersonError };
};

export default useSignUpPerson;