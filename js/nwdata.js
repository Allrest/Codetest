$(document).ready(function() {
	console.log("Document ready");

	LoginPage.initialise();
	PageEnd();
});

/**
 * PageElements
 *
 * Provides easy access to elements on the page
 */
function PageElements(){}
PageElements.username = document.getElementById("password");
PageElements.password = document.getElementById("password");
PageElements.buttonLogin = $("#button_login");
PageElements.authenticator = $("#authenticator");
PageElements.feedbackMessage = $("#feedback_message");

/**
 * LoginPage
 *
 * Main logic for the login page
 */
function LoginPage(){
	/***
	PageElements.feedbackMessage.html("Here is lgpage";
	PageElements.feedbackMessage.show(190);
	***/
}

/**
 * The API URL to send POST requests to
 * You will populate this with your endpoint as part of Step 1
 */
LoginPage.apiURL = "./js/endpoint.txt";


/**
 * Initialise page element event listeners
 */
LoginPage.initialise = function(){
	PageElements.buttonLogin.click(LoginPage.login);
}


/**
 * Execute a login request to a backend
 */
LoginPage.login = function(){

	// Hide currently shown feedback message to user, if any
	LoginPage.hideFeedbackMessage();
	$("#div_subsection_authenticator").hide(200);

	$.ajax({
		url: LoginPage.apiURL,
		type: 'POST',
		dataType: "json",
		data:{
			'username': PageElements.username.value,
			'password': PageElements.password.value
		},
		success: LoginPage.successCallback,
		error: LoginPage.errorCallback
	});
}

/**
 * Callback method to handle successful POST response
 *
 * The data input parameter should be a JSON object with the following structure
 *
 * {
 *	 "result": 0,
 *	 "message": "Message to be shown",
 *	 "data": {
 *		 "country": "US"
 *	 }
 * }
 *
 * Result will be 0 for a successful request, 1 for a failed request
 * Message is an optional field with a info message to be displayed to the user
 * data.country will include the country assigned to this IP
 */
LoginPage.successCallback = function(data){
	console.log("Success");
	console.log(data);

	// Show feedback message to the user
	LoginPage.showFeedbackMessage(data.message, data.result==0);

	if(data.result){
		console.log("Login success")
		// Login successful!
	} else if(data.result == 1){
		console.log("Login failed")
		// Failed request

	}
}

/**
 * Callback method to handle erroneous POST response
 */
LoginPage.errorCallback = function(data){
	console.log("Error");
	console.log(data);

	// Show feedback message to the user
	LoginPage.showFeedbackMessage("Something went wrong", false);
}

/**
 * Method for showing feedback message to the user
 */
LoginPage.showFeedbackMessage = function(message, success){
	if(success){
		PageElements.feedbackMessage.removeClass("alert-danger");
		PageElements.feedbackMessage.addClass("alert-success");
	} else {
		PageElements.feedbackMessage.removeClass("alert-success");
		PageElements.feedbackMessage.addClass("alert-danger");
	}

	PageElements.feedbackMessage.html(message);
	PageElements.feedbackMessage.show(200);
}

/**
 * Method for hiding feedback message from the user
 */
LoginPage.hideFeedbackMessage = function(){
	PageElements.feedbackMessage.html("");
	PageElements.feedbackMessage.hide(200);
}
