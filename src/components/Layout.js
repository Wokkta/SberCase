import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children,logged,setLogged}) {
  return (
    <>
      <Header logged={logged} setLogged={setLogged} />
      {children}
      <Footer />
    </>
  );
  
}