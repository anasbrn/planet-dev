<?php


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Login</title>
</head>
<body class="bg-slate-100" style="display: flex; justify-content: center; flex-direction: column; align-items: center; height:100vh;">
    <div class="bg-white rounded shadow-sm" style="width: 30%;">    
        <h1 class="text-center font-bold mt-10 mb-10" style="font-size: x-large;">Planet DEV</h1>
        <!-- sign up -->
        <form class="space-y-6 bg-white" action="../Classes/Admin.php" method="POST" id="signUpForm">
            <div class="flex">
                <div class="pl-10  pr-2">
                    <label for="firstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input type="text" name="firstName" id="firstName" oninput="validationName()" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#000] focus:border-[#000] block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your firstname" required>
                </div>
                
                <div class="pr-10">
                    <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                    <input type="text" name="lastName" id="lastName" oninput="validationName()" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#000] focus:border-[#000] block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your lastname" required>
                </div>
            </div>
            
            <div class="px-10">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" name="email" id="email" oninput="validationEmail()" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#000] focus:border-[#000] block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your email" required>
            </div>
            
            <div class="px-10">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" oninput="validationPassword()" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#000] focus:border-[#000] block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your password" required>
            </div>

            <div class="px-10">
                <button type="submit" name="signUp" id="register" class="w-full text-white bg-orange-500 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
            </div>

            <div class="flex justify-center pb-10">
                <p>Already have an account?</p><a class="font-bold ml-2 hover:text-orange-500" style="cursor:pointer" href="./login.php">Sign In</a>
            </div>
        </form>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="../Scripts/app.js"></script>
</body>
</html>