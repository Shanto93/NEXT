import React from "react";

function getRandom(num: number) {
  return Math.floor(Math.random() * num);
}
const Reviews = () => {
  const random = getRandom(2);

  if (random === 0) {
    throw new Error("Error loading reviews");
  }

  return (
    <div>
      <h1>Reviews:</h1>
      <p>Some reviews are given below:</p>
      <ul>
        <li>Review 1</li>
        <li>Review 2</li>
        <li>Review 3</li>
        <li>Review 4</li>
        <li>Review 5</li>
        <li>Review 6</li>
      </ul>
    </div>
  );
};

export default Reviews;
