// app/components/Rooms/Rooms.tsx
import getListings, { IListingsParams } from '@/app/actions/getListings';
import getCurrentUser from '@/app/actions/getCurrentUser';
import EmptyState from '../EmptyState';
import ListingCard from '../listings/ListingCard';
import SectionTitleS2 from '../SectionTitleS2'; // adjust path as needed

interface RoomsProps {
  searchParams?: Promise<IListingsParams> | IListingsParams;
}

const Rooms = async ({ searchParams }: RoomsProps) => {
  let currentUser = null;
  let listings = [];

  // Await searchParams in case it's a Promise (Next.js 15+)
  const resolvedSearchParams = searchParams
    ? await Promise.resolve(searchParams)
    : {};

  try {
    listings = await getListings(resolvedSearchParams);
  } catch (error) {
    console.error('Error fetching listings:', error);
  }

  try {
    currentUser = await getCurrentUser();
  } catch (error) {
    console.error('Error fetching current user:', error);
  }

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <div className="wpo-room-area section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-md-8">
            <SectionTitleS2 MainTitle={'Our Classy Homes'} />
          </div>
        </div>
        <div className="room-wrap ">
          <div className="row">
            {listings.slice(0, 4).map((listing) => (
              <div className="col-lg-4 col-md-6 col-12 mb-8" key={listing.id}>
                <ListingCard currentUser={currentUser} data={listing} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
