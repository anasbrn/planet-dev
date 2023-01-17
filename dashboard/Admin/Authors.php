<div class="flex justify-center">
    <input class="p-2 border mr-2 rounded shadow-sm" type="search" name="searchAuthors" id="searchAuthors" placeholder="Search authors" style="width: 30%">
    <button class="bg-orange-500 py-2 px-5 rounded shadow-sm text-white hover:bg-orange-900">Search</button>
</div>


<div class="flex items-center justify-between">
    <div class="flex items-center">
        <h1 class="font-bold mt-10 mb-5">Authors</h1>
    </div>
    
    <div>
        <button class="bg-orange-500 py-2 px-5 rounded shadow-sm text-white hover:bg-orange-900" data-modal-target="author-modal" data-modal-toggle="author-modal">Add author<i class="fa fa-plus ml-2"></i></button>
    </div>
</div>

<table class="table-auto border rounded bg-white" style="width: 100%;">
    <thead>
        <tr class="text-center">
            <th class="border-b-2 border-b-orange-300 px-4 py-2">First name</th>
            <th class="border-b-2 border-b-orange-300 px-4 py-2">Last name</th>
            <th class="border-b-2 border-b-orange-300 px-4 py-2">Birthday</th>
            <th class="border-b-2 border-b-orange-300 px-4 py-2">Date</th>
        </tr>
    </thead>

    <tbody>
        <tr class="text-center">
            <td class="px-4 py-2">Test</td>
            <td class="px-4 py-2">Test</td>
            <td class="px-4 py-2">01-01-1980</td>
            <td class="px-4 py-2">17-01-2023</td>
        </tr>
    </tbody>
</table>


<!-- modal -->

<div id="author-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="author-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add author</h3>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="authorFirstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" name="authorFirstName" id="authorFirstName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter the firstname of the author" required>
                    </div>
                    
                    <div>
                        <label for="authorLastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" name="authorLastName" id="authorLasstName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter the lastname of the author" required>
                    </div>

    
                    <div>
                        <label for="authorBirthday" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
                        <input type="date" name="authorBirthday" id="authorBirthday" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                    </div>
        
                    <button type="submit" class="w-full text-white bg-orange-500 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                </form>
            </div>
        </div>
    </div>
</div> 