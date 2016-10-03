import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'owl-banner',
  templateUrl: 'app/components/owl_banner/banner.component.html'
})

export class BannerComponent implements OnInit {
	slides: any[];
	constructor(private elRef: ElementRef){
		this.slides = [
			{
				htmlContent: `<h2>БРИФИНГ И ОПРЕДЕЛЕНИЕ ЦЕЛЕЙ</h2>
					<p>Анализируем цели и потребности Вашего бизнеса, целевой аудитории и конкурентов. После подготовления технических, дизайнерских, функциональных требованих, разработаем стратегию электронной коммерции – продвижение сайта для развития вашего бизнеса.</p>
					<a routerLink="/services" routerLinkActive="active" class="bunner_btn accent_button">Хочу работать с Вами</a>`,
				imgUrl: '/compiled/img/bg1.jpg',
			},
			{
				htmlContent: `<h2>ПРОЕКТИРОВАНИЕ ИНТЕРФЕЙСА И ДИЗАЙН</h2>
					<p>Создаем визуально приятный, понятный, удобный и легкий в использовании интерфейс. Тщательно продуманный и грамотно сконструированный вебсайт значительно увеличит Ваши продажи, вовлеченность клиентов и лояльность к бренду.</p>
					<a routerLink="/services" routerLinkActive="active" class="bunner_btn accent_button">Хочу работать с Вами</a>`,
				imgUrl: '/compiled/img/bg2.jpg',
			},
			{
				htmlContent: `<h2>РАЗРАБОТКА ФУНКЦИОНАЛА</h2>
					<p>По утвержденному техническому заданию создаем ​​сайты с использованием передовых методов программирования и новейших платформ электронной коммерции.</p>
					<a routerLink="/services" routerLinkActive="active" class="bunner_btn accent_button">Хочу работать с Вами</a>`,
				imgUrl: '/compiled/img/bg3.jpg',
			},
			{
				htmlContent: `<h2>ТЕСТИРОВАНИЕ И ЗАПУСК</h2>
					<p>Тестируем каждую деталь Вашего сайта для устранения недостатков. После окончательной проверки отправляем Ваш сайт на просторы интернета для установления отношений с google analytics</p>
					<a routerLink="/services" routerLinkActive="active" class="bunner_btn accent_button">Хочу работать с Вами</a>`,
				imgUrl: '/compiled/img/bg4.jpg',
			},
			{
				htmlContent: `<h2>ОПТИМИЗАЦИЯ И ОБСЛУЖИВАНИЕ</h2>
					<p>Обслуживаем вебсайт, отслеживаем и анализируем эффективность работы сайта и поведение пользователей на сайте. Мы работаем над увеличением посещаемости и вовлеченности посетителей сайта.</p>
					<a routerLink="/services" routerLinkActive="active" class="bunner_btn accent_button">Хочу работать с Вами</a>`,
				imgUrl: '/compiled/img/bg5.jpg',
			},
		];
	}

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
