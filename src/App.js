import MainComponent from "./components/MaiComponent/MainComponent";
import { img } from "./images";

function App() {
  const allData = {
    fontFamily: "'Signika', sans-serif",
    primaryColor: "#000",
    secondaryColor: "#fff",
    arrowColor: "#C1B1AD",
    heading: "4 Steps for Generating Content",
    data: [
      {
        img: img,
        title: "The Research Phase",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        bg: "#FDCFB1",
      },
      {
        img: img,

        title: "Selecting The Platform",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,

        bg: "#FDCFB1",
      },
      {
        img: img,

        title: "Creation of Content",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        bg: "#FDCFB1",
      },
      {
        img: img,
        title: "Analyzing the Data",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        bg: "#FF9772",
      },
    ],
  };
  return (
    <div
      style={{
        "--primaryColor": allData.primaryColor,
        "--secondaryColor": allData.secondaryColor,
        fontFamily: allData.fontFamily,
      }}
    >
      <MainComponent {...allData} />
    </div>
  );
}

export default App;
