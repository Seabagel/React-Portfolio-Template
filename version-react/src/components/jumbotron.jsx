import "../styles/jumbotron.css";

export default function jumbotron({ backgroundUrl }) {
  const componentStyle = (backgroundUrl = "") => ({
    backgroundImage: `url("${backgroundUrl}")`,
  });
  return (
    <div class="jumbotron">
      <div class="jumboImage" style={componentStyle(backgroundUrl)}></div>
      <div className="jumboContainer">
        <div class="jumboForeground">
          <h1>Header here</h1>
        </div>
      </div>
    </div>
  );
}
