let header = document.createElement('h1');
header.textContent = 'Warranty Information';
document.body.appendChild(header);



let labelFirstName = document.createElement('label');
labelFirstName.setAttribute('for', 'firstName');
labelFirstName.innerHTML = 'First Name';
document.body.appendChild(labelFirstName);

let firstName = document.createElement('input');
firstName.type = Text;
firstName.name = 'firstName'
document.body.appendChild(firstName);



let labelLastName = document.createElement('label');
labelLastName.setAttribute('for', 'lastName');
labelLastName.innerHTML = 'Last Name';
document.body.appendChild(labelLastName);

let lastName = document.createElement('input');
lastName.type = Text;
lastName.name = 'lastName'
document.body.appendChild(lastName);



let labelCompanyName = document.createElement('label');
labelCompanyName.setAttribute('for', 'companyName');
labelCompanyName.innerHTML = 'Company Name';
document.body.appendChild(labelCompanyName);

let companyName = document.createElement('input');
companyName.type = Text;
companyName.name = 'companyName'
document.body.appendChild(companyName);



let emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'email');
emailLabel.innerHTML = 'Email';
document.body.appendChild(emailLabel);

let email = document.createElement('input');
email.type = Text;
email.name = 'email'
document.body.appendChild(email);



let phoneLabel = document.createElement('label');
phoneLabel.setAttribute('for', 'phone');
phoneLabel.innerHTML = 'Phone Number';
document.body.appendChild(phoneLabel);

let phone = document.createElement('input');
phone.type = Text;
phone.name = 'phone'
document.body.appendChild(phone);



let faxLabel = document.createElement('label');
faxLabel.setAttribute('for', 'fax');
faxLabel.innerHTML = 'Fax Number';
document.body.appendChild(faxLabel);

let fax = document.createElement('input');
fax.type = Text;
fax.name = 'fax'
document.body.appendChild(fax);



let addressLabel = document.createElement('label');
addressLabel.setAttribute('for', 'address');
addressLabel.innerHTML = 'Address';
document.body.appendChild(addressLabel);

let address = document.createElement('input');
address.type = Text;
address.name = 'fax'
document.body.appendChild(address);



let cityLabel = document.createElement('label');
cityLabel.setAttribute('for', 'city');
cityLabel.innerHTML = 'City';
document.body.appendChild(cityLabel);

let city = document.createElement('input');
city.type = Text;
city.name = 'city'
document.body.appendChild(city);



let stateLabel = document.createElement('label');
stateLabel.setAttribute('for', 'state');
stateLabel.innerHTML = 'State';
document.body.appendChild(stateLabel);

let state = document.createElement('input');
state.type = Text;
state.name = 'state'
document.body.appendChild(state);


let div = document.createElement('div');


let saveButton = document.createElement('button');
saveButton.innerText = 'Save'
div.appendChild(saveButton);



let closeButton = document.createElement('button');
closeButton.innerText = 'Close'
div.appendChild(closeButton);

document.body.appendChild(div);