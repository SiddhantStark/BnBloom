import React from 'react';
import Filter from './filter';
import SortFilter from './filter/components/sort-filter';
import Hotels from './hotels';
import PaginationFilter from './filter/components/pagination-filter';
import useQuery from '@/lib/hooks/useQuery';
import API_CONFIG from '@/config/api.config';
import useGetHotels from './hotels/hooks/useGetHotels';

const SearchPage = () => {
  const { data, pending, city, error } = useGetHotels();
  const hotels = data?.content || [];
//   console.log('hotels', hotels);

  return (
    <div className="container flex gap-4 mt-6 mb-12">
      <Filter />
      <section className="flex-1 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">{city}: {hotels.length} properties found</h1>
          <SortFilter />
        </div>
        <Hotels error={error} isLoading={pending} data={hotels} />
        {hotels.length > 0 && <PaginationFilter />}
      </section>
    </div>
  );
};

export default SearchPage;
