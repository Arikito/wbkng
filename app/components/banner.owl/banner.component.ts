import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'my-owl',
  template: `<div id="owl-banner" class="owl-carousel owl-theme owl_banner">
						<div class="banner_item">
							<img src="/compiled/img/bg1.jpg" alt="slide">
							<div class="banner_text">
								<h2>БРИФИНГ И ОПРЕДЕЛЕНИЕ ЦЕЛЕЙ</h2>
								<p>Анализируем цели и потребности Вашего бизнеса, целевой аудитории и конкурентов. После подготовления технических, дизайнерских, функциональных требованих, разработаем стратегию электронной коммерции – продвижение сайта для развития вашего бизнеса.</p>
								<a href="http://webking/services.html" class="bunner_btn accent_button">Хочу работать с Вами</a>
							</div>
						</div>
						<div class="banner_item">
							<img src="/compiled/img/bg2.jpg" alt="slide">
							<div class="banner_text">
								<h2>ПРОЕКТИРОВАНИЕ ИНТЕРФЕЙСА И ДИЗАЙН</h2>
								<p>Создаем визуально приятный, понятный, удобный и легкий в использовании интерфейс. Тщательно продуманный и грамотно сконструированный вебсайт значительно увеличит Ваши продажи, вовлеченность клиентов и лояльность к бренду.</p>
								<a href="http://webking/services.html" class="bunner_btn accent_button">Хочу работать с Вами</a>
							</div>
						</div>
						<div class="banner_item">
							<img src="/compiled/img/bg3.jpg" alt="slide">
							<div class="banner_text">
								<h2>РАЗРАБОТКА ФУНКЦИОНАЛА</h2>
								<p>По утвержденному техническому заданию создаем ​​сайты с использованием передовых методов программирования и новейших платформ электронной коммерции.</p>
								<a href="http://webking/services.html" class="bunner_btn accent_button">Хочу работать с Вами</a>
							</div>
						</div>
						<div class="banner_item">
							<img src="/compiled/img/bg4.jpg" alt="slide">
							<div class="banner_text">
								<h2>ТЕСТИРОВАНИЕ И ЗАПУСК</h2>
								<p>Тестируем каждую деталь Вашего сайта для устранения недостатков. После окончательной проверки отправляем Ваш сайт на просторы интернета для установления отношений с google analytics</p>
								<a href="http://webking/services.html" class="bunner_btn accent_button">Хочу работать с Вами</a>
							</div>
						</div>
						<div class="banner_item">
							<img src="/compiled/img/bg5.jpg" alt="slide">
							<div class="banner_text">
								<h2>ОПТИМИЗАЦИЯ И ОБСЛУЖИВАНИЕ</h2>
								<p>Обслуживаем вебсайт, отслеживаем и анализируем эффективность работы сайта и поведение пользователей на сайте. Мы работаем над увеличением посещаемости и вовлеченности посетителей сайта.</p>
								<a href="http://webking/services.html" class="bunner_btn accent_button">Хочу работать с Вами</a>
							</div>
						</div>
					</div>`
})

export class BannerComponent implements OnInit {
	constructor(private elRef: ElementRef){}

	ngOnInit(): any {
		jQuery(this.elRef.nativeElement).find("#owl-banner").owlCarousel({
			slideSpeed: 300,
			paginationSpeed: 400,
			singleItem:true,
			autoPlay: 5000,
			stopOnHover: false,
			autoHeight: false,
			transitionStyle: "fade"
		});
	}
}
