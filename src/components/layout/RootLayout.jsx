import { Outlet } from "react-router-dom";
import Layout from "./Layout";
import ScrollToTop from "./ScrollToTop";

export default function RootLayout() {
  return (
    <Layout>
      <ScrollToTop />
      <Outlet />
    </Layout>
  );
}
