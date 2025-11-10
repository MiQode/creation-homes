// ✅ Tell Next.js this page must be rendered dynamically at runtime
export const dynamic = 'force-dynamic';

// Optionally, also disable cache if needed:
export const revalidate = 0;

import getCurrentUser from './actions/getCurrentUser';
import getListings, { IListingsParams } from './actions/getListings';

import EmptyState from './components/EmptyState';
import Banner from './components/banner/banner';
import HeroSection from './components/HeroSection';
import Rooms from './components/Rooms/Rooms';
import About from './components/about';
import Amenities from './components/Amenities/Amenities';
import Location from './components/Location/Location';
import Destination from './components/Destination/Destination';
import ServiceSection from './components/ServiceSection';
import Testimonial from './components/Testimonial';
import Newslatter from './components/Newslatter/Newslatter';
import Footer from './components/footer';
import Scrollbar from './components/scrollbar';
import PropertyMap from './components/PropertyMap/PropertyMap';
interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  // const listings = await getListings(searchParams);
  // const currentUser = await getCurrentUser();
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.5135083815635!2d34.197216999999995!3d0.7082390000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwNDInMjkuNyJOIDM0wrAxMSc1MC4wIkU!5e0!3m2!1sen!2sug!4v1762508999207!5m2!1sen!2sug';
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
      <HeroSection />
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
      <Amenities />
      {/* <ServiceSection /> */}
      {/* <PricingSection /> */}
      {/* <Testimonial /> */}
      {/* <BlogSection /> */}
      {/* <Newslatter /> */}
      <PropertyMap
        embedUrl={mapEmbedUrl}
        title="Property Location"
        address="Griefield Road, Plot 37, Nyangole Tororo Municipality, Eastern Region, Uganda"
      />
      <Footer />
      {/* <Scrollbar /> */}
    </>
  );
};

export default Home;
