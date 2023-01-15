import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';

const Header = () => (
  <header className="bg-gradient-header wrapper fluid">
    <div className="flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2 text-2xl font-bold -tracking-[1px] text-[#fafafa]">
        <FaPlayCircle /> CINEPHILE
      </Link>
      <nav className="flex gap-12 text-[#fafafa] font-bold tracking-[2px]">
        <Link href="/">Movies</Link>
        <Link href="/">Series</Link>
        <Link href="/">Kids</Link>
      </nav>
    </div>
  </header>
);
export default Header;
