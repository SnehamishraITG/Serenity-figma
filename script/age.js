let container = document.querySelector(".container");
        let popup = document.querySelector(".popup")
        let formdata = document.getElementById("formdata");
        let answer = document.getElementById("verification");
        let verify = document.querySelector(".verify")
		let logo=document.querySelector(".popup-logo");
        if (localStorage.getItem("age")) {
            container.classList.remove("opacity");
            popup.classList.add("hidden");
			popup.classList.remove("flex");
        };

        formdata.addEventListener("submit", ((e) => {
            e.preventDefault();
            let age = document.getElementById("age").value
            console.log(age.length);
            if(age.length >= 1 && age.length <= 3 && age < 101 && age > 1 &&  Number(age)){ 
                if (age < 18) {
                    formdata.classList.add("hidden");
					  formdata.classList.remove("age-verify");
                    verify.classList.remove("hidden")
                    answer.innerText = "🔴 you're age must be 18 year and above 😌";
                }else{
                    formdata.classList.add("hidden");
					  formdata.classList.remove("age-verify");
                    verify.classList.remove("hidden");
					logo.classList.remove("hidden");
                    answer.innerText = "Welcome to our Serenity store😊";
                    localStorage.setItem("age", age);
                    setTimeout((e) => {
                        container.classList.remove("opacity");
                        popup.classList.add("hidden");
						popup.classList.remove("flex");
                    }, 2000);
                }
            }else{
                 formdata.classList.add("hidden");
				   formdata.classList.remove("age-verify");
                    verify.classList.remove("hidden")
                    answer.innerText = "🔴 please enter valid age 😐";
            }

        }
        ));