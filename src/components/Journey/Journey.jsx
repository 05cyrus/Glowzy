import "./Journey.css";

function Journey() {
  return (
    <div className="j-cards">
        <h1>Transform Your Beauty Journey</h1>
        <div className="j-card j-red">
            <p className="j-tip">Celebrity Comparison Analysis</p>
            <p className="j-second-text">Discover which celebrities share your facial features and get inspired by their styling choices.</p>
        </div>
        <div className="j-card j-blue">
            <p className="j-tip">Personalized Beauty Routine</p>
            <p className="j-second-text">Get a detailed 5-7 step skincare routine tailored to your unique skin type and concerns.</p>
        </div>
        <div className="j-card j-green">
            <p className="j-tip">Instant AI Analysis</p>
            <p className="j-second-text">Advanced AI technology analyzes your facial features and skin condition in seconds.</p>
        </div>
    </div>
  );
};

export default Journey;
