import GetirLogo from '../img/getir-logo.svg';
import { BiGlobe } from 'react-icons/bi';
import { RiUserFill, RiUserAddFill } from 'react-icons/ri';

function Header(props) {
  return (
    <div className="bg-brand-color z-50 sticky top-0 order-1">
      <div className="container mx-auto h-16 md:h-11 flex items-center justify-center md:justify-between">
        <a href="/">
          <img src={GetirLogo} alt="logo" />
        </a>
        <nav className="hidden md:flex gap-x-8 text-sm font-semibold">
          <a
            href="/"
            className="flex items-center gap-x-1 text-getir-color hover:text-opacity-90"
          >
            <BiGlobe size={20} />
            Türkçe (TR)
          </a>
          <a
            href="/"
            className="flex items-center gap-x-1 text-getir-color hover:text-opacity-90"
          >
            <RiUserFill size={18} /> Giriş Yap
          </a>
          <a
            href="/"
            className="flex items-center gap-x-1 text-getir-color hover:text-opacity-90"
          >
            <RiUserAddFill size={18} /> Kayıt Ol
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
