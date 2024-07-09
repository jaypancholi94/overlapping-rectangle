import { Rectangle } from "../type";

export const isValidRectangles = (
  rectangleOne: Rectangle,
  rectangleTwo: Rectangle,
): string => {
  if (
    rectangleOne.left === null ||
    rectangleOne.right === null ||
    rectangleOne.top === null ||
    rectangleOne.bottom === null ||
    rectangleTwo.left === null ||
    rectangleTwo.right === null ||
    rectangleTwo.top === null ||
    rectangleTwo.bottom === null
  ) {
    return "Please fill all the sides";
  }
  if (
    rectangleOne.left >= rectangleOne.right ||
    rectangleOne.bottom >= rectangleOne.top ||
    rectangleTwo.left >= rectangleTwo.right ||
    rectangleTwo.bottom >= rectangleTwo.top
  ) {
    return "Please enter valid value for both rectangles";
  }
  return "";
};

export const isOverlapping = (
  rectangleOne: Rectangle,
  rectangleTwo: Rectangle,
): boolean => {
  if (
    rectangleOne.left === null ||
    rectangleOne.right === null ||
    rectangleOne.top === null ||
    rectangleOne.bottom === null ||
    rectangleTwo.left === null ||
    rectangleTwo.right === null ||
    rectangleTwo.top === null ||
    rectangleTwo.bottom === null
  )
    return false;
  if (
    rectangleOne.top < rectangleTwo.bottom ||
    rectangleTwo.top < rectangleOne.bottom
  )
    return false;

  if (
    rectangleOne.right < rectangleTwo.left ||
    rectangleTwo.right < rectangleOne.left
  )
    return false;

  return true;
};
