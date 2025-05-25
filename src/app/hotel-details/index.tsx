import PropertyViewCard from './property-view-card'
import HotelMetaDetails from './hotel-meta-details'
import HotelRoomsPicker from './hotel-rooms-picker'
import HotelPolicy from './hotel-policy'
import HotelCheckoutCard from './hotel-checkout-card'
import { HOTEL_DATA, HOTEL_INFO } from './hotel-details-dummy-data'
import useGetHotelInfo from './hooks/useGetHotelDetails'

const HotelDetails = () => {

  const {data: hotelData, pending, error} = useGetHotelInfo();
  const hotelInfo = HOTEL_INFO;
  console.log("hotel data", hotelData);

  if (pending) return <div className="container mt-6 mb-12">Loading...</div>;

  return (
    <div className="container mt-6 mb-12">
      <PropertyViewCard images={hotelData?.hotel?.photos}/>
      <div className="flex gap-6 mt-6">
        <div className="flex-1 space-y-8">
          <HotelMetaDetails hotel={hotelData?.hotel} info={hotelInfo}/>
          <HotelRoomsPicker rooms={hotelData?.rooms} />
          <HotelPolicy hotelPolicy={hotelInfo?.hotelPolicy} />
        </div>
        <div className="w-[340px] shrink-0 p-4 border border-border shadow-md rounded-xl sticky top-6 h-min">
          <HotelCheckoutCard rooms={hotelData?.rooms} cancellationPolicy={hotelInfo?.cancellationPolicy} /> 
        </div>
      </div>
    </div>
  );
};

export default HotelDetails
