export type Rectangle = {
  left: number | null;
  right: number | null;
  top: number | null;
  bottom: number | null;
};

export type RectangleNumberProps = {
  rectangleNumber: "one" | "two";
};

export type RectangleInputPositionProps = {
  position: "left" | "right" | "top" | "bottom";
};
