import { useState } from "react";
import Arrow from "./images/Arrow";
import EntryIcon from "./images/EntryIcon";
import ProcessingIcon from "./images/ProcessingIcon";
import TransformationIcon from "./images/TransformationIcon";
import InteractionIcon from "./images/InteractionIcon";
import OutcomeIcon from "./images/OutcomeIcon";
import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    mainBg: "#fff",
    secondaryColor: "#000",
    arrow: <Arrow color="#000" />,
    directionArrowColor: "#000",
    tagline: "Informed Desicison-Making",
    taglineColor: "#000",
    data: [
      {
        icon: <EntryIcon color="#008AA6" />,
        title: "Data Entry Point",
        titleColor: "#000",
        background: "rgb(0, 138, 166, 0.2)",
        info: "Raw data",
        infoColor: "#000",
      },
      {
        icon: <ProcessingIcon color="#DF644A" />,
        title: "AI Processing",
        titleColor: "#000",
        background: "#F2F4F7",
        info: "Interpretation & Categorization   ",
        infoColor: "#000",
      },
      {
        icon: <TransformationIcon color="#DF644A" />,
        title: "Data Transformation",
        titleColor: "#000",
        background: "#F2F4F7",
        info: "Data Optimization",
        infoColor: "#000",
      },
      {
        icon: <InteractionIcon color="#DF644A" />,
        title: "User Interaction ",
        titleColor: "#000",
        background: "#F2F4F7",
        info: "Queries & Insights",
        infoColor: "#000",
      },
      {
        icon: <OutcomeIcon color="#008AA6" />,
        title: "Outcome ",
        titleColor: "#000",
        background: "rgb(0, 138, 166, 0.2)",
        infoColor: "#000",
      },
    ],
    showLoopBack: false,
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
