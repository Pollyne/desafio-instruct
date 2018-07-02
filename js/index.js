fetch('https://jsonplaceholder.typicode.com/users/')
  .then(function(response){
    response.json().then(function(data){
      
      for(var key in data) {
         console.log(data[key].name);

	 var data_inner = data[key].name + 
		 '<br><ul class=b>' + 
		 '<li><b>Email:</b> ' + data[key].email + 
		 '<li><b>Phone:</b> ' + data[key].phone +
		 '<li><b>City:</b> ' + data[key].address.city +
		 '</ul>'; 
	 
	 var addCard = document.createDocumentFragment(),
		 newDivCard = document.createElement('div'),
		 newDivInner = document.createElement('div');

   	 newDivCard.id = 'c'+key;
   	 newDivCard.className = 'card';

   	 newDivInner.id = 'ci'+key;
   	 newDivInner.className = 'card__inner';
	 newDivInner.innerHTML = data_inner;

   	 newDivCard.appendChild(newDivInner);
   	 addCard.appendChild(newDivCard);

	 document.getElementById("myCards").appendChild(addCard);
      }     
    });
  })
  .catch(function(err){
    console.error('Failed retrieving information', err);
  });