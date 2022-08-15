import Article from "./Article";

export default function ArticleImageSide({ imgURL, children }) {
  return (
    <>
      <Article maxWidth={50}>
        <img src={imgURL} alt="" className="imageSide" />
      </Article>
      <Article maxWidth={50}>
        <article className="imageSide">{children}</article>
      </Article>
    </>
  );
}
