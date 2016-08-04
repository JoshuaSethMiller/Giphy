		var cars = ['350z', 'Dodge Challenger', 'Shelby GT'];

		function displayCarInfo() {
				var car = $(this).attr('data');

				var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC";
				$.ajax({
						url: queryURL,
						method: 'GET'
				}).done(function(response) {
						var movieDiv = $('<div class="car">');
						var rating = response.rating;
						var pOne = $('<p>').text("Rating: " + rating);
						carDiv.append(pOne);

						var image = $('<img>').attr("src", response.images);
						carDiv.append(image);
						$('#carView').prepend(carDiv);
				});
		}

		function renderButtons() {
				$('#buttonsView').empty();
				for (var i = 0; i < cars.length; i++) {
						var a = $('<button>')
						a.addClass('car');
						a.attr('data', cars[i]);
						a.text(cars[i]);
						$('#buttonsView').append(a);
				}
		}

		$('#addCar').on('click', function() {
				var car = $('#car-input').val().trim();
				cars.push(car);

				renderButtons();
				return false;
		})
		$(document).on('click', '.car', displayCarInfo);
		renderButtons();
