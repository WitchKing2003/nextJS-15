import Footer from "./Footer/Page";
import Header from "./Header/Page";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <h1>Hello World App Layout</h1>
      {children}

      <div className="">
        <Footer />
      </div>
    </>
  );
}
