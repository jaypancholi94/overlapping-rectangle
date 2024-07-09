import { useState } from "react";
import { RectangleInputForm } from "./components/rectangle-input-form";
import { Rectangle } from "./type";

const App = () => {
  const [rectangleOne, setRectangleOne] = useState<Rectangle>({
    left: null,
    right: null,
    top: null,
    bottom: null,
  });
  const [rectangleTwo, setRectangleTwo] = useState<Rectangle>({
    left: null,
    right: null,
    top: null,
    bottom: null,
  });

  return (
    <main className="grid gap-4">
      <div className="bg-gray-800 p-2">
        <h1 className="font-bold text-white text-center">
          Overlapping Rectangles
        </h1>
      </div>
      <div className="container mx-auto">
        <RectangleInputForm
          rectangleOne={rectangleOne}
          setRectangleOne={(rectangle) => setRectangleOne(rectangle)}
          rectangleTwo={rectangleTwo}
          setRectangleTwo={(rectangle) => setRectangleTwo(rectangle)}
        />
      </div>
    </main>
  );
};

export default App;
