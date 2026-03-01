import Header from "./about/components/Header";
import Footer from "./about/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Герой-секция */}
        <section className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Кофейня "Уютный уголок"
            </h1>
            <p className="text-xl mb-8 text-white">
              Лучший кофе и уютная атмосфера в центре города
            </p>
            <a 
              href="/menu"
              className="inline-block bg-white text-orange-500 font-bold py-3 px-8 rounded-full hover:bg-orange-100 transition-colors shadow-lg"
            >
              Смотреть меню →
            </a>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-16 px-4 bg-orange-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
              Почему выбирают нас
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-md border border-orange-200">
                <div className="text-5xl mb-4">☕️</div>
                <h3 className="text-xl font-bold mb-3 text-orange-500">Свежий кофе</h3>
                <p className="text-gray-600">
                  Обжариваем зерна каждую неделю для идеального вкуса
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-md border border-orange-200">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-3 text-orange-500">Уютная атмосфера</h3>
                <p className="text-gray-600">
                  Комфортное пространство для отдыха и работы
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-md border border-orange-200">
                <div className="text-5xl mb-4">🍰</div>
                <h3 className="text-xl font-bold mb-3 text-orange-500">Домашняя выпечка</h3>
                <p className="text-gray-600">
                  Свежие десерты, приготовленные с любовью
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Популярные позиции */} 
        <section className="py-16 px-4 bg-orange-300">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
              Популярное в меню
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                { name: 'Капучино', price: '220 ₽', desc: 'Идеальный баланс кофе и молока' },
                { name: 'Сырники', price: '320 ₽', desc: 'Творожные с ягодным соусом' },
                { name: 'Латте', price: '240 ₽', desc: 'Нежный кофе с молоком' },
                { name: 'Морковный торт', price: '280 ₽', desc: 'Домашний десерт с орехами' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-orange-200">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                    <div className="text-lg font-bold text-orange-500">{item.price}</div>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <a 
                href="/menu"
                className="inline-block bg-orange-400 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-500 transition-colors shadow-md"
              >
                Посмотреть все позиции →
              </a>
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="py-16 px-4 bg-orange-50">
          <div className="container mx-auto text-center">
            <div className="max-w-2xl mx-auto ">
              <h2 className="text-3xl font-bold text-orange-500 mb-6">
                Приходите в гости!
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Мы создали идеальное место для встреч с друзьями, работы 
                и отдыха за чашечкой отличного кофе
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/menu"
                  className="bg-orange-400 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-500 transition-colors shadow-md"
                >
                  Посмотреть меню
                </a>
                <a 
                  href="/location"
                  className="border-2 border-orange-300 text-orange-500 font-bold py-3 px-8 rounded-full hover:bg-orange-100 transition-colors"
                >
                  Как добраться
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}