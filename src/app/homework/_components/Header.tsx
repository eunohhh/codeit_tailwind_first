import Link from 'next/link';
import Button from './Button';
import Logo from './Logo';

const links = [
  { name: 'Features', href: '/#features' },
  { name: 'Reviews', href: '/#reviews' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'FAQ', href: '/#faq' },
];

function Header() {
  return (
    <header>
      <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            {/* Logo */}
            <Link href="/">
              <Logo
                svgClassName="h-10 w-auto"
                logoClassName="fill-cyan-500"
                textClassName="fill-gray-900"
              />
            </Link>

            {/* Links */}
            <div className="hidden lg:flex lg:gap-10">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-6">
            <Button intent="white" href="/login" className="hidden lg:flex">
              Log in
            </Button>
            <Button intent="black" href="#" className="hidden lg:flex">
              Download
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
