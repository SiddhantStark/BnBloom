import React from 'react'
import HotelCard from './components/hotel-card'
import HotelCardSkeleton from './components/hotel-card-skeleton'

const Hotels = ({isLoading, data, error}) => {
  if(isLoading) return (
    <div className="space-y-4">
      <HotelCardSkeleton />
      <HotelCardSkeleton />
    </div>
  );

//   console.log("data", data);

  return (
    <div className="space-y-4">
      {data?.map((hotel) => (
        <HotelCard key={hotel?.hotel?.id} {...hotel.hotel} price={hotel.price} />
      ))}
    </div>
  );
}

export default Hotels