import Header from "../common/Header";
import Footer from "../common/Footer";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
<Header />
{children}
<Footer />
</>
);
}

export default Layout;