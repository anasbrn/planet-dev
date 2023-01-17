<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/style.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Login</title>
</head>
<body class="bg-slate-100" style="display: flex; justify-content: center; flex-direction: column; align-items: center; height:100vh;">
    <div class="bg-white rounded shadow-sm" style="width: 30%;">    
        <h1 class="text-center font-bold mt-10 mb-10" style="font-size: x-large;">Planet DEV</h1>
        <form class="space-y-6 bg-white" action="#" >
            <div class="px-10">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your email" required>
            </div>
            
            <div class="px-10">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your password" required>
            </div>

            <div class="px-10">
                <button type="submit" class="w-full text-white bg-orange-500 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>
            </div>

            <div class="flex justify-center pb-10">
                <p>You don't have an account?</p><a class="font-bold ml-2 hover:text-orange-500" href="">Sign Up</a>
            </div>
        </form>
    </div>
    <script src="../Scripts/app.js"></script>
</body>
</html>