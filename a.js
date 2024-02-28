// const crypto = require("crypto");
import crypto from "crypto";

function trulyRandomNumber(min, max) {
  const randomBytes = crypto.randomBytes(4); // 4 bytes for a 32-bit integer
  const randomValue = randomBytes.readUInt32LE(0);

  // Map the random value to the desired range
  const scaledValue = min + (randomValue % (max - min + 1));

  return scaledValue;
}

const randomNumber = trulyRandomNumber(11, 33);
console.log(randomNumber);
