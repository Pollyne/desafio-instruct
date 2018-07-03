var users = []; // variavel global

//função fetch
fetch('https://jsonplaceholder.typicode.com/users/')
  .then(function(response) {
    response.json().then(function(data) {
      users = data;
      renderData(data);
    })
      .catch(function(err) {
        console.error('Failed retrieving information', err);
      });
  });

function renderData(data) {
  var el = document.getElementById("myCards");
  while (el.firstChild) el.removeChild(el.firstChild);

  for (var key in data) {
    var data_inner = data[key].name +
      '<br><ul class=b>' +
      '<li><b>Email:</b> ' + data[key].email +
      '<li><b>Phone:</b> ' + data[key].phone +
      '<li><b>Website:</b> ' +data[key].website +
      '<li><b>Street:</b> ' + data[key].address.street +
      '<li><b>Suite:</b> ' + data[key].address.suite +
      '<li><b>City:</b> ' + data[key].address.city +
      '<li><b>ZipCode:</b> ' + data[key].address.zipcode +
      '</ul>';

    var addCard = document.createDocumentFragment(),
      newDivCard = document.createElement('div'),
      newDivInner = document.createElement('div');

    newDivCard.id = 'c' + key;
    newDivCard.className = 'card';

    newDivInner.id = 'ci' + key;
    newDivInner.className = 'card__inner';
    newDivInner.innerHTML = data_inner;

    newDivCard.appendChild(newDivInner);
    addCard.appendChild(newDivCard);

    document.getElementById("myCards").appendChild(addCard);
  }
}

function filterOnChange() {
console.log(users);
  var filter = document.getElementById('myfilter').value;
	console.log(filter);
  var filteredUsers = users.filter(function(user) {
		return user.email.toUpperCase().includes(filter.toUpperCase());
  });

console.log(filteredUsers);
  
	renderData(filteredUsers);
}
