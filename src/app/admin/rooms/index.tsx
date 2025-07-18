import React from 'react';
import EmptyRooms from './empty-room';
import useQuery from '@/lib/hooks/useQuery';
import { useParams } from 'react-router';
import { LoadingSpinner } from '@/components/ui/loader';
import { LinkWithIcon } from '@/components/ui/link';
import { useAdminContext } from '@/lib/providers/admin-context-provider';
import AdminHotelRoomCard from './admin-room-hotel-card';

const Rooms = () => {
  const { hotel } = useAdminContext();
  const { hotelId } = useParams();
  const { data, pending, refetchQuery } = useQuery({
    url: `/admin/hotels/${hotelId}/rooms`,
  });

  if (pending) {
    return <LoadingSpinner containerClassName="min-h-[calc(100vh-56px)]" className={undefined} />;
  }

  return (
    <div className="container p-4 max-w-[1536px] space-y-8">
      <section className="flex items-center justify-between py-4">
        <div>
          <h1 className="text-base font-semibold">All Rooms</h1>
          <p className="text-sm">Manage Rooms in {hotel?.name}</p>
        </div>
        {data && data.length && (
          <LinkWithIcon
            to={`/admin/hotels/${hotelId}/rooms/create`}
            icon="plus"
            size="sm"
            className="gap-1" variant={undefined} iconProps={undefined}          
          >
            Create Room
          </LinkWithIcon>
        )}
      </section>
      {data && data.length == 0 ? (
        <EmptyRooms />
      ) : (
        <section className='space-y-4'>
          {data && data.map((room) => (
            <AdminHotelRoomCard
              key={room.id}
              {...room}
              refetchHotelRooms={refetchQuery}
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default Rooms;
