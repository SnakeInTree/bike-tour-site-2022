import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import { store } from "../store/store";

import "@/styles/globals.css";
import "@/styles/cyclist.css";
import "@/styles/leaflet_overrides.css";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}
