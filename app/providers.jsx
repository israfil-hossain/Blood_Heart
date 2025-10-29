'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from '@/Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';

export function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}
