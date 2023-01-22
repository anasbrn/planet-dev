<?php
    include '../../Classes/Admin.php' ;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../style/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Dashboard</title>
</head>
<body class="flex bg-slate-100">
    <section class="bg-white shadow-sm" style="width: 20%;">
        <div>
            <div class="ml-5 mt-5">
                <img src="../../img/user.png" class="rounded-full mb-3" width="50">
                <div><?= $_SESSION['email'] ?></div>
                <div> Today's date <b><?= date('y-m-d') ?></b> </div>
            </div>


            <div class="ml-5 mt-20">
                <div class="mb-10">
                    <i class="fa fa-desktop p-2 bg-slate-200 rounded text-orange-500 mr-3" id="iconDashboard"></i>
                    <a class="text-orange-500" style="cursor: pointer;" onclick="switchToDashboard()" id="dashboardHover">Dashboard</a>
                </div>

                <div class="mb-10">
                    <i class="fa fa-newspaper p-2 bg-slate-200 rounded text-slate-400 mr-3" id="iconArticles"></i>
                    <a class="text-slate-400" style="cursor: pointer;" onclick="switchToArticles()" id="articlesHover">Articles</a>
                </div>

                <div class="mb-10">
                    <i class="fa fa-person-chalkboard p-2 bg-slate-200 rounded text-slate-400 mr-3" id="iconAuthors"></i>
                    <a class="text-slate-400" style="cursor: pointer;" onclick="switchToAuthors()" id="authorsHover">Authors</a>
                </div>

                <div class="mb-10">
                    <i class="fa fa-gear p-2 bg-slate-200 rounded text-slate-400 mr-3" id="iconSettings"></i>
                    <a class="text-slate-400" style="cursor: pointer;" onclick="switchToSettings()" id="settingsHover">Settings</a>
                </div>

                <div class="mt-44 mb-5 hover:color-orange-500">
                    <i class="fa fa-right-from-bracket p-2 bg-slate-200 rounded text-slate-400 mr-3"></i>
                    <a href="../../Login/login.php" class="text-slate-400 ">Logout</a>
                </div>
            </div>
        </div>
    </section>

    <section class="mx-10 mt-10" style="width: 100%;">
    <div id="dashboard">
        <?php include 'dashboard.php' ; ?>
    </div>

    <div id="articles" class="hidden">
        <?php include 'articles.php' ; ?>
    </div>

    <div id="authors" class="hidden">
        <?php include 'authors.php' ; ?>
    </div>

    <div id="settings" class="hidden">
        <?php include 'settings.php' ; ?>
    </div>

    </section>




    <script src="../../Scripts/app.js"></script>
</body>
</html>