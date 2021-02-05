// generates a hint showing the amount of cows and bulls in the given guess
export function generate_hint(secret, guess) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (secret[i] === parseInt(guess[i])) {
      bulls += 1;
    } else if (secret.includes(parseInt(guess[i]))) {
      cows += 1;
    }
  }
  return "A" + bulls + "B" + cows;
}

// generates a random sequence of 4 non-repeating digits
export function get_rand() {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let number = [];
  for (let i = 1; i < 5; i++) {
    let r = Math.floor(Math.random() * nums.length);
    let rem = nums.splice(r, 1);
    number.push(rem[0]);
  }
  return number;
}

// makes sure that the guess is 4 digits long and unique
export function good_guess(guess) {
  console.log("guess is: " + guess);
  if (guess.length === 4) {
    let x = Array.from(new Set(guess));
    if (x.length === 4) {
      return true;
    } else {
      return false;
    }
  }
}
