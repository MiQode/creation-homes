import prisma from '@/app/libs/prismadb';

export default async function getRevenueData(months: number = 6) {
  try {
    const revenueData = [];
    const now = new Date();

    for (let i = months - 1; i >= 0; i--) {
      const startDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const endDate = new Date(
        now.getFullYear(),
        now.getMonth() - i + 1,
        0,
        23,
        59,
        59
      );

      const monthRevenue = await prisma.reservation.aggregate({
        where: {
          createdAt: { gte: startDate, lte: endDate },
          status: { not: 'cancelled' },
        },
        _sum: { totalPrice: true },
      });

      revenueData.push({
        month: startDate.toLocaleDateString('en-US', { month: 'short' }),
        revenue: monthRevenue._sum.totalPrice || 0,
      });
    }

    return revenueData;
  } catch (error) {
    console.error('Error fetching revenue data:', error);
    return [];
  }
}
