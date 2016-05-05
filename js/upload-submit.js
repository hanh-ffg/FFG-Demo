$(document).ready(function() {
	$("#btnUpload").click(function() {
		getSubmitDateTime();
		getCategory();
		checkform();
	})
	
	$("#btnSubmit").click(function() {
		$("#form").submit();
	})
});

function getSubmitDateTime() {
	var date = new Date();
	var month = new Array();
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";

	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0' + minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;

	$("#date").html(
			month[date.getMonth()] + " " + date.getDate() + ", "
					+ date.getFullYear());
	$("#time").html(hours + ":" + minutes + " " + ampm);
}

function getCategory() {
	var $categories = $("[name^='sCategory']");

	$categories.each(function(index) {
		$("#docList").append(
				"<li>" + $categories.eq(index).children(":selected").text()
						+ "</li>");
	});
}

function checkform() {

	var valid = 0;
	if (document.getElementById("txtFname").value == "") {
		document.getElementById("missingFnm").style.display = "block";
		valid = 1;
	} else {
		document.getElementById("missingFnm").style.display = "none";
	}
	if (document.getElementById("txtLname").value == "") {
		document.getElementById("missingLnm").style.display = "block";
		valid = 1;
	} else {
		document.getElementById("missingLnm").style.display = "none";
	}
	if (document.getElementById("txtAddressLine1").value == ""
			|| document.getElementById("txtState").value == ""
			|| document.getElementById("txtPostalCode").value == "") {
		document.getElementById("missingAddress").style.display = "block";
		valid = 1;
	} else {
		document.getElementById("missingAddress").style.display = "none";
	}
	if (document.getElementById("txtPhone").value != "") {
		document.getElementById("missingContact").style.display = "none";
	} else {
		document.getElementById("missingContact").style.display = "block";
		valid = 1;
	}

	if (valid == 0) {
		$('#confirmModal').modal('show');
		// setTimeout("submitForm()", 10000);
	} else {
		return false;
	}
}
