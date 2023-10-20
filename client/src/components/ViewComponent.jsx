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
      <div className="">
        {codePalName} {codePalAvatar} Viewing Area
      </div>

      <div className="d-flex flex-row justify-content-end">
        <div className="d-flex flex-column ">Here goes the buy panel</div>
        <div className="flex-fill">
          <p className="card-text">
            Current Emotional Health: {emotional} happiness
          </p>
          <p className="card-text">
            Current Physical Health: {physical} strength
          </p>
          <p className="card-text">Current Position: {position} x-direction</p>
          <button type="button" className="btn btn-primary" onClick={moveLeft}>
            Left
          </button>{" "}
          <button type="button" className="btn btn-primary" onClick={moveRight}>
            Right
          </button>{" "}
          <button type="button" className="btn btn-primary" onClick={feedFood}>
            Food
          </button>{" "}
          <button type="button" className="btn btn-primary" onClick={playToy}>
            Play
          </button>{" "}
        </div>
        <div>Here goes the metrics panel</div>
      </div>
    </main>
  );
}

export default ViewCodePal;
