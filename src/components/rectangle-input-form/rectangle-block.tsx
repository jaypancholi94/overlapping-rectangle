import {
  Rectangle,
  RectangleInputPositionProps,
  RectangleNumberProps,
} from "../../type";

type RectangleInputProps = {
  position: RectangleInputPositionProps["position"];
  rectangleNumber: RectangleNumberProps["rectangleNumber"];
  value: number | null;
  setValue: (value: number) => void;
};
type RectangleBlockProps = {
  value: Rectangle;
  setValue: (value: Rectangle) => void;
  rectangleNumber: RectangleNumberProps["rectangleNumber"];
};

const RectangleInput = ({
  position,
  rectangleNumber,
  value,
  setValue,
}: RectangleInputProps) => {
  return (
    <div className="flex flex-col text-center">
      <label htmlFor={`rect-one-${position}`} className="font-bold capitalize">
        {position}
      </label>
      <input
        type="number"
        className="border-gray-700 border"
        id={`rect-${rectangleNumber}-${position}`}
        value={`${value}`}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
};

export const RectangleBlock = ({
  value,
  setValue,
  rectangleNumber,
}: RectangleBlockProps) => {
  return (
    <div className="">
      <h2 className="font-bold text-center text-md">
        Rectangle {rectangleNumber}
      </h2>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="grid grid-cols-subgrid p-4 text-center col-span-3">
          <div className="bg-gray-100 p-4 text-center col-start-2 rounded">
            <RectangleInput
              position="top"
              rectangleNumber={rectangleNumber}
              value={value?.top ? value.top : null}
              setValue={(val) => setValue({ ...value, top: val })}
            />
          </div>
        </div>
        <div className="bg-gray-100 rounded p-4 text-center">
          <RectangleInput
            position="left"
            rectangleNumber={rectangleNumber}
            value={value?.left ? value.left : null}
            setValue={(val) => setValue({ ...value, left: val })}
          />
        </div>
        <div className=""></div>
        <div className="bg-gray-100 rounded p-4 text-center">
          <RectangleInput
            position="right"
            rectangleNumber={rectangleNumber}
            value={value?.right ? value.right : null}
            setValue={(val) => setValue({ ...value, right: val })}
          />
        </div>
        <div className="grid grid-cols-subgrid p-4 text-center col-span-3">
          <div className="bg-gray-100 p-4 text-center col-start-2 rounded">
            <RectangleInput
              position="bottom"
              rectangleNumber={rectangleNumber}
              value={value?.bottom ? value.bottom : null}
              setValue={(val) => setValue({ ...value, bottom: val })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
