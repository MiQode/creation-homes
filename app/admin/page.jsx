import AdminDashboard from './../components/AdminDashboard/AdminDashboard';
import getReservations from '../actions/getReservations';
import getListings from '../actions/getListings';
import getCurrentUser from '../actions/getCurrentUser';
import getAdminStats from '../actions/getAdminStats';
import getRevenueData from '../actions/getRevenueData';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const currentUser = await getCurrentUser();

  // Check if user is admin (you can add isAdmin field to User model)
  if (!currentUser || !currentUser.isAdmin) {
    redirect('/');
  }

  // Fetch data directly in Server Component
  const allReservations = await getReservations({});
  const stats = await getAdminStats();
  const revenueData = await getRevenueData(6);

  // Format reservations for display
  const recentBookings = allReservations.slice(0, 10).map((reservation) => ({
    id: reservation.id,
    guest: reservation.user?.name || 'Guest User',
    guestEmail: reservation.user?.email,
    guestImage: reservation.user?.image,
    property: reservation.listing?.title || 'Property',
    propertyImage: reservation.listing?.imageSrc,
    checkIn: reservation.startDate,
    checkOut: reservation.endDate,
    amount: reservation.totalPrice,
    status: reservation.status || 'confirmed',
    createdAt: reservation.createdAt,
  }));

  const allProperties = await getListings({});

  return (
    <AdminDashboard
      initialBookings={recentBookings}
      properies={allProperties}
      initialStats={stats}
      initialRevenueData={revenueData}
      currentUser={currentUser}
    />
  );
}
