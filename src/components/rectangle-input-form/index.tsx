import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { Rectangle } from "../../type";
import { isOverlapping, isValidRectangles } from "../../utils/rectangle";
import { RectangleBlock } from "./rectangle-block";

type RectangleInputFormProps = {
  rectangleOne: Rectangle;
  rectangleTwo: Rectangle;
  setRectangleOne: (rectangle: Rectangle) => void;
  setRectangleTwo: (rectangle: Rectangle) => void;
};

export const RectangleInputForm = ({
  rectangleOne,
  setRectangleOne,
  rectangleTwo,
  setRectangleTwo,
}: RectangleInputFormProps) => {
  const [error, setError] = useState<string>(
    isValidRectangles(rectangleOne, rectangleTwo),
  );
  const [overlap, setOverlap] = useState<boolean | null>(false);

  console.log(rectangleOne, rectangleTwo, error);
  const checkOverlapping = () => {
    setError("");
    const isRectanglesValid = isValidRectangles(rectangleOne, rectangleTwo);
    if (isRectanglesValid !== "") {
      setError(isRectanglesValid);
      return;
    }
    const isOverlap = isOverlapping(rectangleOne, rectangleTwo);
    console.log({ isOverlap });
    setOverlap(isOverlap);
  };
  const renderMesage = () => {
    if (error) return <p className="text-red-500 font-bold mt-8">{error}</p>;
    if (overlap && error === "") {
      return (
        <p className="text-green-500 font-bold mt-8">
          Two rectangles are overlapping
          <ConfettiExplosion
            force={0.8}
            duration={3000}
            particleCount={250}
            width={1600}
          />
        </p>
      );
    }
    return (
      <>
        <p className="text-red-400 font-bold mt-8">
          Rectangle is not overlapping
        </p>
      </>
    );
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <RectangleBlock
          value={rectangleOne}
          setValue={setRectangleOne}
          rectangleNumber="one"
        />
        <RectangleBlock
          value={rectangleTwo}
          setValue={setRectangleTwo}
          rectangleNumber="two"
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-max"
        onClick={checkOverlapping}
      >
        Check Overlapping
      </button>
      {renderMesage()}
    </div>
  );
};
