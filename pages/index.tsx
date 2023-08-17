import type { NextPage } from "next";
import MainView from "../views";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
  return (
    <>
      <MainView />;
      <ToastContainer />
    </>
  );
};

export default Home;
