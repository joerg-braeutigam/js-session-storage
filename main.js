const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.setAttribute("class", "_h1");

// Daten aus dem localStorage abrufen
let storedName = localStorage.getItem("Name");
let storedImage = localStorage.getItem("Image");

if (storedName === null || storedImage === null) {
	const form = document.createElement("form");
	const nameLabel = document.createElement("label");
	const nameInput = document.createElement("input");
	const imageLabel = document.createElement("label");
	const imageInput = document.createElement("input");
	const submitBtn = document.createElement("button");
	const br1 = document.createElement("br");
	const br2 = document.createElement("br");

	form.addEventListener("submit", event => {
		event.preventDefault();
		storedName = nameInput.value;
		localStorage.setItem("Name", storedName);
		const uploadedImage = imageInput.files[0];
		const reader = new FileReader();
		reader.onloadend = function () {
			storedImage = reader.result;
			localStorage.setItem("Image", storedImage);
			h1.innerHTML = `Hallo ${storedName}`;
			const imageElement = document.createElement("img");
			imageElement.src = storedImage;
			imageElement.alt = "Uploaded Image";
			imageElement.setAttribute("class", "_image");
			body.appendChild(h1);
			body.appendChild(imageElement);
			form.remove();
		};
		reader.readAsDataURL(uploadedImage);
	});

	nameLabel.textContent = "Dein Name:";

	nameInput.setAttribute("type", "text");
	nameInput.setAttribute("placeholder", "Dein Name");

	imageLabel.textContent = "Bild:";
	imageInput.setAttribute("type", "file");

	submitBtn.setAttribute("type", "submit");
	submitBtn.innerText = "Speichern";

	form.appendChild(nameLabel);
	form.appendChild(nameInput);
	form.appendChild(br1);
	form.appendChild(imageLabel);
	form.appendChild(imageInput);
	form.appendChild(br2);
	form.appendChild(submitBtn);
	body.appendChild(form);
} else {
	h1.innerHTML = `Hallo ${storedName}`;
	const imageElement = document.createElement("img");
	imageElement.src = storedImage;
	imageElement.alt = "Uploaded Image";
	imageElement.setAttribute("class", "_image");

	body.appendChild(h1);
	body.appendChild(imageElement);
}
