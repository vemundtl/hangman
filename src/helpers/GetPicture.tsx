import pic1 from "../images/hangman-step-1.png";
import pic2 from "../images/hangman-step-2.png";
import pic3 from "../images/hangman-step-3.png";
import pic4 from "../images/hangman-step-4.png";
import pic5 from "../images/hangman-step-5.png";
import pic6 from "../images/hangman-step-6.png";
import pic7 from "../images/hangman-step-7.png";
import pic8 from "../images/hangman-step-8.png";
import pic9 from "../images/hangman-step-9.png";
import pic10 from "../images/hangman-step-10.png";
import pic11 from "../images/hangman-step-11.png";

export const getPicture = (wrongGuesses: number) => {
  switch (wrongGuesses) {
    case 0: {
      return pic1;
    }
    case 1: {
      return pic2;
    }
    case 2: {
      return pic3;
    }
    case 3: {
      return pic4;
    }
    case 4: {
      return pic5;
    }
    case 5: {
      return pic6;
    }
    case 6: {
      return pic7;
    }
    case 7: {
      return pic8;
    }
    case 8: {
      return pic9;
    }
    case 9: {
      return pic10;
    }
    case 10: {
      return pic11;
    }
    default: {
      return pic1;
    }
  }
};
