$(function(){
    $('#search').on('click',function(e){
        e.preventDefault();
        $('.content').show();
        $('#js-tbody').html(''); 
   $.ajax({
     type     : 'GET',
     url      : 'data.json',
     async    : true,
     dataType : 'json',
     success  : function (data) {
                    var thisdata = data;
                    var con = $('#select').val();
         
            //表格內容開始
         
            	for(var i=0; i<thisdata.length; i++){
					var name=thisdata[i].PRGNAME;
					var org=thisdata[i].PRGACT;
                    var place=thisdata[i].PRGPLACE;
					var date=thisdata[i].PRGDATE;
		            var time=thisdata[i].PRGSTIME;
                    
                    
                    var result =
                        '<tr><td>' + name + '</td><td>' + org +'</td><td class="tabletd place">' + place + '</td><td class="tabletd date">' + date + '</td><td class="tabletd time">' + time + '</td></tr>';

                    // Search info
                    
					if($('#select').val() === thisdata[i].PRGTICKET) {
                        
						$('#js-tbody').append(result);
						$('label').text('');	
                        
					} // End of Search
	        
				}// End of for
         //表格內容結束
         
         } //end of success function
 });//end of ajax

        });//end of search click function
});//end of $(function(){


//NOTE http://opendata.khcc.gov.tw/public/OD_art_program.ashx?SDate=2017/02/18&EDate=2017/08/18