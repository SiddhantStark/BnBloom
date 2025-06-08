import API_CONFIG from '@/config/api.config';
import useMutation from '@/lib/hooks/useMutation';
import { useTravellerContext } from '@/lib/providers/travellers-context';
import React from 'react';
import { toast } from 'sonner';

function useRemoveGuest({ guestId, setIsDialogOpen }) {
  const { setTravellers } = useTravellerContext();
  const { mutate, pending } = useMutation(
    API_CONFIG.TRAVELLER.DELETE_TRAVELLER.URL(guestId),
    API_CONFIG.TRAVELLER.DELETE_TRAVELLER.METHOD
  );

  const removeGuest = React.useCallback(async () => {
    await mutate(null, {
      onSuccess: () => {
        setTravellers((prevTravellers) =>
          prevTravellers.filter((traveller) => traveller?.id !== guestId)
        );
        toast('Guest Removed successfully', {
          type: 'success'
        })
        setIsDialogOpen(false);
      },
      onError: (err) => {
        toast('Error: ' + (err.status || ''), {
          description: err.message,
          type: 'error',
        });
      },
    });
  }, [mutate]);

  return { removeGuest, pending };
}
export default useRemoveGuest;
