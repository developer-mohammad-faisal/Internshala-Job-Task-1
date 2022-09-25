import { Fragment } from "react";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";

function App() {
  return (
    <Fragment>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </Fragment>
  );
}

export default App;
