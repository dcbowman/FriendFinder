//takes basic info and adds it to the database
$(addBtn).on("click", function(){
			//creates information api to send to database
			var newMember = 
			{
				name: $("#name").val().trim(),
				location: $("#location").val().trim(),
				age: $("#age").val().trim(),
				//photo:$("#photo").val().trim() //need to check
				
			};

			var currentURL = window.location.origin;

			//adds new member to the api database
			$.post( currentURL + "/api/new", newMember)
				.done(function(data){
					console.log(data);
					alert("Adding profile")
				})

			return false;

		});	
