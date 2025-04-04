function PageEnd(){
	PageElements.feedbackMessage.html('Hello World');
	PageElements.feedbackMessage.show(200);

}
function PageUse(){
	PageElements.feedbackMessage.html(PageElements.password.value);
	PageElements.feedbackMessage.show(200);

}
jQuery["postJSON"] = function( url, data, callback ) {
    // shift arguments if data argument was omitted
    if ( jQuery.isFunction( data ) ) {
        callback = data;
        data = undefined;
    }
	console.log(data.username);
	console.log(data.password);
	

    return jQuery.ajax({
        url: url,
        type: "POST",
        contentType:"application/json; charset=utf-8",
        dataType: "json",
        data: data,
        success: callback
    });
};