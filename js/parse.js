$( document ).ready(function() {

	$.getJSON("/exercise/emails.json", function(result) {

		for (var i = 0; i < result.messages.length; i++) { 

			if(result.messages[i].tags == ''){ 
			      result.messages[i].tags = "&nbsp;";
			    }

			var date = result.messages[i].date.substring(0,10);

			result.messages[i].date = date;

			var append ='<div class="item" id="' + result.messages[i].id + '"><div class="name">' + result.messages[i].sender + '</div><div class="subject">' + result.messages[i].subject + '</div><div class="tags">' + result.messages[i].tags +'</div><div class="date">' + result.messages[i].date + '</div><div class="message">' + result.messages[i].body + '</div></div>';
			$('#messageBody').append(append);
		}

   });

	//SHOW HIDE EMAIL ITEMS

	$( document ).ready(function() {
    $('.item').live('click',function() {
     $(this).find('.message').toggle();
    });
    });

	

});