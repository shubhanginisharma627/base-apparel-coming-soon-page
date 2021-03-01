

   
 function email_validate(){
    
     var pattern= /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     var email=$('#email').val();
     if(email===''){
        $('.error').css('display','block');
        $('.alert').css('display','block');
        $('#email').css('border','2px solid hsl(0, 93%, 68%)');
        return false;
     }
    else{
     if(pattern.test(email)){
        $('.error').css('display','none');
        $('.alert').css('display','none');
        $('#email').css('border','none');
        return true;
     }
     else{
        $('.error').css('display','block');
        $('.alert').css('display','block');
        $('#email').css('border','2px solid hsl(0, 93%, 68%)');
        return false;
     }
    }
 }
