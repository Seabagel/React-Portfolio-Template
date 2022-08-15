import Article from "./components/Article";
import Section1 from "./pages/home/section1";
import ArticleImagebox from "./components/ArticleImagebox";

export default function main({ children }) {
  return (
    <main>
      <section>
        <ArticleImagebox
          imgURL={
            "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          }
          maxWidth={40}
        >
          <Section1 />
        </ArticleImagebox>
        <Article maxWidth={30}>
          <Section1 />
        </Article>
        <Article>
          <Section1 />
        </Article>
      </section>

      <section>
        <Article maxWidth={30}>
          <Section1 />
        </Article>
        <Article>
          <Section1 />
        </Article>
      </section>
    </main>
  );
}
