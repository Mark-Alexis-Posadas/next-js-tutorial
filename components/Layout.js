import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="wrapper">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
