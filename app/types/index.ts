import { Listing, Reservation, User } from '@prisma/client';

export type SafeListing = Omit<Listing, 'createdAt'> & {
  createdAt: string;
};

export type SafeReservation = Omit<
  Reservation,
  'createdAt' | 'startDate' | 'endDate' | 'listing'
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeUser = Omit<
  User,
  'createdAt' | 'updatedAt' | 'emailVerified'
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

// types/admin.ts (create this file)
export interface AdminStats {
  revenue: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
  listings: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
  bookings: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
  users: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
  quickStats: {
    occupancyRate: number;
    avgBookingValue: number;
    customerSatisfaction: number;
  };
}

export interface FormattedBooking {
  id: string;
  guest: string;
  guestEmail: string | null;
  guestImage: string | null;
  property: string;
  propertyImage: string;
  checkIn: string;
  checkOut: string;
  amount: number;
  status: string;
  createdAt: string;
}

export interface RevenueData {
  month: string;
  revenue: number;
}
