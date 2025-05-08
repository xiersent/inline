document.addEventListener("DOMContentLoaded", function() {


	const radioButtons = document.querySelectorAll('.aaa-menuGroup__radio');
	radioButtons.forEach(radio => {
		radio.addEventListener('change', function() {
			const target = this.dataset.target;
			
			// Скрываем все контентные блоки
			document.querySelectorAll('.aaa-tab').forEach(section => {
				section.style.display = 'none';
			});
			
			// Показываем выбранный
			const selectedContent = document.querySelector(`[data-content="${target}"]`);
			if (selectedContent) {
				selectedContent.style.display = 'block';
			}
		});
	});


	new Swiper('.swiper--new', {
		loop: true,
		autoplay: {
			delay: 5000,
			pauseOnMouseEnter: true,
		},
		slidesPerView: 4,
		spaceBetween: 20,
		breakpoints: {
			375: {
				slidesPerView: 1.1,
				spaceBetween: 0
			},
			1126: {
				slidesPerView: 4,
				spaceBetween: 20
			}
		}
	});
});
