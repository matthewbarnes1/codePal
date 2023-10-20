import { useState, useEffect } from "react";

function ViewCodePal() {
  // Change the default state of temp to 75 degrees.
  const [emotional, setEmotional] = useState(10);
  const [physical, setPhysical] = useState(10);
  const [position, setPosition] = useState(100);

  // const codePalName = props.pet.name;
  const codePalName = "BRUNO";
  // const codePalName = props.pet.avatar;
  const codePalAvatar = "🐶";

  // const currentToy = props.toy;
  // const currentFood = props.food;

  // useEffect for metrics and doc title emoticon
  useEffect(() => {
    // render metrics panel
    // render emoticon for doc title
  });

  useEffect(() => {
    // render position
  }, [position]);

  // Handler for moving left the temp by 1
  const moveLeft = () => {
    setPosition(position - 1);
  };

  // Handler for decreasing the temp by 1
  const moveRight = () => {
    setPosition(position + 1);
  };

  // Handler for decreasing the temp by 1
  const feedFood = () => {
    // use currentFood.eH for emotional
    // use currentFood.pH for emotional
    setEmotional(emotional + 2);
    setPhysical(physical + 1);
  };

  const playToy = () => {
    setEmotional(emotional + 1);
    setPhysical(physical + 2);
  };

  return (
    <main>
      <div className="cp-dashboard">
        <div className="p-5 m-2 text-center">
          {codePalName} {codePalAvatar} Viewing Area
        </div>
        <div className="text-center cp-dashboard-alert">
          Comments will go here
        </div>
        <div className="cp-viewing-area">
          <div className="cp-viewing-area-left">Here goes the buy panel</div>
          <div className="cp-viewing-area-center">
            <p className="">Current Emotional Health: {emotional} happiness</p>
            <p className="">Current Physical Health: {physical} strength</p>
            <p className="">Current Position: {position} x-direction</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={moveLeft}
            >
              Left
            </button>{" "}
            <button
              type="button"
              className="btn btn-primary"
              onClick={moveRight}
            >
              Right
            </button>{" "}
            <button
              type="button"
              className="btn btn-primary"
              onClick={feedFood}
            >
              Food
            </button>{" "}
            <button type="button" className="btn btn-primary" onClick={playToy}>
              Play
            </button>{" "}
          </div>
          <div className="cp-viewing-area-right">
            Here goes the metrics panel
          </div>
        </div>
      </div>
    </main>
  );
}

export default ViewCodePal;
