import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<header>
				<div class="page_wrap">
					<a href="/" class="logoSite">
						<img src="/compiled/img/logo-2.1.svg" class="svg">
					</a>
					<!-- <div class="menu">
						<img src="/compiled/img/menu.svg" alt="Меню" class="menu_toggle_js">
					</div> -->
					<div class="sandwich animate">
						<div class="piece top"></div>
						<div class="piece middle"></div>
						<div class="piece bottom"></div>
					</div>
					<nav class="header_navigation header_navigation_js">
						<ul>
							<li><span class="show"><a href="http://webking/portfolio.html">Портфолио</a><a href="#"></a></span></li>
							<li><span class="show"><a href="http://webking/services.html">Услуги</a><a href="#"></a></span></li>
							<li><span class="show"><a class="go_to" href="#techs">Технологии</a><a href="#"></a></span></li>
							<li><span class="show"><a class="go_to" href="#about">О нас</a><a href="#"></a></span></li>
						</ul>
					</nav>
				</div>
			</header>
			<section class="content home_page">
				<div class="banner_wrap">
					<my-owl></my-owl>
				</div>
				<div class="subsection projects_wrap light_style">
					<div class="page_wrap">
						<h2>Последние работы</h2>
						<div class="container">
							<div class="row items_wrap">
								<div class="col-xs-6 col-md-3 col-sm-4">
									<div class="page_item">
										<div class="text_block">
											<p class="title">Название проекта</p>
											<p class="short_descr">Описание проекта</p>
											<a class="no_accent_button" href="http://webking/project.html">Подробнее</a>
										</div>
										<img src="/compiled/img/mass.jpg">
									</div>
								</div>
								<div class="col-xs-6 col-md-3 col-sm-4">
									<div class="page_item">
										<div class="text_block">
											<p class="title">Название проекта</p>
											<p class="short_descr">Описание проекта</p>
											<a class="no_accent_button" href="http://webking/project.html">Подробнее</a>
										</div>
										<img src="/compiled/img/test_image.jpg">
									</div>
								</div>
								<div class="col-xs-6 col-md-3 col-sm-4">
									<div class="page_item">
										<div class="text_block">
											<p class="title">Название проекта</p>
											<p class="short_descr">Описание проекта</p>
											<a class="no_accent_button" href="http://webking/project.html">Подробнее</a>
										</div>
										<img src="/compiled/img/mass.jpg">
									</div>
								</div>
								<div class="col-xs-6 col-md-3 col-sm-4">
									<div class="page_item">
										<div class="text_block">
											<p class="title">Название проекта</p>
											<p class="short_descr">Описание проекта</p>
											<a class="no_accent_button" href="http://webking/project.html">Подробнее</a>
										</div>
										<img src="/compiled/img/mass.jpg">
									</div>
								</div>
								<div class="col-xs-6 col-md-3 col-sm-4">
									<div class="page_item">
										<div class="text_block">
											<p class="title">Название проекта</p>
											<p class="short_descr">Описание проекта</p>
											<a class="no_accent_button" href="http://webking/project.html">Подробнее</a>
										</div>
										<img src="/compiled/img/test_image.jpg">
									</div>
								</div>
								<div class="col-xs-6 col-md-3 col-sm-4">
									<div class="page_item">
										<div class="text_block">
											<p class="title">Название проекта</p>
											<p class="short_descr">Описание проекта</p>
											<a class="no_accent_button" href="http://webking/project.html">Подробнее</a>
										</div>
										<img src="/compiled/img/mass.jpg">
									</div>
								</div>
								<div class="col-xs-6 col-md-3 col-sm-4">
									<div class="page_item">
										<div class="text_block">
											<p class="title">Название проекта</p>
											<p class="short_descr">Описание проекта</p>
											<a class="no_accent_button" href="http://webking/project.html">Подробнее</a>
										</div>
										<img src="/compiled/img/test_image.jpg">
									</div>
								</div>
								<div class="col-xs-6 col-md-3 col-sm-4">
									<div class="page_item">
										<div class="text_block">
											<p class="title">Название проекта</p>
											<p class="short_descr">Описание проекта</p>
											<a class="no_accent_button" href="http://webking/project.html">Подробнее</a>
										</div>
										<img src="/compiled/img/mass.jpg">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="subsection services_wrap">
					<div class="page_wrap">
						<h2>Услуги</h2>
						<div class="container">
							<ul class="row akkordeon">
								<li class="page_item col-xs-3 col-md-3 col-sm-6">
									<div>
										<div class="service_icon"><img src="compiled/img/developing.svg" class="svg_img svg" alt="developing"></div>
										<p class="title">Создание сайтов</p>
									</div>
									<ul>
										<li><a href="#" src="">Магазин</a></li>
										<li><a href="#" src="">Под ключ</a></li>
										<li><a href="#" src="">Лендинг</a></li>
										<li><a href="#" src="">Компании</a></li>
										<li><a href="#" src="">Портал</a></li>
										<li><a href="#" src="">Корпоративный</a></li>
									</ul>
								</li>
								<li class="page_item col-xs-3 col-md-3 col-sm-6">
									<div>
										<div class="service_icon"><img src="compiled/img/web_design_icon.svg" class="svg_img svg" alt="web design"></div>
										<p class="title">Веб дизайн</p>
									</div>
									<ul>
										<li><a href="#" src="">Сайт</a></li>
										<li><a href="#" src="">Логотип</a></li>
										<li><a href="#" src="">Стиль</a></li>
										<li><a href="#" src="">Баннер</a></li>
										<li><a href="#" src="">Этикетка</a></li>
									</ul>
								</li>
								<li class="page_item col-xs-3 col-md-3 col-sm-6">
									<div>
										<div class="service_icon"><img src="compiled/img/seo.svg" class="svg_img svg" alt="seo"></div>
										<p class="title">Интернет-маркетинг</p>
									</div>
									<ul>
										<li><a href="#" src="">Продвижение</a></li>
										<li><a href="#" src="">Оптимизация</a></li>
										<li><a href="#" src="">Реклама</a></li>
										<li><a href="#" src="">Юзабилити</a></li>
										<li><a href="#" src="">Аудит</a></li>
									</ul>
								</li>
								<li class="page_item col-xs-3 col-md-3 col-sm-6">
									<div>
										<div class="service_icon"><img src="compiled/img/support.svg" class="svg_img svg" alt="support"></div>
										<p class="title">Техподдержка</p>
									</div>
									<ul>
										<li><a href="#" src="">Поддержка</a></li>
										<li><a href="#" src="">Копирайтинг</a></li>
										<li><a href="#" src="">Наполнение</a></li>
										<li><a href="#" src="">Безопасность</a></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="subsection technologies_wrap light_style" id="techs">
					<div class="page_wrap">
						<h2>Технологии</h2>
						<my-tech-owl></my-tech-owl>
					</div>
				</div>
				<div class="subsection about_studio_wrap" id="about">
					<div class="page_wrap">
						<h2>О нас</h2>
						<div class="container">
							<div class="row">
								<div class="col-xs-6 col-md-3 col-sm-6">
									<div class="page_item">
										<img src="compiled/img/avatar.svg" class="svg" alt="avatar">
										<p class="title">Веб дизайнер</p>
										<p>Мы сделаем Ваш бренд легко узнаваемым</p>
									</div>
								</div>
								<div class="col-xs-6 col-md-3 col-sm-6">
									<div class="page_item">
										<img src="compiled/img/avatar.svg" class="svg" alt="avatar">
										<p class="title">Разработчик</p>
										<p>Ваш сайт будет многофункциональным и в то же время быстродейственным</p>
									</div>
								</div>
								<div class="col-xs-6 col-md-3 col-sm-6">
									<div class="page_item">
										<img src="compiled/img/avatar.svg" class="svg" alt="avatar">
										<p class="title">SEO специалист</p>
										<p>Мы знаем как увеличить Ваши продажи и привлечь максимальное количество клиентов</p>
									</div>
								</div>
								<div class="col-xs-6 col-md-3 col-sm-6">
									<div class="page_item">
										<img src="compiled/img/avatar.svg" class="svg" alt="avatar">
										<p class="title">Техобслуживание</p>
										<p>Высокая производительность работы сайта - вот что мы хотим Вам предложить</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="subsection contacts_wrap light_style">
					<div class="page_wrap">
						<div class="container">
							<div class="row">
								<div class="col-xs-12 col-md-6">
									<h2>Контакты</h2>
									<div class="page_item contacts_item">
										<div class="contacts">
											<p><img src="compiled/img/icons/earth.svg" alt="earth" class="svg_img svg"> <span>61000 Харьков, Украина</span></p>
											<p><img src="compiled/img/icons/location.svg" alt="location" class="svg_img svg"> <span>проспект Юбилейный, 54а</span></p>
											<p><img src="compiled/img/icons/phone.svg" alt="phone" class="svg_img svg"> <span>+38 (000) 000-00-00</span></p>
											<p><img src="compiled/img/icons/email.svg" alt="email" class="svg_img svg"> <span>webking@gmail.com</span></p>
										</div>
										<div class="time">
											<p>Звоните нам:</p>
											<p>Пн.–Пт.: 9:00 − 19:00</p>
											<p>Сб.: 11:00 − 17:00</p>
										</div>
									</div>
								</div>
								<div class="col-xs-12 col-md-6">
									<div class="page_item form_item">
										<fieldset>
											<legend>Свяжитесь с нами</legend>
											<form>
												<input type="text" name="username" placeholder="Ваше имя" class="name" required />
												<input type="email" name="emailaddress" placeholder="Email" class="email" required />
												<input type="tel" name="userphone" placeholder="Номер телефона">
												<input type="text" name="subject" placeholder="Тема">
												<textarea rows="4" cols="50" name="subject" placeholder="Сообщение:" class="message" required></textarea>
												<input type="submit" name="submit" class="accent_button" value="Отправить" />
											</form>
										</fieldset>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<my-map></my-map>
			</section>
			<footer>
				<div class="page_wrap">
					<!-- <form method="POST" action="http://l5.dev" accept-charset="UTF-8"><input name="_token" type="hidden" value="rnktgnOIwG81GuG7qW5Hl6jP6JHOUrucNEty5BaR">
						<label for="email">Хочу получать письма о специальных пердлодениях</label>
						<input name="email" type="email" id="email">
						<input type="submit" value="Подписаться">
					</form> -->
					<form action="/" class="subscribe" method="POST">
						<label for="subscribe_email">Хочу получать письма о специальных предложениях</label>
						<input type="email" id="subscribe_email" required="" placeholder="Введите свой email">
						<input type="submit" value="Подписаться" class="accent_button">
					</form>
				</div>
				<div class="page_wrap hidden">
					<nav>
						<a href="http://l5.dev/portfolio">Портфолио</a>
						<a href="http://l5.dev/services">Услуги</a>
						<a href="http://l5.dev/techs">Технологии</a>
						<a href="http://l5.dev/about">О нас</a>
					</nav>
				</div>
				<div class="copyright">
					<div class="page_wrap">
						<nav>
							<a href="http://l5.dev/portfolio">Портфолио</a>
							<a href="http://l5.dev/services">Услуги</a>
							<a href="http://l5.dev/techs">Технологии</a>
							<a href="http://l5.dev/about">О нас</a>
						</nav>
						<img class="logo svg" src="/compiled/img/logo-2.1-no-lion.svg">
						<!-- <svg viewBox="226 50 488 147" class="logo">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/compiled/img/logo-2.1.svg#text_1_"></use>
						</svg> -->
						<div class="rights"><span>Copyright © WebKing Creative Studio 2016. </span><span>All rights reserved</span></div>
					</div>
				</div>
			</footer>
			<script src="//localhost:35729/livereload.js"></script>`,
})

export class AppComponent { }

