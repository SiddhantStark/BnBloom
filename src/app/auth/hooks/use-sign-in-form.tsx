import API_CONFIG from '@/config/api.config';
import { PATHS } from '@/config/path.config';
import useMutation from '@/lib/hooks/useMutation';
import { signInSchema } from '@/lib/validators/auth-form-validation';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { AUTH_TOKEN_KEY, setStorageItem } from '@/lib/storage-manager';
import { useAuthContext } from '@/lib/providers/auth-context-provider';
import { SEARCH_PARAMS_KEYS } from '@/config/app.config';

const useSignInForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { refetchCurrentUser } = useAuthContext();
  const { setAuthenticatedUser } = useAuthContext();
  const { pending, mutate } = useMutation(API_CONFIG.AUTH.SIGN_IN, 'POST');

  const next = searchParams.get(SEARCH_PARAMS_KEYS.NEXT_REDIRECT) || PATHS.LANDING;

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signInSchema)
  });

  function handleSignInSubmit(data) {
    mutate(data, {
      onSuccess: (response) => {
        console.log(response);
        toast('Logged in successfully', {
          type: 'success',
        });
        setStorageItem(AUTH_TOKEN_KEY, response.data.accessToken);
        setAuthenticatedUser({
          isAuthenticated: true,  
        });
        refetchCurrentUser();
        navigate(next);
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

  return { form, handleSignInSubmit, pending };
};

export { useSignInForm };
