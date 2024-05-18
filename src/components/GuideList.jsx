import React from "react";

const guideSteps = ["Create your character", 
                    "Catch a pal", 
                    "Survive the first night", 
                    "Craft clothes", 
                    "Build a base", 
                    "Explore biomes", 
                    "Defeat Alpha pals", 
                    "Fight the first tower boss"]

function GuideList() {
  return (
    <div>
      <ul>
         {guideSteps.map((step, index) => (
         <li key={index} > <GuideItem item={step}/> </li>
         ))}
      </ul>
    </div>
  )
};

function GuideItem(props) {
  return (
    <div className="guide-item">
      <p>{props.item}</p></div>
  ) 
}

export {GuideList, GuideItem}