import { Separator } from '@/components/ui/separator';
import React from 'react';
import CoTravellerInfo from './travellers-card';
import AddNewTraveler from '@/app/checkout/guests/add-new-traveller-dialog';
import { useTravellerContext } from '@/lib/providers/travellers-context';

const TravelersManagement = () => {
  const { travellers, pending } = useTravellerContext();

  if (pending) return <p>Loading...</p>;

  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <h1 className="text-xl font-bold">Co-Travellers</h1>
          <p className="text-muted-foreground">
            Add, Remove or Update your travellers list
          </p>
        </div>
        <AddNewTraveler />
      </div>
      <Separator className="mt-4 mb-6" />
      <div>
        {travellers && travellers.map((traveler) => (
          <CoTravellerInfo {...traveler} key={traveler.id} />
        ))}
      </div>
    </section>
  );
};

export default TravelersManagement;
