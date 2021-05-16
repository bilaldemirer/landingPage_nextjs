import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';

import {AuthProvider} from "../../auth";
import {ThemeProvider, CSSReset } from "@chakra-ui/core";

export default function CustomApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset />
      <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}
