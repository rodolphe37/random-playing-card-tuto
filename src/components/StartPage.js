import Cards from "../assets/startPage/cards.png";

const StartPage = ({ setStartGame }) => {
  return (
    <div className="start-page__container">
      <img src={Cards} alt="cards" width={250} />
      <div className="start-page__header">
        <h1>Are you the luckiest person alive? </h1>
      </div>
      <div className="start-page__center">
        <h4>Try and see the ranking of the luckiest...</h4>
        <div className="rules__container">
          <h5>The rule!</h5>
          <ul className="rule-list">
            <li>
              Each card represents a sum of points, there are 5 cards per
              reload, and only 4 reloads per session.
            </li>
            <li>At the end of the 4 reloads, the points are added up.</li>
            <li>
              Once the game is over, a form asks you to enter your nickname and
              your country, then send the result to the server to enter the
              ranking.
            </li>
            <li>
              The ranking is ordered in descending order (from first to last).
            </li>
          </ul>
        </div>
      </div>
      <div className="start-page__footer">
        <button onClick={setStartGame}>StartGame</button>
      </div>
      <div />
    </div>
  );
};

export default StartPage;
