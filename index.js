const Button = (props) => {
  const { btnName, className } = props;
  return <button className={`btn ${className}`}>{btnName}</button>;
};

const element = (
  <div className="bg-container">
    <h1>Social Buttons</h1>
    <div className="btn-container">
      <Button btnName="Like" className="like-btn" />
      <Button btnName="Comment" className="comment-btn" />
      <Button btnName="Share" className="share-btn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
