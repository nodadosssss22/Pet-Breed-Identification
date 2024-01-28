<!DOCTYPE html>

<?php 

    $databasename = "petpick_db"; 
    include "database_connect.php";

?>

<html>
    <head>
        <meta name="viewport" content="width=device-width", initial-scale="1.0">
        <title>Petpick | Login</title>
        <link rel="icon" type="image/x-icon" href = "login_images/main_logo.ico">
        <link rel="stylesheet" href="login.css">
        <script src="registration.js"></script>
    </head>
    <body>
        <img src="login_images/background.jpg" class = "img_background">
        <div class = "main">
            <div class = "halves_container">
                <div class = "first_half">
                    <img src = "front-images/logo-full-transparent.png" class = "logo_first_half">
                </div>
                <div class = "second_half">
                        <p class="login_title">User Login</p>
                        <form class = "login_page" method = "POST" action="http://127.0.0.1:5000">
                        <div class = "inputs">
                            <div class = "input_group">
                            <div class = "popup">
                                    <input type="text" id="form_username" name = "form_username" placeholder="Username" class="form_username">
                                    <div class="popuptext" id="username_pu" onclick="popup('username_pu','hide');">
                                    Please enter username.
                                    </div>
                                </div>
                            </div>
                            <div class = "input_group">
                            <div class = "popup">
                                    <input type="password" id="form_password" name="form_password" placeholder="Password" class="form_password">
                                    <div class="popuptext" id="password_pu" onclick="popup('password_pu','hide');">
                                    Please enter password.
                                    </div>
                                </div>
                            </div>
                            </div>
                            <input name = "yep" type = "submit" class = "form_submit_button" id = "form_submit_button" value = "Login">
                        <br><br><a href="registration.php" class="register">Don't have an Account? Register Here</a>
                        </div>
                        </form>
                        <?php 
                        
                            if (isset($_POST['yep']))
                            {
                                $username = $_POST['form_username'];
                                $password = $_POST['form_password'];
                                $error = 0;

                                if (strlen($username) <= 0)
                                {
                                    echo "<script>popup('username_pu','show');</script>";
                                    $error = 1;
                                }
                                if (strlen($password) <= 0)
                                {
                                    echo "<script>popup('password_pu','show');</script>";
                                    $error = 1;
                                }
                                if ($error == 0) {
                                    if (credentials_validation(fetch_data($conn), $username, $password))
                                    {
                                        $pythonScriptPath = 'main_folder/app.py';
                                        $result = shell_exec("python $pythonScriptPath");
                                    } else {    
                                        
                                    }
                                }
                            }
                        ?>
                </div>
            </div>
     </body>
</html>