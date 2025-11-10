'use server';

import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function updateReservationStatus(
  reservationId: string,
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed' | 'no-show'
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.isAdmin) {
      throw new Error('Unauthorized');
    }

    const reservation = await prisma.reservation.update({
      where: { id: reservationId },
      data: { status },
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
    console.error('Error updating reservation status:', error);
    return {
      success: false,
      error: 'Failed to update reservation status',
    };
  }
}
