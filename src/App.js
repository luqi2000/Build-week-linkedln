import "./App.css";
import MyFooter from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MainSection from "./components/MainSection";
// import ProfileSideBar from "./components/ProfileSideBar";

function App() {
  return (
    <>
      <div className="bg-light">
        <MyNavbar />
        {/* <ProfileSideBar /> */}
        <MainSection />
        <MyFooter />
      </div>
    </>
  );
}

export default App;
