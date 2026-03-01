// MenuClient.jsx - КЛИЕНТСКИЙ КОМПОНЕНТ
'use client';

import React, { useState } from 'react';
import { Coffee, Star, Clock, Users } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';

const MenuClient = ({ menuItems, categories }) => {
  const [activeCategory, setActiveCategory] = useState('Все');

  // Фильтрация на КЛИЕНТЕ
  const filteredItems = activeCategory === 'Все' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 via-amber-50 to-white dark:from-stone-900 dark:via-amber-950/20 dark:to-stone-900">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-amber-800 dark:text-amber-200 mb-6">
              Наше меню
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-amber-300 to-orange-300 mx-auto mb-6"></div>
            <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
              Каждое блюдо создается с любовью и вниманием к деталям. 
              Мы используем только свежие продукты и натуральные ингредиенты.
            </p>
          </div>
        </div>
      </section>

      {/* Categories - ИНТЕРАКТИВ НА КЛИЕНТЕ */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30' 
                    : 'bg-white/50 dark:bg-stone-800/50 text-stone-700 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-amber-900/30 border border-amber-200 dark:border-amber-800/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid - ОТОБРАЖАЕМ ОТФИЛЬТРОВАННЫЕ ДАННЫЕ */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group bg-white/70 dark:bg-stone-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-100 dark:border-amber-900/30"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {item.popular && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" />
                      Популярное
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-medium text-stone-800 dark:text-stone-200">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-amber-600 dark:text-amber-400">
                      {item.price}
                    </span>
                  </div>
                  
                  <p className="text-sm text-stone-600 dark:text-stone-400 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-stone-500 dark:text-stone-500 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded-lg transition-colors shadow-md hover:shadow-lg">
                      Заказать
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white/50 dark:bg-stone-900/50 backdrop-blur-sm border-t border-amber-200 dark:border-amber-900/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-medium text-stone-800 dark:text-stone-200 mb-2">Свежие продукты</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Только натуральные ингредиенты
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-medium text-stone-800 dark:text-stone-200 mb-2">Быстрая подача</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Среднее время 10-15 минут
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-medium text-stone-800 dark:text-stone-200 mb-2">Уютная атмосфера</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Идеально для встреч
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MenuClient;