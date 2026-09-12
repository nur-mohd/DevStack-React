import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";
import type { iTechnology } from "./types/TechnologyType";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const TechnologyFetch = async():Promise<iTechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}


function App() {
  const TechnologyPromise = TechnologyFetch();
  return (
    <>
      <Nav/>
      <Banner/>
       <Suspense fallback={<h2>Loading.....</h2>}>
          <TechnologySection TechnologyPromise={TechnologyPromise}/>
       </Suspense>
         <Footer />
         <ToastContainer />
    </>
  )
}

export default App
