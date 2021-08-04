import React from "react";

export const random = () => {
  const rand = Math.random() * 1000;
  const randPercent = (rand * 100) / 999;
  const randX = randPercent / 100;

  return randX;
};
