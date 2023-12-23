export const placeholder = {};

const response = await fetch('/api/unicorns');
const unicorns = await response.json();

/** @type {HTMLElement} */
const list = document.querySelector('#unicorns-list');
/** @type {HTMLTemplateElement} */
const template = document.querySelector('#unicorn-card-template');

for (const unicorn of unicorns) {
	const clone = template.content.cloneNode(true);

	for (const [key, value] of Object.entries(unicorn)) {
		clone.querySelector('article').dataset[key] = value;
	}

	clone.querySelector('h2').textContent = unicorn.name;

	clone.querySelector('img').src = `/images/unicorns/${unicorn.id}.jpeg`;

	list.appendChild(clone);
}

list.addEventListener('click', (evt) => {
	/** @type {HTMLButtonElement} */
	const target = evt.target;

	if (!target.matches('button')) {
		return;
	}

	const unicornData = target.closest('[data-id]').dataset;

	const dialog = document.querySelector('#unicorn-details');

	for (const [key, value] of Object.entries(unicornData)) {
		const element = dialog.querySelector(`#unicorn-details-${key}`);

		if (element) {
			element.textContent = value;
		}
	}

	const image = dialog.querySelector('#unicorn-details-image');

	image.src = `/images/unicorns/${unicornData.id}.jpeg`;

	dialog.showModal();
});

document.querySelector('#close-button')?.addEventListener('click', () => {
	document.querySelector('#unicorn-details')?.close();
});
