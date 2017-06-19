<!DOCTYPE html>
<html lang="ko">
    <body>
        <p id="timezones"></p>
        <div id="execute">execute</div>
        <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script>
        $('#execute').click(function(){
        $.ajax({
            url:'./time3.php',
            dataType:'json',
            success:function(data){
                    var str = '';
                    for(var name in data){
                        str += '<li>'+data[name]+'</li>';
                    }
                    $('#timezones').html('<ul>'+str+'</ul>');
                }
            })
        })
        </script>
    </body>
</html>