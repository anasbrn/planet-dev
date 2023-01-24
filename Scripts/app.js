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
    $('#editAuthorsPage').addClass('hidden');
    $('#editArticlesPage').addClass('hidden');
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
    $('#editAuthorsPage').addClass('hidden');
    $('#editArticlesPage').addClass('hidden');
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
    $('#editAuthorsPage').addClass('hidden');
    $('#editArticlesPage').addClass('hidden');
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
    $('#editAuthorsPage').addClass('hidden');
    $('#editArticlesPage').addClass('hidden');

}

function switchToEditCategoryPage(){
    $('#editCategoriesPage').removeClass('hidden');
    $('#categoriesPage').addClass('hidden');
}

function switchToEditAuthorsPage(){
    $('#editAuthorsPage').removeClass('hidden');
    $('#authorsPage').addClass('hidden');
}

function switchToEditArticlesPage(){
    $('#editArticlesPage').removeClass('hidden');
    $('#articlesPage').addClass('hidden');
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

//CRUD CATEGORY
function editCategory(id){
    let categoryId          = document.querySelector(`#categoryId${id}`);
    let categoryName        = document.querySelector(`#categoryName${id}`);
    let categoryNameValue   = document.getElementById('currentCategoryName') ;
    let categoryIdValue     = document.getElementById('categoryId') ;

    categoryNameValue.value = categoryName.textContent ;
    categoryIdValue.value   = categoryId.textContent ;
}

function updateCategory(){
    let categoryName = document.getElementById('newCategoryName').value;
    let catId = document.getElementById('categoryId')
    $.post('../../Classes/Category.php',{
        editCategory:true,
        newCategoryName: categoryName,
        categoryId: catId.value

    }, function(){
        alert('The category has been updated successfully!');
        switchToCategories();
        document.getElementById('newCategoryName').value = "" ;

    })
    listCategories();
}

function deleteCategory(id){
    let catId = document.getElementById(`categoryId${id}`)
    // console.log(catId.textContent);
    $.post('../../Classes/Category.php',{
        deleteCategory:true,
        categoryIdDelete:catId.textContent,
    }, function(){
        // alert('The category has been deleted successfully!');

    })
    listCategories();
}

function addCategory(){
    let newCategoryName = document.getElementById('categoryName');
    $.post('../../Classes/Admin.php',{
        addCategory:true,
        categoryName:newCategoryName.value,
    }, function(){
        alert('The category has been added successfully!');
        switchToCategories() ;
    })

    listCategories() ;
}


function listCategories(){
    document.getElementById('categoryRows').innerHTML = "";
    document.getElementById('selectCategory').innerHTML = "<option>Choose a category</option>";
    document.getElementById('newArticleCategory').innerHTML = "<option>Choose a category</option>";
    $.post('../../Classes/Category.php',{
        getCategory:true,
    }, function(data, status){
        getCategory(data);
        console.log(data);
    }, "json");
}

function getCategory(categories){
        for (category of categories){
            document.getElementById('categoryRows').innerHTML += 
            `<tr>
                <td class="px-4 py-2 text-center" name="categoryIdDelete" id="categoryId${category['categoryId']}">${category['categoryId']}</td>
                <td class="px-4 py-2 text-center"  id="categoryName${category['categoryId']}">${category['categoryName']}</td>
                <td class="px-4 py-2 text-center">
                    <a class="rounded p-2 bg-slate-200 focus:bg-slate-300" onclick="switchToEditCategoryPage(); editCategory(${category['categoryId']})" style="cursor:pointer;"><i class="fa fa-pen text-orange-500 hover:text-orange-800"></i></a>
                    <a name="deleteCategory" id="deleteCategory" class="rounded p-2 bg-slate-200 focus:bg-slate-300" onclick="deleteCategory(${category['categoryId']})"><i class="fa fa-trash text-orange-500 hover:text-orange-800" style="cursor: pointer;"></i></a>
                </td>
            </tr>`

            document.getElementById('selectCategory').innerHTML+=
            `
            <option id="${category['categoryId']}">${category['categoryName']}</option>
            `

            document.getElementById('newArticleCategory').innerHTML+=
            `
            <option class="newArticleCategory" id="${category['categoryId']}">${category['categoryName']}</option>
            `
        }
}

//CRUD AUTHOR
function listAuthors(){
    document.getElementById('authorRows').innerHTML = "";
    document.getElementById('selectAuthor').innerHTML = "<option>Choose an author</option>";
    document.getElementById('newArticleAuthor').innerHTML = "<option>Choose an author</option>";
    $.post('../../Classes/Author.php',{
        getAuthor:true,
    }, function(data, status){
        getAuthor(data);
        console.log(data);
    }, "json");
}

function getAuthor(authors){
        for (author of authors){
            document.getElementById('authorRows').innerHTML += 
            `<tr>
                <td class="px-4 py-2 text-center hidden" name="authorId" id="authorId${author['authorId']}">${author['authorId']}</td>
                <td class="px-4 py-2 text-center"id="authorFirstName${author['authorId']}">${author['firstName']}</td>
                <td class="px-4 py-2 text-center" id="authorLastName${author['authorId']}">${author['lastName']}</td>
                <td class="px-4 py-2 text-center" id="authorBirthday${author['authorId']}">${author['birthday']}</td>
                <td class="px-4 py-2 text-center">??</td>
                <td class="px-4 py-2 text-center">
                    <a class="rounded p-2 bg-slate-200 focus:bg-slate-300" onclick="switchToEditAuthorsPage(); editAuthor(${author['authorId']})" style="cursor:pointer;"><i class="fa fa-pen text-orange-500 hover:text-orange-800"></i></a>
                    <a name="deleteAuthor" id="deleteAuthor" class="rounded p-2 bg-slate-200 focus:bg-slate-300" onclick="deleteAuthor(${author['authorId']})"><i class="fa fa-trash text-orange-500 hover:text-orange-800" style="cursor: pointer;"></i></a>
                </td>
            </tr>`

            document.getElementById('selectAuthor').innerHTML+=
            `
            <option id="${author['authorId']}">${author['firstName']}`+` `+`${author['lastName']}</option>
            `

            document.getElementById('newArticleAuthor').innerHTML+=
            `
            <option class="newArticleAuthor" id="${author['authorId']}">${author['firstName']}`+` `+`${author['lastName']}</option>
            `
        }
}

function addAuthor(){
    let firstName = document.getElementById('authorFirstName');
    let lastName = document.getElementById('authorLastName');
    let birthday = document.getElementById('authorBirthday');
    $.post('../../Classes/Admin.php',{
        addAuthor:true,
        authorFirstName:firstName.value,
        authorLastName:lastName.value,
        authorBirthday:birthday.value,
    }, function(){
        alert('The author has been added successfully!');
    })

    listAuthors() ;
}

function editAuthor(id){
    let authorId        = document.querySelector(`#authorId${id}`);
    let firstName       = document.querySelector(`#authorFirstName${id}`);
    let lastName        = document.querySelector(`#authorLastName${id}`);
    let birthday        = document.querySelector(`#authorBirthday${id}`);

    let newFirstName    = document.getElementById('newAuthorFirstName');
    let newLastName     = document.getElementById('newAuthorLastName');
    let newBirthday     = document.getElementById('newAuthorBirthday');

    newFirstName.value  = firstName.textContent;
    newLastName.value   = lastName.textContent;
    newBirthday.value   = birthday.textContent;
    document.getElementById('authorId').value = authorId.textContent;
}

function updateAuthor(){
    let authorId = document.getElementById('authorId').value;
    let firstName = document.getElementById('newAuthorFirstName').value;
    let lastName = document.getElementById('newAuthorLastName').value;
    let birthday = document.getElementById('newAuthorBirthday').value;

    $.post('../../Classes/Admin.php',{
        updateAuthor:true,
        authorId: authorId,
        newAuthorFirstName: firstName,
        newAuthorLastName: lastName,
        newAuthorBirthday: birthday,
    }, function(){
        alert('The informations of author has been updated successfully!');
        switchToAuthors();

    })
    listAuthors();
}

function deleteAuthor(id){
    let authorId = document.getElementById(`authorId${id}`)
    // console.log(catId.textContent);
    $.post('../../Classes/Admin.php',{
        deleteAuthor:true,
        authorId:authorId.textContent,
    }, function(){

    })
    listAuthors();
}


//CRUD ARTICLE
function listArticle(){
    document.getElementById('articleRows').innerHTML = ""
    $.post('../../Classes/Article.php',{
        getArticle:true,
    }, function(data, status){
        getArticle(data);
        console.log(data);
    }, "json");
}

function getArticle(Articles){
        for (article of Articles){
            document.getElementById('articleRows').innerHTML += 
            `<tr class="text-center">
                <td class="px-4 py-2 hidden" id="articleId${article['articleId']}">${article['articleId']}</td>
                <td class="px-4 py-2" id="articleName${article['articleId']}">${article['articleName']}</td>
                <td class="px-4 py-2" id="articleContent${article['articleId']}">${article['content']}</td>
                <td class="px-4 py-2" id="articleCategory${article['articleId']}">${article['category']}</td>
                <td class="px-4 py-2" id="articleAuthor${article['articleId']}">${article['firstName']}`+` `+`${article['lastName']}</td>
                <td class="px-4 py-2" id="articleDate${article['articleId']}">${article['datePub']}</td>
                <td>
                    <a class="rounded p-2 bg-slate-200 focus:bg-slate-300" onclick="switchToEditArticlesPage(); editArticle(${article['articleId']})" style="cursor:pointer;"><i class="fa fa-pen text-orange-500 hover:text-orange-800"></i></a>
                    <a name="deleteArticle" id="deleteArticle" class="rounded p-2 bg-slate-200 focus:bg-slate-300" onclick="delete(${article['articleId']})"><i class="fa fa-trash text-orange-500 hover:text-orange-800" style="cursor: pointer;"></i></a>
                </td>
            </tr>`
        }
}

function editArticle(id){
    let articleId       = document.querySelector(`#articleId${id}`);
    let articleName       = document.querySelector(`#articleName${id}`);
    let articleContent        = document.querySelector(`#articleContent${id}`);
    let category        = document.querySelector(`#articleCategory${id}`);
    let author        = document.querySelector(`#articleAuthor${id}`);
    let date        = document.querySelector(`#articleDate${id}`);

    let newArticleName    = document.getElementById('newArticleName');
    let newContent     = document.getElementById('newArticleContent');
    let newCategory     = document.getElementById('newArticleCategory');
    let newAuthor     = document.getElementById('newArticleAuthor');
    let newDate     = document.getElementById('newArticleDate');

    newArticleName.value  = articleName.textContent;
    newContent.value  = articleContent.textContent;
    newCategory.value  = category.textContent;
    // newCategory.selected;
    newAuthor.value  = author.textContent;
    // newAuthor.selected;
    newDate.value  = date.textContent;

    document.getElementById('articleId').value = articleId.textContent;
}

function updateArticle(){
    let articleId   = document.getElementById('articleId').value;
    let articleName    = document.getElementById('newArticleName').value;
    let content     = document.getElementById('newArticleContent').value;
    let date     = document.getElementById('newArticleDate').value;
    
    for (let i=0; i<5; i++){
    let category     = document.getElementsByClassName('newArticleCategory')[i];
    let author     = document.getElementsByClassName('newArticleAuthor')[i];
        if(author.selected || category.selected){
            let newAuthorId = author.id;
            let newCategoryId = category.id;
            console.log(newAuthorId);
            console.log(newCategoryId);
            $.post('../../Classes/Admin.php',{
                updateArticle:true,
                articleId: articleId,
                newArticleName: articleName,
                newArticleContent: content,
                newArticleCategory: newCategoryId,
                newArticleAuthor: newAuthorId,
                newArticleDate: date,
            }, function(){
                alert('The Articles has been updated successfully!');
                switchToArticles();
                console.log(newAuthorId);
                console.log(newCategoryId);
        
            })
        }
        
        
    }
    listArticle();
    
}


listCategories();
listAuthors();
listArticle() ;



