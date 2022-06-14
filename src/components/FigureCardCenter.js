import JackOfClub from "./figureComponents/JackOfClub";
import JackOfDiamond from "./figureComponents/JackOfDiamond";
import JackOfHeart from "./figureComponents/JackOfHeart";
import JackOfSpade from "./figureComponents/JackOfSpade";
import KingOfClub from "./figureComponents/KingOfClub";
import KingOfDiamond from "./figureComponents/KingOfDiamond";
import KingOfHeart from "./figureComponents/KingOfHeart";
import KingOfSpade from "./figureComponents/KingOfSpade";
import QueenOfClub from "./figureComponents/QueenOfClub";
import QuennOfDiamond from "./figureComponents/QueenOfDiamond";
import QueenOfHeart from "./figureComponents/QueenOfHeart";
import QueenOfSpade from "./figureComponents/QueenOfSpade";

const FigureCardCenter = ({ name, number }) => {
  const JackContent = () => {
    if (number === 11) {
      if (name === "spade") {
        return <JackOfSpade />;
      }
      if (name === "club") {
        return <JackOfClub />;
      }
      if (name === "heart") {
        return <JackOfHeart />;
      }
      if (name === "diamond") {
        return <JackOfDiamond />;
      }
    }
    if (number === 12) {
      if (name === "spade") {
        return <QueenOfSpade />;
      }
      if (name === "club") {
        return <QueenOfClub />;
      }
      if (name === "heart") {
        return <QueenOfHeart />;
      }
      if (name === "diamond") {
        return <QuennOfDiamond />;
      }
    }
    if (number === 13) {
      if (name === "spade") {
        return <KingOfSpade />;
      }
      if (name === "club") {
        return <KingOfClub />;
      }
      if (name === "heart") {
        return <KingOfHeart />;
      }
      if (name === "diamond") {
        return <KingOfDiamond />;
      }
    }
  };

  return (
    <div className="figure-picture">
      <JackContent />
    </div>
  );
};

export default FigureCardCenter;
