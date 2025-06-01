import API_CONFIG from '@/config/api.config';
import { ERROR_FALLBACK } from '@/config/app.config';
import useMutation from '@/lib/hooks/useMutation';
import { useTravellerContext } from '@/lib/providers/travellers-context';
import { toast } from 'sonner';

function useAddTraveller({setIsAddGuestDialogOpen}) {
  const { setTravellers } = useTravellerContext();
  const { data, pending, mutate } = useMutation(
    API_CONFIG.TRAVELLER.ADD_TRAVELLER.URL,
    API_CONFIG.TRAVELLER.ADD_TRAVELLER.METHOD
  );

  async function addGuest(data) {
    await mutate(data, {
      onSuccess: (response) => {
        setTravellers((prevTravellers) => [...prevTravellers, response.data]);
        toast('New guest added successfully', {
          type: 'success',
        });
        setIsAddGuestDialogOpen(false);
      },
      onError: (error) => {
        console.log('error in addGuest', error)
        toast(error.status || ERROR_FALLBACK.TITLE, {
          type: 'error',
        });
      },
    });
  }

  return {pending, addGuest, data};

}

export default useAddTraveller;