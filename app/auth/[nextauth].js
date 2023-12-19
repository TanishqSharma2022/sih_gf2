// pages/api/auth/[...nextauth].js
import { initSupabase } from '../../../lib/initSupabase';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const { user, error } = await initSupabase().supabase.auth.signIn({
          email: credentials.username,
          password: credentials.password,
        });

        if (error) {
          throw new Error(error.message);
        }

        // Check if email is verified
        if (user && !user.confirmed_at) {
          throw new Error('Email not verified. Please check your inbox for the verification email.');
        }

        return Promise.resolve(user);
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    signUp: '/auth/register',
  },
});
