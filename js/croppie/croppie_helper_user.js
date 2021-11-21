$(document).ready(function(){    
	$image_crop = $('#upload-image').croppie({
		enableExif: true,
		viewport: {
			width: 200,
			height: 200,
			type: 'circle',
			quality: 0.6
		},
		boundary: {
			width: 300,
			height: 300
		}
	});
	$('#set_pic').hide();
	$('#box-image').on('change', function () { 
		var reader = new FileReader();
		reader.onload = function (e) {
			$image_crop.croppie('bind', {
				url: e.target.result
			}).then(function(){
				$('#set_pic').show();
			});			
		}
		reader.readAsDataURL(this.files[0]);
	});
	$('#set_pic').on('click',function() {
		$image_crop.croppie('result', {
			type: 'canvas',
			size: 'viewport',
			quality: 0.6
		}).then(function (response) {
			$('#profile_pic').attr('src',response);
			$("#croppieModal").modal('hide');
		});
	})
	$('#cancel_pic').on('click',function() {
		$("#croppieModal").modal('hide');
	})

	$('#select_pic').on('click',function() {
		$('#box-image').trigger('click');
	})

    $('#profile_pic').on('click',function() {
        $("#croppieModal").modal({
            backdrop: false
        });
        $('#box-image').trigger('click');
		
	})
});
