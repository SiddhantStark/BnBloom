import AddOrUpdateTravellerDialog from '@/features/travellers/travellers-dialog';
import React, { useState } from 'react';
import useAddTraveller from '../hooks/useAddTraveller';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const AddNewTraveler = () => {
  const [isAddGuestDialogOpen, setIsAddGuestDialogOpen] = useState(false);
  const { data, pending, addGuest } = useAddTraveller(isAddGuestDialogOpen);

  return (
    <AddOrUpdateTravellerDialog
      mutate={addGuest}
      title={'Add New Traveler'}
      isDialogOpen={isAddGuestDialogOpen}
      setIsDialogOpen={setIsAddGuestDialogOpen}
      isDisabled={pending}
      isLoading={pending}
      submitButtonText={'Add To Travelers List'}
      TriggerNode={
        <Button
          size={'sm'}
          variant={'link'}
          className="h-auto gap-1 p-0 text-sm font-semibold transition-opacity hover:opacity-80 hover:no-underline"
        >
          <Icon icon={'plus'} size={16} />
          Add New Guest
        </Button>
      }
    />
  );
};

export default AddNewTraveler;