/* August 1, 2018, Adam Elaoud - aelaoud

Copyright (c) 2018 by Cisco Systems, Inc.
All rights reserved. */

/* ****** Entering Recipients at submission section ****** */

// collect user inputs
let recipient_button = document.querySelector("#add-recipient");
let recipient_input = document.querySelector("#enter-recipients")
let recipient_list = document.querySelector("#recipients");

// create and insert list element into DOM
function create_list_element() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(recipient_input.value));
	li.classList.add("list-group-item");
	li.classList.add("rounded-0");
	recipient_list.insertBefore(li, recipient_list.childNodes[0]);
	recipient_input.value = "";
}

function add_recipients_click() {
	if (recipient_input.value.length > 0 ) {
		create_list_element();
	}
}

function add_recipients_keypress(event) {
	if (recipient_input.value.length > 0 && event.keyCode === 13) {
		create_list_element();
	}
}

recipient_button.addEventListener("click", add_recipients_click);
recipient_input.addEventListener("keypress", add_recipients_keypress);

/* ****** subsection selected color indicator ****** */

let test_mode = null;
let platform = null;
let options = [false, false]; // options[stress test, release to release]

let test_sub_1 = document.querySelector("#test-sub-1");
let test_sub_2 = document.querySelector("#test-sub-2");
let plat_sub_1 = document.querySelector("#plat-sub-1");
let plat_sub_2 = document.querySelector("#plat-sub-2");
let opt_sub_1 = document.querySelector("#opt-sub-1");
let opt_sub_2 = document.querySelector("#opt-sub-2");

function update_data(elem) {
	if (elem === test_sub_1) {
		test_mode = "custom";
		options[0] = false;
	}

	if (elem === test_sub_2)
		test_mode = "component";

	if (elem === plat_sub_1)
		platform = "hardware";

	if (elem === plat_sub_2)
		platform = "simulation";
}

function clean_data(elem) {
	if (elem === test_sub_1 || elem === test_sub_2)
		test_mode = null;

	if (elem === plat_sub_1 || elem === plat_sub_2)
		platform = null;
}

function update_options_data(elem) {
	if (elem === opt_sub_1) {
		if (options[0] === true) {
			options[0] = false;
		} else if (test_mode !== "custom") {
			options[0] = true;
		}
	}

	if (elem === opt_sub_2) {
		if (options[1] === true) {
			options[1] = false;
		} else {
			options[1] = true;
		}
	}
}

function remove_bg_color(elem, color) {
	if (elem.style.backgroundColor === color) {
		elem.style.background = "";
	}
}

// change background color (element: str, color: str hex code)
function change_bg_color (element, color) {
	elem = document.querySelector("#" + element);
	current_bg = elem.style.backgroundColor;

	if (elem === test_sub_1)
		remove_bg_color(test_sub_2, "rgb(113, 113, 210)");

	if (elem === test_sub_2)
		remove_bg_color(test_sub_1, "rgb(113, 113, 210)");

	if (elem === plat_sub_1)
		remove_bg_color(plat_sub_2, "rgb(66, 172, 229)");

	if (elem === plat_sub_2)
		remove_bg_color(plat_sub_1, "rgb(66, 172, 229)");

	if (current_bg === "rgb(113, 113, 210)" ||
		current_bg === "rgb(66, 172, 229)" ||
		current_bg === "rgb(226, 175, 74)") {
		elem.style.background = "";
		clean_data(elem);
		update_options_data(elem);
	} else {
		// If element is custom remove stress test selection
		if (elem === test_sub_1)
			opt_sub_1.style.background = "";

		if (!(elem === opt_sub_1 && test_mode === "custom"))
			elem.style.background = color;

		update_data(elem);
		update_options_data(elem);
	}

	console.log(test_mode + " " + platform + " " + options);
}

/* ****** reactive display ****** */

let custom = document.querySelector("#custom");
let component = document.querySelector("#component");
let yaml_path = document.querySelector("#yaml-path");
let simulations = document.querySelector("#simulations");

let test_mode_container = document.querySelector("#testing-mode");
let platform_container = document.querySelector("#platform");

function show_test_input() {
	if (test_mode === "custom") {
		custom.style.display = "block";
		component.style.display = "none";
	} else if (test_mode === "component") {
		component.style.display = "block";
		custom.style.display = "none";
	} else {
		custom.style.display = "none";
		component.style.display = "none";
	}
}

function show_platform_input() {
	if (platform === "hardware") {
		yaml_path.style.display = "block";
		simulations.style.display = "none";
	} else if (platform === "simulation") {
		simulations.style.display = "block";
		yaml_path.style.display = "none";
	} else {
		yaml_path.style.display = "none";
		simulations.style.display = "none";
	}
}

test_mode_container.addEventListener("click", show_test_input);
platform_container.addEventListener("click", show_platform_input);

/* ****** form submission ****** */

let submit_button = document.querySelector(".submission-btn");
let list = document.querySelector("#recipients").getElementsByTagName("li");
let recipients = [];

function post(url, data) {
	// create form to submit with
	let form = document.createElement("form");
	form.setAttribute("method", "POST");
	form.setAttribute("action", url);
	form.setAttribute("name", "submission");

	for(let key in data) {
        if(data.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", data[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

function submit_data() {
	for (let i = 0; i < list.length; i++) {
		recipients[i] = list[i].textContent;
	}

	let data = {
		mode: test_mode,
		plat: platform,
		stress: options[0],
		release: options[1],
		users: recipients
	};

	// input commands
	if (test_mode === "custom") {
		if (custom.value === "")
			alert("You must enter a command to test!");
			return;

		data["clis"] = custom.value;
	} else if (test_mode === "component") {
		if (component.value === "")
			alert("You must enter a command to test!");
			return;

		data["clis"] = component.value;
	}

	//input yaml path or simulation environments
	if (platform === "hardware") {
		data["path"] = yaml_path.value;
	} else if (platform === "simulation") {
		data["sim"] = simulations.value;
	}

	post("submission", data);
}

submit_button.addEventListener("click", submit_data);
