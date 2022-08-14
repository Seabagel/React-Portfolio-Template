// import logo from './logo.svg';
import "./styles/App.css";
import Main from "./main";
import Jumbotron from "./components/jumbotron";

export default function App() {
  return (
    <>
      <Jumbotron
        backgroundUrl={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
        }
      />
      <Main />
    </>
  );
}
