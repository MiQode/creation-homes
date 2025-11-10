'use server';

import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function updateReservationDates(
  reservationId: string,
  startDate: Date,
  endDate: Date,
  totalPrice: number
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.isAdmin) {
      throw new Error('Unauthorized');
    }

    const reservation = await prisma.reservation.update({
      where: { id: reservationId },
      data: {
        startDate,
        endDate,
        totalPrice,
      },
      include: {
        user: true,
        listing: true,
      },
    });

    return {
      success: true,
      reservation,
    };
  } catch (error) {
    console.error('Error updating reservation dates:', error);
    return {
      success: false,
      error: 'Failed to update reservation dates',
    };
  }
}
