import { useState } from "react";
import MainComponent from "./components/MaiComponent/MainComponent";
import { img } from "./images";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Signika', sans-serif",
    textColor: "#000",
    numbersColor: "#000",
    bgColor: "#fff",
    arrowColor: "#C1B1AD",
    heading: "4 Steps for Generating Content",
    data: [
      {
        img: img,
        title: "The Research Phase ",
        info: `There are many  companies in today's market that have "maskots" who act as icons for there overall brand image`,
        idWrapperBg: "#FDCFB1",
      },
      {
        img: img,

        title: "Selecting The Platform",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,

        idWrapperBg: "#FDCFB1",
      },
      {
        img: img,

        title: "Creation of Content",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        idWrapperBg: "#FDCFB1",
      },
      {
        img: img,
        title: "Analyzing the Data ",
        info: `There are many companies in today's market that `,
        idWrapperBg: "#FF9772",
      },
    ],
  });
  return (
    <div
      style={{
        "--bgColor": allData.bgColor,
        "--textColor": allData.textColor,
        "--numberColor": allData.numbersColor,

        fontFamily: allData.fontFamily,
      }}
    >
      <MainComponent {...allData} />
    </div>
  );
}

export default App;
