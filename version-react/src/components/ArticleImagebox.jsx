import Article from "./Article";

export default function ArticleImagebox({
  imgURL,
  imgAlt,
  maxWidth,
  children,
  headerText,
}) {
  return (
    <Article maxWidth={maxWidth}>
      <img src={imgURL} alt={imgAlt} />
      {headerText ? <h2>{headerText}</h2> : ""}
      {children}
    </Article>
  );
}
