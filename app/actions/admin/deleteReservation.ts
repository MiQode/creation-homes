'use server';

import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function deleteReservation(reservationId: string) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.isAdmin) {
      throw new Error('Unauthorized');
    }

    await prisma.reservation.delete({
      where: { id: reservationId },
    });

    return { success: true };
  } catch (error) {
    console.error('Error deleting reservation:', error);
    return {
      success: false,
      error: 'Failed to delete reservation',
    };
  }
}
