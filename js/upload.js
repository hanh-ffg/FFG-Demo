$(document).ready(function() {
		$('.remove-file:first').hide();
		
		$('#add-file').click(function() {
			$('<div/>', {
				'class' : 'extraFile',
				html : GetHtml()
			}).hide().appendTo('#uploadContainer').slideDown('slow');
			
			$('.remove-file:not(:first)').show();

		});
		
		$(document).on ('click', 'a.remove-file', function(){
			$(this).closest('.extraFile').remove();
		});
	})

	function GetHtml() {
		var len = $('.extraFile').length;
		var $html = $('.extraFile').clone();
		$html.find('[name=remove-file]')[0].name = "remove-file" + len;
		$html.find('[name=lblCategory]')[0].name = "lblCategory" + len;
		$html.find('[name=sCategory]')[0].name = "sCategory" + len;
		$html.find('[name=lblFileName]')[0].name = "lblFileName" + len;
		$html.find('[name=txtFileName]')[0].name = "txtFileName" + len;
		$html.find('[name=lblFile]')[0].name = "lblFile" + len;
		$html.find('[name=file]')[0].name = "file" + len;
		return $html.html();
	}
