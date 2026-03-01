// MenuPage.jsx - СЕРВЕРНЫЙ КОМПОНЕНТ
import React from 'react';
import MenuClient from './components/MenuClient';

// Данные хранятся В СЕРВЕРНОМ КОМПОНЕНТЕ
const menuItems = [
  {
    id: 1,
    name: "Круассан с миндалем",
    description: "Хрустящий круассан с миндальной пастой и лепестками миндаля",
    price: "390₽",
    category: "Выпечка",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop",
    popular: true
  },
  {
    id: 2,
    name: "Латте с карамелью",
    description: "Нежный латте с домашней карамелью и взбитыми сливками",
    price: "350₽",
    category: "Кофе",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=500&auto=format&fit=crop",
    popular: true
  },
  {
    id: 3,
    name: "Чизкейк Нью-Йорк",
    description: "Классический чизкейк с ягодным соусом и свежей мятой",
    price: "420₽",
    category: "Десерты",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=500&auto=format&fit=crop",
    popular: false
  },
  {
    id: 4,
    name: "Брускетта с лососем",
    description: "Поджаренный хлеб с сливочным сыром, слабосоленым лососем и рукколой",
    price: "580₽",
    category: "Закуски",
    image: "https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?w=500&auto=format&fit=crop",
    popular: true
  },
  {
    id: 5,
    name: "Раф с лавандой",
    description: "Ароматный раф на миндальном молоке с нотками лаванды",
    price: "390₽",
    category: "Кофе",
    image: "https://images.unsplash.com/photo-1572111502171-7e2d2e8a4e3a?w=500&auto=format&fit=crop",
    popular: false
  },
  {
    id: 6,
    name: "Тирамису",
    description: "Классический итальянский десерт с маскарпоне и какао",
    price: "450₽",
    category: "Десерты",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop",
    popular: true
  },
  {
    id: 7,
    name: "Сэндвич с курицей",
    description: "Тостовый хлеб с куриным филе, авокадо и соусом песто",
    price: "520₽",
    category: "Закуски",
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=500&auto=format&fit=crop",
    popular: false
  },
  {
    id: 8,
    name: "Капучино",
    description: "Классический капучино с плотной молочной пеной",
    price: "290₽",
    category: "Кофе",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&auto=format&fit=crop",
    popular: true
  },
  {
    id: 9,
    name: "Панна котта",
    description: "Ванильная панна котта с ягодным конфи",
    price: "380₽",
    category: "Десерты",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop",
    popular: false
  },
  {
    id: 10,
    name: "Круассан с ветчиной",
    description: "Слоеный круассан с ветчиной и сыром гауда",
    price: "420₽",
    category: "Выпечка",
    image: "https://images.unsplash.com/photo-1623335231027-ffee69d15153?w=500&auto=format&fit=crop",
    popular: false
  },
  {
    id: 11,
    name: "Матча латте",
    description: "Японский зеленый чай с молоком и медом",
    price: "380₽",
    category: "Напитки",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop",
    popular: true
  },
  {
    id: 12,
    name: "Брауни с мороженым",
    description: "Шоколадный брауни с ванильным мороженым и орехами",
    price: "490₽",
    category: "Десерты",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop",
    popular: true
  }
];

const categories = ['Все', 'Кофе', 'Десерты', 'Выпечка', 'Закуски', 'Напитки'];

// СЕРВЕРНЫЙ КОМПОНЕНТ - передает данные в клиентский
const MenuPage = () => {
  return (
    <MenuClient 
      menuItems={menuItems} 
      categories={categories} 
    />
  );
};

export default MenuPage;