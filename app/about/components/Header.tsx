import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-amber-900 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold mb-4 md:mb-0">
            Кофейня "Уютный уголок"
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-amber-200 transition-colors">
                Главная
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-amber-200 transition-colors">
                Профиль
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-200 transition-colors">
                Меню
              </Link>
            </li>
          </ul>
        </div>
      </nav>

    </header>
  );
}