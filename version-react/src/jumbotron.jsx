export default function jumbotron({ backgroundUrl }) {
  const componentStyle = (backgroundUrl = "") => ({
    background: `url("${backgroundUrl}") no-repeat center center`,
    backgroundSize: "cover",
  });
  return (
    <div className="jumbotron" style={componentStyle(backgroundUrl)}></div>
  );
}
