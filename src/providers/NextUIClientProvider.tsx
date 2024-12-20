'use client';

import { NextUIProvider } from '@nextui-org/react';
import { PropsWithChildren } from 'react';

function NextUIClientProvider({ children }: PropsWithChildren) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export default NextUIClientProvider;
