
import Link from 'next/link';

export const NavigationBar: React.VFC = () => {
  return (
    <nav className="navigation-bar">
      <Link href="/" passHref>
        <a>Home</a>
      </Link>
      <Link href="/page-1" passHref>
        <a>Page 1</a>
      </Link>
      <Link href="/page-2" passHref>
        <a>Page 2</a>
      </Link>
    </nav>
  );
};
