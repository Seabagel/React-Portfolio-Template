// import logo from './logo.svg';
import "./styles/App.css";
import Main from "./Main";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
// always add mobile.css after everything
import "./styles/mobile.css"

export default function App() {
  return (
    <>
      <Jumbotron
        backgroundUrl={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
        }
      />
      <Main />
      <Footer />
    </>
  );
}
