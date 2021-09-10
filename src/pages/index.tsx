import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <main>
      <h1>iOS 15 Fixed Positioned Elements Layout Issues</h1>
      <div className="home-links-container">
        <Link href="/page-1" passHref>
          <a className="home-link">Page 1</a>
        </Link>
      </div>
    </main>
  );
};

export default Home;
