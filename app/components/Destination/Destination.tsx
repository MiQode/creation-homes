import Link from 'next/link';
import getListings, { IListingsParams } from '@/app/actions/getListings';
import getCurrentUser from '@/app/actions/getCurrentUser';

// import Destinations from '../../api/destination';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';
import EmptyState from '../EmptyState';
import ListingCard from '../listings/ListingCard';

interface RoomsProps {
  searchParams?: Promise<IListingsParams> | IListingsParams;
}

const Destination = async ({ searchParams }: RoomsProps) => {
  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };

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
    // <div className={`wpo-destination-area ${props.dClass}`}>
    <div className="wpo-destination-area section-padding">
      <div className="container">
        <SectionTitle
          MainTitle={'Our Most Populer Destination'}
          link={'/destination'}
        />
        <div className="destination-wrap">
          <div className="row">
            {listings.slice(0, 3).map((listing, ditem) => (
              <div className="col-lg-4 col-md-6 col-12" key={ditem}>
                <ListingCard currentUser={currentUser} data={listing} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
