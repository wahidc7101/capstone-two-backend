<div class="row">
		<div class="col-4">
			<div class="card">
	<img class="card-image product-images" src="${product.image}"alt="place holder image"/>
				<div class="card-content">
	<h3 class="card-title">${product.name}</h3>
	<p class="card-text">
	<ul>
	<li class="card-title">${product.description}</li>
	<ul>
	<span class="strikethrough-price">$${product.originalPrice}</span>
	<span class="our-price">$${product.price}</span></p>
	 <button class="delete" data-id="${product.id}">Delete</button>
 	 <button class="edit" data-id="${product.id}">Edit</button>
 	</ul>
</div>
	</div>
		</div>
			</div>`