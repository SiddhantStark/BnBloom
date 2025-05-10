import API_CONFIG from '@/config/api.config';
import useMutation from '@/lib/hooks/useMutation';
import { on } from 'events';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { signUpSchema } from '@/lib/validators/auth-form-validation';
import { zodResolver } from '@hookform/resolvers/zod';

const useSignUpForm = () => {

    const {data, pending, mutate} = useMutation(API_CONFIG.AUTH.SIGN_UP , 'POST');
    const navigate = useNavigate();

    const form = useForm({
        defaultValues: {
          name: '',
          email: '',
          password: ''
        },
        resolver: zodResolver(signUpSchema)
    });

    

    function handleSignUpSubmit(data){
        mutate(data, {
            onSuccess: (response) => {
                console.log('Sign up successful', response.data);
                toast('Sign up successful!', {
                    description: 'You can now log in to your account.',
                    type: "success",
                });
                navigate(API_CONFIG.AUTH.SIGN_IN);
            },
            onError: (error) => {
                console.log(error)
                toast('Error: ' + (error?.status || ''), {
                  description: error?.message || "Error occurred while signing up. Please try again.",
                  type: 'error',
                });
            }
        });
    }

    return { form, handleSignUpSubmit, pending };
}

export default useSignUpForm
