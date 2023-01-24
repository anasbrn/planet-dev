<h1 class="font-bold mt-10 mb-5">Edit Articles</h1>

<div class="flex justify-center" >
    <!-- <form class="space-y-6" action="../../Classes/Category.php" method="POST" style="width: 30%;"> -->
    <div style="width: 30%;" class="space-y-6">
    <input type="text" hidden name="articleId" id="articleId">
        <div>
            <label for="articleName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Article name</label>
            <input type="text" name="newArticleName" id="newArticleName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter name of the article" required>
        </div>

        <div>
            <label for="categories" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a category</label>
            <select name="newArticleCategory" id="newArticleCategory" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                
                
            </select>
        </div>

        <div>
            <label for="authors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an author</label>
            <select id="newArticleAuthor" name="newArticleAuthor" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            </select>
        </div>

        <div>
            <label for="articleDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of creation</label>
            <input type="date" name="newArticleDate" id="newArticleDate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
        </div>

        <div>
            <label for="articleContent" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write your article here</label>
            <textarea type="text" name="newArticleContent" id="newArticleContent" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required></textarea>
        </div>

        <button type="submit" name="updateArticle" onclick="updateArticle()" class="w-full text-white bg-orange-500 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
    </div>
</div>
