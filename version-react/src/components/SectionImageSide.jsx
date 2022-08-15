import Article from "./Article";

export default function SectionImageSide({ imgURL, reversed, children }) {
  return (
    <section className={reversed ? "reversed" : ""}>
      <Article maxWidth={50}>
        <img src={imgURL} alt="" className="imageSide" />
      </Article>
      <Article maxWidth={50}>
        <article className="imageSide">{children}</article>
      </Article>
    </section>
  );
}
