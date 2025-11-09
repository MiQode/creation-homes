import prisma from '@/app/libs/prismadb';
import { AdminStats } from '../types';

export default async function getAdminStats(): Promise<AdminStats | null> {
  try {
    // Calculate date ranges
    const now = new Date();
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const twoMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 2, 1);

    // Total Revenue (current month)
    const currentRevenue = await prisma.reservation.aggregate({
      where: {
        createdAt: { gte: lastMonth },
        status: { not: 'cancelled' },
      },
      _sum: { totalPrice: true },
    });

    // Previous month revenue
    const previousRevenue = await prisma.reservation.aggregate({
      where: {
        createdAt: { gte: twoMonthsAgo, lt: lastMonth },
        status: { not: 'cancelled' },
      },
      _sum: { totalPrice: true },
    });

    const totalRevenue = currentRevenue._sum.totalPrice || 0;
    const prevRevenue = previousRevenue._sum.totalPrice || 0;
    const revenueChange =
      prevRevenue > 0
        ? (((totalRevenue - prevRevenue) / prevRevenue) * 100).toFixed(1)
        : '0';

    // Active Listings
    const activeListings = await prisma.listing.count();

    // Total Bookings (current month)
    const currentBookings = await prisma.reservation.count({
      where: { createdAt: { gte: lastMonth } },
    });

    const previousBookings = await prisma.reservation.count({
      where: { createdAt: { gte: twoMonthsAgo, lt: lastMonth } },
    });

    const bookingsChange =
      previousBookings > 0
        ? (
            ((currentBookings - previousBookings) / previousBookings) *
            100
          ).toFixed(1)
        : '0';

    // Active Users
    const activeUsers = await prisma.user.count();

    // Average Booking Value
    const avgBookingValue =
      currentBookings > 0 ? Math.round(totalRevenue / currentBookings) : 0;

    return {
      revenue: {
        value: totalRevenue,
        change: parseFloat(revenueChange),
        trend: parseFloat(revenueChange) >= 0 ? 'up' : 'down',
      },
      listings: {
        value: activeListings,
        change: 0,
        trend: 'up',
      },
      bookings: {
        value: currentBookings,
        change: parseFloat(bookingsChange),
        trend: parseFloat(bookingsChange) >= 0 ? 'up' : 'down',
      },
      users: {
        value: activeUsers,
        change: 0,
        trend: 'up',
      },
      quickStats: {
        occupancyRate: 78,
        avgBookingValue,
        customerSatisfaction: 4.8,
      },
    };
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return null;
  }
}
