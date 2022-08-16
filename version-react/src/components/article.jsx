export default function article({ maxWidth, children, headerText }) {
  // Set flexGrow to 1 if there's no props passed by, otherwise use the prop's value
  const componentStyle = (maxWidth = 100) => ({
    maxWidth: `${maxWidth}%`,
  });

  return (
    <article style={componentStyle(maxWidth)}>
      {headerText ? <h2 className="articleHeader">{headerText}</h2> : ""}
      {children}
    </article>
  );
}
