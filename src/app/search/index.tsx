import Filter from './filter';
import SortFilter from './filter/components/sort-filter';
import Hotels from './hotels';
import PaginationFilter from './filter/components/pagination-filter';
import useGetHotels from './hotels/hooks/useGetHotels';
import { SEARCH_RESULT_PAGE_LIMIT } from '@/config/app.config';

const SearchPage = () => {
  const { data, pending, city, error } = useGetHotels();
  const hotels = data?.content || [];
  const totalEntries = data?.totalElements;
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
        {hotels.length > 0 && <PaginationFilter totalEntries={totalEntries} limit={SEARCH_RESULT_PAGE_LIMIT} className={undefined} />}
      </section>
    </div>
  );
};

export default SearchPage;
