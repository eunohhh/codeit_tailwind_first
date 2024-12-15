import { Header, Hero } from './_components';
import Features from './_components/Features';

function HomeworkPage() {
  return (
    <>
      <Header />
      <main className="flex-auto">
        <Hero />
        <Features />
      </main>
    </>
  );
}

export default HomeworkPage;
