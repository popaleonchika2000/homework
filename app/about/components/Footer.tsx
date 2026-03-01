export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-amber-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Кофейня "Уютный уголок"</h3>
            <p className="text-amber-200">Место, где рождаются вкусы и воспоминания</p>
          </div>
          <div className="text-center md:text-right">
            <p>г. Москва, ул. Кофейная, д. 15</p>
            <p className="mt-2">Пн-Пт: 8:00 - 22:00</p>
            <p>Сб-Вс: 9:00 - 23:00</p>
            <p className="mt-4 text-amber-200">© {currentYear} Все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  );
}