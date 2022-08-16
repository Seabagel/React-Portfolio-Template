import Article from "./components/Article";
import Section1 from "./pages/home/section1";
import ArticleImagebox from "./components/ArticleImagebox";
import SectionImageSide from "./components/SectionImageSide";

export default function main({ children }) {
  return (
    <main>
      <section>
        <ArticleImagebox
          imgURL={
            "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          }
          maxWidth={30}
          headerText="Hello World"
          children={<Section1 />}
        />
        <Article
          maxWidth={25}
          headerText="Hello World"
          children={<Section1 />}
        />
        <Article children={<Section1 />} />
      </section>

      <SectionImageSide
        imgURL={
          "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        }
        children={<Section1 />}
      />

      <SectionImageSide
        imgURL={
          "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        }
        children={<Section1 />}
        reversed={true}
      />
    </main>
  );
}
