import { User, Listing } from '@prisma/client';

export type SafeListings = Omit<Listing, 'createdAt'> & {
  createdAt: string;
};

export type SafeUser = Omit<User, 'createdAt' | 'updatedAt' | 'emailVerfied'> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
