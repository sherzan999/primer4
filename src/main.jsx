import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import './style.css';

const services = [
  ['◉', 'Компьютерная диагностика', 'Находим причину, а не меняем детали наугад.', 'от 80 BYN'],
  ['⚙', 'Ремонт двигателя', 'Точная дефектовка и ремонт с гарантией.', 'от 250 BYN'],
  ['⌁', 'Ходовая часть', 'Возвращаем подвеске точность и комфорт.', 'от 120 BYN'],
  ['❄', 'Кондиционер', 'Проверка герметичности, заправка и обслуживание.', 'от 90 BYN'],
  ['◈', 'Шиномонтаж', 'Бережная работа с дисками любого диаметра.', 'от 60 BYN'],
  ['✳', 'Детейлинг', 'Профессиональный уход за кузовом и салоном.', 'от 180 BYN'],
];
const reviews = [
  { name: 'Александр К.', car: 'BMW 5 серии', text: 'Разобрались со сложной ошибкой, которую до этого не могли найти в двух сервисах. Всё объяснили до ремонта и уложились в срок.' },
  { name: 'Мария С.', car: 'Audi Q5', text: 'Записалась онлайн, приняли вовремя. Очень аккуратная работа и понятная смета — никаких сюрпризов при выдаче.' },
  { name: 'Дмитрий В.', car: 'Mercedes-Benz E-Class', text: 'Удобная зона ожидания, сильные мастера и фотоотчёт по работам. Теперь обслуживаю здесь обе машины.' },
];
const photos = [
  ['photo-1486325212027-8081e485255e', 'Детейлинг кузова'], ['photo-1492144534655-ae79c964c9d7', 'Спортивное купе'],
  ['photo-1489824904134-891ab64532f1', 'Работы в боксе'], ['photo-1503376780353-7e6692767b70', 'Полировка кузова'],
];
const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .55, ease: [.2, .7, .2, 1] } } };

function App() {
  const [review, setReview] = useState(0);
  const [sent, setSent] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 160]);
  const submit = (event) => { event.preventDefault(); setSent(true); };
  return <>
    <header className="topbar"><a className="brand" href="#home"><span className="brand-mark">G<span>11</span></span><span>ГАРАЖ<span className="orange">11</span><small>АВТОСЕРВИС</small></span></a><nav><a href="#services">Услуги</a><a href="#about">О нас</a><a href="#works">Работы</a><a href="#contacts">Контакты</a></nav><a className="top-call" href="tel:+375291234567">+375 (29) 123-45-67 <span>↗</span></a><a href="#booking" className="mobile-book">Записаться ↗</a></header>
    <main id="home">
      <section className="hero"><motion.div className="hero-photo" style={{ y: heroY }} /><div className="hero-shade"/><div className="hero-content"><motion.div initial="hidden" animate="show" variants={reveal} className="hero-copy"><div className="eyebrow"><span/> НЕЗАВИСИМЫЙ АВТОСЕРВИС · С 2012 ГОДА</div><h1>Твой автомобиль<br/>заслуживает <em>лучшего.</em></h1><p>Сервис, где к автомобилю относятся с уважением.<br/>Точная диагностика. Честная смета. Гарантия на работы.</p><div className="hero-actions"><a className="button button-orange" href="#booking">Записаться на сервис <span>↗</span></a><a className="button button-outline" href="tel:+375291234567">Позвонить нам <span>↗</span></a></div></motion.div><motion.div className="rating-card" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .45 }}><div className="stars">★★★★★ <b>4.9</b></div><p>Рейтинг по отзывам клиентов</p><div className="rating-line"/><strong>5 000<span>+</span></strong><p>довольных клиентов</p></motion.div></div><div className="hero-bottom"><span>01 / 05</span><span>ПРОЛИСТАЙТЕ ВНИЗ <b>↓</b></span><span>53°53' N&nbsp; 27°34' E</span></div></section>

      <section className="brands"><span className="eyebrow">ЗНАЕМ ХАРАКТЕР КАЖДОЙ МАРКИ</span><div className="brand-list"><b>BMW</b><b>AUDI</b><b>MERCEDES-BENZ</b><b>PORSCHE</b><b>VOLVO</b><b>LAND ROVER</b></div></section>

      <section id="services" className="section services"><motion.div className="section-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: .35 }} variants={reveal}><div><span className="eyebrow">ЧТО МЫ ДЕЛАЕМ</span><h2>Сервис без<br/><em>компромиссов.</em></h2></div><p>От планового ТО до сложного ремонта.<br/>Один стандарт качества — для каждой задачи.</p></motion.div><div className="service-grid">{services.map(([icon, title, text, price], i) => <motion.article className="service-card" key={title} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={{ ...reveal, show: { ...reveal.show, transition: { ...reveal.show.transition, delay: i * .06 } } }}><div className="service-icon">{icon}</div><span className="card-index">0{i + 1}</span><h3>{title}</h3><p>{text}</p><div className="service-foot"><span>{price}</span><a href="#booking" aria-label={`Записаться: ${title}`}>↗</a></div></motion.article>)}</div></section>

      <section className="about" id="about"><div className="about-image" role="img" aria-label="Автомобиль в мастерской"/><div className="about-content"><span className="eyebrow">ПОЧЕМУ ГАРАЖ 11</span><h2>Работаем так,<br/>чтобы вы <em>вернулись.</em></h2><p>Не ради повторного ремонта. Ради спокойствия за автомобиль. Показываем, что нашли, объясняем варианты и согласовываем стоимость до начала работ.</p><div className="stats"><div><strong>12<span>+</span></strong><small>лет опыта</small></div><div><strong>18</strong><small>мастеров</small></div><div><strong>2<span> года</span></strong><small>гарантия на работы</small></div></div><a className="text-link" href="#booking">Убедиться лично <span>↗</span></a></div></section>

      <section id="works" className="section works"><div className="section-heading"><div><span className="eyebrow">НАША РАБОТА</span><h2>Детали имеют<br/><em>значение.</em></h2></div><p>Каждый автомобиль уезжает отсюда<br/>в лучшем состоянии, чем приехал.</p></div><div className="gallery">{photos.map(([id, alt], i) => <motion.div className={`gallery-item gallery-${i + 1}`} key={id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><img src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1100&q=85`} alt={alt} loading="lazy"/><span>0{i + 1} / 04</span></motion.div>)}</div></section>

      <section className="testimonial"><div className="testimonial-inner"><div><span className="eyebrow">ГОВОРЯТ КЛИЕНТЫ</span><h2>Доверие —<br/><em>наша лучшая оценка.</em></h2><div className="review-controls"><button onClick={() => setReview((review + reviews.length - 1) % reviews.length)} aria-label="Предыдущий отзыв">←</button><span>0{review + 1} <i>/ 0{reviews.length}</i></span><button onClick={() => setReview((review + 1) % reviews.length)} aria-label="Следующий отзыв">→</button></div></div><AnimatePresence mode="wait"><motion.article className="review-card" key={review} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: .25 }}><div className="stars">★★★★★ <b>5.0</b></div><blockquote>«{reviews[review].text}»</blockquote><div className="review-author"><span>{reviews[review].name[0]}</span><div><b>{reviews[review].name}</b><small>{reviews[review].car}</small></div></div></motion.article></AnimatePresence></div></section>

      <section className="booking section" id="booking"><div className="booking-intro"><span className="eyebrow">ВАШ СЛЕДУЮЩИЙ ШАГ</span><h2>Запишитесь.<br/><em>Остальное — наша забота.</em></h2><p>Оставьте контакты — администратор перезвонит и подберёт удобное время.</p><a href="tel:+375291234567" className="text-link">Или позвоните: +375 (29) 123-45-67 ↗</a></div><form className="booking-form" onSubmit={submit}><label>Как вас зовут<input required name="name" placeholder="Имя" autoComplete="name"/></label><label>Номер телефона<input required name="phone" type="tel" placeholder="+375 (__) ___-__-__" autoComplete="tel"/></label><label>Выберите услугу<select name="service" defaultValue=""><option value="" disabled>Что нужно сделать?</option>{services.map(([,, title]) => <option key={title}>{title}</option>)}</select></label><label>Удобная дата<input name="date" type="date" min={new Date().toISOString().slice(0, 10)}/></label><button className="button button-orange" type="submit">{sent ? 'Заявка принята ✓' : 'Запросить запись ↗'}</button><small>Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</small></form></section>
    </main>
    <footer id="contacts"><div className="footer-main"><div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark">G<span>11</span></span><span>ГАРАЖ<span className="orange">11</span><small>АВТОСЕРВИС</small></span></a><p>Точный подход.<br/>Честный сервис.</p></div><div><span className="eyebrow">КОНТАКТЫ</span><a className="footer-phone" href="tel:+375291234567">+375 (29) 123-45-67</a><p>Минск, район Немига<br/>Пн–Сб · 9:00–21:00</p></div><div><span className="eyebrow">МЫ НА КАРТЕ</span><a className="map-card" href="https://maps.google.com/?q=Минск+автосервис" target="_blank" rel="noreferrer"><span>МИНСК · НОВОПОЛОЦКИЙ РАЙОН</span><b>Построить маршрут ↗</b><i>⌖</i></a></div></div><div className="footer-bottom"><span>© 2026 ГАРАЖ 11</span><span>СЕРВИС, КОТОРОМУ ДОВЕРЯЮТ</span><a href="#home">НАВЕРХ ↑</a></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
