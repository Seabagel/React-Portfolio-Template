import Article from "./Article";

export default function ArticleImagebox({ imgURL, maxWidth, children }) {
  return (
    <Article maxWidth={maxWidth}>
      <img src={imgURL} alt="" className="imageBox" />
      {children}
    </Article>
  );
}
