export const values = [
  { id: 0, value: "", changed: false },
  { id: 1, value: "", changed: false },
  { id: 2, value: "", changed: false },
  { id: 3, value: "", changed: false },
  { id: 4, value: "", changed: false },
  { id: 5, value: "", changed: false },
  { id: 6, value: "", changed: false },
  { id: 7, value: "", changed: false },
  { id: 8, value: "", changed: false },
];

export const validate = (boxValues) => {
  if (
    (boxValues[0].value === boxValues[1].value &&
      boxValues[1].value === boxValues[2].value &&
      boxValues[2].value === "X") ||
    (boxValues[3].value === boxValues[4].value &&
      boxValues[4].value === boxValues[5].value &&
      boxValues[5].value === "X") ||
    (boxValues[6].value === boxValues[7].value &&
      boxValues[7].value === boxValues[8].value &&
      boxValues[8].value === "X")
  ) {
    return "You Win.";
  } else if (
    (boxValues[0].value === boxValues[1].value &&
      boxValues[1].value === boxValues[2].value &&
      boxValues[2].value === "O") ||
    (boxValues[3].value === boxValues[4].value &&
      boxValues[4].value === boxValues[5].value &&
      boxValues[5].value === "O") ||
    (boxValues[6].value === boxValues[7].value &&
      boxValues[7].value === boxValues[8].value &&
      boxValues[8].value === "O")
  ) {
    return "Rival Win.";
  } else if (
    (boxValues[0].value === boxValues[3].value &&
      boxValues[3].value === boxValues[6].value &&
      boxValues[6].value === "X") ||
    (boxValues[1].value === boxValues[4].value &&
      boxValues[4].value === boxValues[7].value &&
      boxValues[7].value === "X") ||
    (boxValues[2].value === boxValues[5].value &&
      boxValues[5].value === boxValues[8].value &&
      boxValues[8].value === "X")
  ) {
    return "You Win.";
  } else if (
    (boxValues[0].value === boxValues[3].value &&
      boxValues[3].value === boxValues[6].value &&
      boxValues[6].value === "O") ||
    (boxValues[1].value === boxValues[4].value &&
      boxValues[4].value === boxValues[7].value &&
      boxValues[7].value === "O") ||
    (boxValues[2].value === boxValues[5].value &&
      boxValues[5].value === boxValues[8].value &&
      boxValues[8].value === "O")
  ) {
    return "Rival Win.";
  } else if (
    (boxValues[0].value === boxValues[4].value &&
      boxValues[4].value === boxValues[8].value &&
      boxValues[8].value === "O") ||
    (boxValues[2].value === boxValues[4].value &&
      boxValues[4].value === boxValues[6].value &&
      boxValues[6].value === "O")
  ) {
    return "Rival Win.";
  } else if (
    (boxValues[0].value === boxValues[4].value &&
      boxValues[4].value === boxValues[8].value &&
      boxValues[8].value === "X") ||
    (boxValues[2].value === boxValues[4].value &&
      boxValues[4].value === boxValues[6].value &&
      boxValues[6].value === "X")
  ) {
    return "You Win.";
  }
};
