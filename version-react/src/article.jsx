import { useState } from "react";

export default function article({ maxWidth, children }) {
  // Set flexGrow to 1 if there's no props passed by, otherwise use the prop's value
  const componentStyle = (maxWidth = 100) => ({
    maxWidth: `${maxWidth}%`,
  });

  return (
    <article style={componentStyle(maxWidth)}>
      {children}
    </article>
  );
}
