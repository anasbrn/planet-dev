//Dashboard Navigation
function switchToArticles(){
    $('#articles').removeClass('hidden') ;
    $('#dashboard').addClass('hidden') ;
    $('#authors').addClass('hidden') ;
    $('#settings').addClass('hidden') ;
    $('#articlesHover').css("color", "#f97316") ;
    $('#iconArticles').css("color", "#f97316") ;
    $('#authorsHover').css("color", "#94a3b8") ;
    $('#iconAuthors').css("color", "#94a3b8") ;
    $('#settingsHover').css("color", "#94a3b8") ;
    $('#iconSettings').css("color", "#94a3b8") ;
    $('#dashboardHover').css("color", "#94a3b8") ;
    $('#iconDashboard').css("color", "#94a3b8") ;
}

function switchToAuthors(){
    $('#authors').removeClass('hidden');
    $('#articles').addClass('hidden');
    $('#dashboard').addClass('hidden');
    $('#settings').addClass('hidden');
    $('#authorsHover').css("color", "#f97316") ;
    $('#iconAuthors').css("color", "#f97316") ;
    $('#articlesHover').css("color", "#94a3b8") ;
    $('#iconArticles').css("color", "#94a3b8") ;
    $('#settingsHover').css("color", "#94a3b8") ;
    $('#iconSettings').css("color", "#94a3b8") ;
    $('#dashboardHover').css("color", "#94a3b8") ;
    $('#iconDashboard').css("color", "#94a3b8") ;
}

function switchToSettings(){
    $('#settings').removeClass('hidden');
    $('#authors').addClass('hidden');
    $('#articles').addClass('hidden');
    $('#dashboard').addClass('hidden');
    $('#settingsHover').css("color", "#f97316") ;
    $('#iconSettings').css("color", "#f97316") ;
    $('#articlesHover').css("color", "#94a3b8") ;
    $('#iconArticles').css("color", "#94a3b8") ;
    $('#authorsHover').css("color", "#94a3b8") ;
    $('#iconAuthors').css("color", "#94a3b8") ;
    $('#dashboardHover').css("color", "#94a3b8") ;
    $('#iconDashboard').css("color", "#94a3b8") ;
}

function switchToDashboard(){
    $('#dashboard').removeClass('hidden');
    $('#settings').addClass('hidden');
    $('#authors').addClass('hidden');
    $('#articles').addClass('hidden');
    $('#dashboardHover').css("color", "#f97316") ;
    $('#iconDashboard').css("color", "#f97316") ;
    $('#settingsHover').css("color", "#94a3b8") ;
    $('#iconSettings').css("color", "#94a3b8") ;
    $('#authorsHover').css("color", "#94a3b8") ;
    $('#iconAuthors').css("color", "#94a3b8") ;
    $('#articlesHover').css("color", "#94a3b8") ;
    $('#iconArticles').css("color", "#94a3b8") ;
}


///////Validation login
function validationName(){
    let firstName   = document.getElementById('firstName') ;
    let lastName    = document.getElementById('lastName') ;
    let namePattern = /^[a-zA-Z]{3,15}$/ ;

    if (firstName.value.match(namePattern)){
        $('#firstName').css('color', "#f97316") ;
        $('#firstName').removeClass('focus:border-[#000]') ;
        $('#firstName').removeClass('focus:ring-[#000]') ;
        $('#firstName').removeClass('focus:border-red-600') ;
        $('#firstName').removeClass('focus:ring-red-600') ;
        $('#firstName').addClass('focus:border-orange-500') ;
        $('#firstName').addClass('focus:ring-orange-500') ;
        $('#register').attr('type', "submit");
    }
    
    else{
        $('#firstName').css('color', "red") ;
        $('#firstName').removeClass('focus:border-[#000]') ;
        $('#firstName').removeClass('focus:ring-[#000]') ;
        $('#firstName').removeClass('focus:border-orange-500') ;
        $('#firstName').removeClass('focus:ring-orange-500') ;
        $('#firstName').addClass('focus:border-red-600');
        $('#firstName').addClass('focus:ring-red-600');
        $('#register').attr('type', "button");
    }

    if (lastName.value.match(namePattern)){
        $('#lastName').css('color', "#f97316") ;
        $('#lastName').removeClass('focus:border-[#000]') ;
        $('#lastName').removeClass('focus:ring-[#000]') ;
        $('#lastName').removeClass('focus:border-red-600') ;
        $('#lastName').removeClass('focus:ring-red-600') ;
        $('#lastName').addClass('focus:border-orange-500') ;
        $('#lastName').addClass('focus:ring-orange-500') ;
        $('#register').attr('type', "submit");
    }

    else{
        $('#lastName').css('color', "red") ;
        $('#lastName').removeClass('focus:border-[#000]') ;
        $('#lastName').removeClass('focus:ring-[#000]') ;
        $('#lastName').removeClass('focus:border-orange-500') ;
        $('#lastName').removeClass('focus:ring-orange-500') ;
        $('#lastName').addClass('focus:border-red-600');
        $('#lastName').addClass('focus:ring-red-600');
        $('#register').attr('type', "button");

    }
}

function validationEmail(){
    let email = document.getElementById('email') ;
    let emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ ;

    if (email.value.match(emailPattern)){
        $('#email').css('color', "#f97316") ;
        $('#email').removeClass('focus:border-[#000]') ;
        $('#email').removeClass('focus:ring-[#000]') ;
        $('#email').removeClass('focus:border-red-600') ;
        $('#email').removeClass('focus:ring-red-600') ;
        $('#email').addClass('focus:border-orange-500') ;
        $('#email').addClass('focus:ring-orange-500') ;
        $('#register').attr('type', "submit");
    }

    else{
        $('#email').css('color', "red") ;
        $('#email').removeClass('focus:border-[#000]') ;
        $('#email').removeClass('focus:ring-[#000]') ;
        $('#email').removeClass('focus:border-orange-500') ;
        $('#email').removeClass('focus:ring-orange-500') ;
        $('#email').addClass('focus:border-red-600') ;
        $('#email').addClass('focus:ring-red-600') ;
        $('#register').attr('type', "button");
    }
}

function validationPassword(){
    let password = document.getElementById('password') ;
    let passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ ; 

    if (password.value.match(passwordPattern)){
        $('#password').css('color', "#f97316") ;
        $('#password').removeClass('focus:border-[#000]') ;
        $('#password').removeClass('focus:ring-[#000]') ;
        $('#password').removeClass('focus:border-red-600') ;
        $('#password').removeClass('focus:ring-red-600') ;
        $('#password').addClass('focus:border-orange-500') ;
        $('#password').addClass('focus:ring-orange-500') ;
        $('#register').attr('type', "submit");
    }

    else{
        $('#password').css('color', "red") ;
        $('#password').removeClass('focus:border-[#000]') ;
        $('#password').removeClass('focus:ring-[#000]') ;
        $('#password').removeClass('focus:border-orange-500') ;
        $('#password').removeClass('focus:ring-orange-500') ;
        $('#password').addClass('focus:border-red-600');
        $('#password').addClass('focus:ring-red-600');
        $('#register').attr('type', "button");
    }
}