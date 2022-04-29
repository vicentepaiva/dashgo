import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider } from 'react-query';


import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContent';
import { makeServer } from '../services/mirage/index';
import { queryClient } from '../services/queryClients';

//antes da função verificar se o ambiente é o correto
if (process.env.NODE_ENV === 'development') {
  makeServer();
}



//resetCSS serve para remover todas as estilizações padrão do html
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
    <ChakraProvider  theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>  
    </ChakraProvider>

    <ReactQueryDevtools />
    </QueryClientProvider>
  ) 
}

export default MyApp
