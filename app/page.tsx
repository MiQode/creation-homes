// ✅ Tell Next.js this page must be rendered dynamically at runtime
export const dynamic = 'force-dynamic';

// Optionally, also disable cache if needed:
export const revalidate = 0;

import getCurrentUser from './actions/getCurrentUser';
import getListings, { IListingsParams } from './actions/getListings';

import Container from './components/Container';
import EmptyState from './components/EmptyState';
import ListingCard from './components/listings/ListingCard';
import Rooms from './components/Rooms/Rooms';
import About from './components/about';
import Destination from './components/Destination';
import ServiceSection from './components/ServiceSection';
import Testimonial from './components/Testimonial';
import Newslatter from './components/Newslatter/Newslatter';
import Footer from './components/footer';
interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  // const listings = await getListings(searchParams);
  // const currentUser = await getCurrentUser();
  let currentUser = null;

  let listings = [];

  try {
    listings = await getListings(searchParams);
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
    // <ClientOnly>
    <>
      <Rooms />
      {/* <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((listing) => {
            return (
              <ListingCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            );
          })}
        </div>
      </Container> */}
      <About />
      {/* <Destination /> */}
      <ServiceSection />
      {/* <PricingSection /> */}
      {/* <Testimonial /> */}
      {/* <BlogSection /> */}
      <Newslatter />
      <Footer />
    </>
  );
};

export default Home;
