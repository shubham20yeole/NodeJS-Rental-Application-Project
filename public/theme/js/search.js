$( document ).ready(function() {
	$('#searchtable').hide();
});
$(document).on("keyup change","#searchloccation, #searchcategory, #searchtype, #searchbedroom",function() {
	var loc = $('#searchloccation').val();
	var cat = $('#searchcategory').val();
	var type = $('#searchtype').val();
	var bed = $('#searchbedroom').val();
	var price = $('#').val();
	var area = $('#').val();
  $.post( "/search/", { location: loc, category: cat, type: type, bedroom: bed})
    .done(function( data ) 
    	{				
    		$('#searchtable').show();

    		$("#searchlength").text(data.length);
    		$("#searchcity").text(loc);
    		$("#displaysearch").text("");
    		var xL = data.length;
			for(i=0; i<xL; i++){
				$('#displaysearch').append('<tr><td> '+data[i].city+': '+data[i].staddress+'</td><td> Price:'+data[i].cost+'</td><td>'+data[i].area+' SQ Feet</td><td>'+data[i].bedroom+'</td><td><a class="link" href="detailedproperty/'+data[i].timestamp+'">View More</a></td></tr>'); // do what
			}
    	});
});

