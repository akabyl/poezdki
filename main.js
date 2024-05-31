const dateInput = document.querySelectorAll('.form__input-date');

dateInput.forEach(date =>
	date.addEventListener('change', function () {
		if (date.value) {
			date.classList.add('has-value');
		} else {
			date.classList.remove('has-value');
		}
	})
);
