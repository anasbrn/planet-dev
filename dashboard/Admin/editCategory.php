<h1 class="font-bold mt-10 mb-5">Edit categories</h1>

<div class="flex justify-center" >
    <!-- <form class="space-y-6" action="../../Classes/Category.php" method="POST" style="width: 30%;"> -->
    <div style="width: 30%;" class="space-y-6">
        <div>
            <input class="hidden" type="text" name="categoryId" id="categoryId" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
        </div>
        <div>
            <label for="categoryName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current category</label>
            <input type="text" name="currentCategoryName" id="currentCategoryName" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="" required disabled>
        </div>

        <div>
            <label for="categoryName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New category</label>
            <input type="text" name="newCategoryName" id="newCategoryName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter the new name of the category" required>
        </div>

        <button onclick="updateCategory()" name="editCategory" id="editCategory" type="submit" class="w-full text-white bg-orange-500 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
    <!-- </form> -->
    </div>

</div>
