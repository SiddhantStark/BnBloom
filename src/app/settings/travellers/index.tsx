import { Separator } from '@/components/ui/separator';
import CoTravellerInfo from './travellers-card';
import AddNewTraveler from '@/app/checkout/guests/add-new-traveller-dialog';
import { useTravellerContext } from '@/lib/providers/travellers-context';
import { LoadingSpinner } from '@/components/ui/loader';

const TravelersManagement = () => {
  const { travellers, pending } = useTravellerContext();

  if(pending) {
    return <LoadingSpinner containerClassName="min-h-[calc(100vh)-200px]" className={undefined} />;
  }

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
