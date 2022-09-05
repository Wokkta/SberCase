import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children,logged}) {
  return (
    <>
      <Header logged={logged} />
      {children}
      <Footer />
    </>
  );
  
}