import Article from "./article";
import Section1 from "./pages/home/section1";

export default function main() {
  return (
    <main>
      <p>Inside main</p>
      <section>
        <Article maxWidth={20}>
          <Section1 />
        </Article>
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
