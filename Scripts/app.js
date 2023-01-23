//Dashboard Navigation
function switchToArticles(){
    $('#articlesPage').removeClass('hidden') ;
    $('#dashboardPage').addClass('hidden') ;
    $('#authorsPage').addClass('hidden') ;
    $('#categoriesPage').addClass('hidden') ;
    $('#articlesHover').css("color", "#f97316") ;
    $('#iconArticles').css("color", "#f97316") ;
    $('#authorsHover').css("color", "#94a3b8") ;
    $('#iconAuthors').css("color", "#94a3b8") ;
    $('#categoriesHover').css("color", "#94a3b8") ;
    $('#iconCategories').css("color", "#94a3b8") ;
    $('#dashboardHover').css("color", "#94a3b8") ;
    $('#iconDashboard').css("color", "#94a3b8") ;
    $('#editCategoriesPage').addClass('hidden');
}

function switchToAuthors(){
    $('#authorsPage').removeClass('hidden');
    $('#articlesPage').addClass('hidden');
    $('#dashboardPage').addClass('hidden');
    $('#categoriesPage').addClass('hidden');
    $('#authorsHover').css("color", "#f97316") ;
    $('#iconAuthors').css("color", "#f97316") ;
    $('#articlesHover').css("color", "#94a3b8") ;
    $('#iconArticles').css("color", "#94a3b8") ;
    $('#categoriesHover').css("color", "#94a3b8") ;
    $('#iconCategories').css("color", "#94a3b8") ;
    $('#dashboardHover').css("color", "#94a3b8") ;
    $('#iconDashboard').css("color", "#94a3b8") ;
    $('#editCategoriesPage').addClass('hidden');
}

function switchToCategories(){
    $('#categoriesPage').removeClass('hidden');
    $('#authorsPage').addClass('hidden');
    $('#articlesPage').addClass('hidden');
    $('#dashboardPage').addClass('hidden');
    $('#categoriesHover').css("color", "#f97316") ;
    $('#iconCategories').css("color", "#f97316") ;
    $('#articlesHover').css("color", "#94a3b8") ;
    $('#iconArticles').css("color", "#94a3b8") ;
    $('#authorsHover').css("color", "#94a3b8") ;
    $('#iconAuthors').css("color", "#94a3b8") ;
    $('#dashboardHover').css("color", "#94a3b8") ;
    $('#iconDashboard').css("color", "#94a3b8") ;
    $('#editCategoriesPage').addClass('hidden');
}

function switchToDashboard(){
    $('#dashboardPage').removeClass('hidden');
    $('#categoriesPage').addClass('hidden');
    $('#authorsPage').addClass('hidden');
    $('#articlesPage').addClass('hidden');
    $('#dashboardHover').css("color", "#f97316") ;
    $('#iconDashboard').css("color", "#f97316") ;
    $('#categoriesHover').css("color", "#94a3b8") ;
    $('#iconCategories').css("color", "#94a3b8") ;
    $('#authorsHover').css("color", "#94a3b8") ;
    $('#iconAuthors').css("color", "#94a3b8") ;
    $('#articlesHover').css("color", "#94a3b8") ;
    $('#iconArticles').css("color", "#94a3b8") ;
    $('#editCategoriesPage').addClass('hidden');

}

function switchToEditCategoryPage(){
    $('#editCategoriesPage').removeClass('hidden');
    $('#categoriesPage').addClass('hidden');
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

//CRUD

function editCategory(id){
    let categoryId          = document.querySelector(`#categoryId${id}`);
    let categoryName        = document.querySelector(`#categoryName${id}`);
    let categoryNameValue   = document.getElementById('currentCategoryName') ;
    let categoryIdValue     = document.getElementById('categoryId') ;

    categoryNameValue.value = categoryName.textContent ;
    categoryIdValue.value   = categoryId.textContent ;
}

function updateCategory(){
    let categoryName = document.getElementById('newCategoryName').value ;
    console.log(categoryName);
    $.post('../../Classes/Category.php',{
        submit:true,
        newCategoryName:categoryName,
    }, function(){
        alert('update successfully!');
        switchToCategories();
        categoryName = "" ;

    })
}

