<!DOCTYPE html>

<html>
    <head>
        <meta name="viewport" content="width=device-width", initial-scale="1.0">
        <title>VenueVerse | Register</title>
        <link rel="icon" type="image/x-icon" href = "login_images/main_logo.ico">
        <link rel="stylesheet" href="registration.css">
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
                    <form class = "login_page" action = "<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                        <p class="login_title">Sign Up</p>
                        <div class = "form_wrapper">
                            <div class = "input_group">
                            <div class = "popup">
                                <input type="email" id="form_email" name = "form_email" placeholder="Email" class="form_email field">
                                <div class="popuptext" id="email_pu" onclick="popup('email_pu','hide');">
                                Please enter a proper email. (must at least contain '@' plus domain.)
                                </div>
                            </div>
                            </div>
                            <div class = "input_group">
                                <div class = "popup">
                                    <input type="text" id="form_username" name = "form_username" placeholder="Username" class="form_username field">
                                    <div class="popuptext" id="username_pu" onclick="popup('username_pu','hide');">
                                    Username cannot contain spaces.
                                    </div>
                                </div>
                            </div>
                            <div class = "input_group">
                            <div class = "popup">
                                    <input type="password" id="form_password" name="form_password" placeholder="Password" class="form_password field">
                                    <div class="popuptext" id="password_pu" onclick="popup('password_pu','hide');">
                                    Your password should contain at least 6 characters.
                                    </div>
                                </div>
                            </div>
                            <br>
                            <input type="submit" name = "register" class="form_submit_button" id ="form_submit_button" value="Register">
                            
                            <?php
                                if (isset($_POST['register'])) {
                                    $usernamee = $_POST['form_username'];
                                    $email = $_POST['form_email'];
                                    $passwords = $_POST['form_password'];
                                    $error = 0;

                                    if (preg_match("/\\s/", $usernamee)) {
                                        echo "<script>popup('username_pu','show');</script>";
                                        $error = 1;
                                    }
                                    
                                    if (strlen($passwords) < 6) {
                                        echo "<script>popup('password_pu','show');</script>";
                                        $error = 1;
                                    }

                                    if ($error == 0) {
                                        include "database_connect.php";
                                        if(mysqli_query($conn, "INSERT INTO credentials(username, u_password ,email) VALUES('" . $usernamee . "', '" . password_hash(($passwords), PASSWORD_DEFAULT) . "', '" . $email . "')")) {
                                        } else {
                                            echo "Error: " . $sql . "" . mysqli_error($conn);
                                        }
                                        mysqli_close($conn);
                                        header("location: registration_success.php");
                                    }
                                }
                            ?>
                            <br>
                            <a href="login.php" class="register">Already have an account? Login Here</a>
                        </div>
                    </form>
                </div>
            </div>
    </body>
</html>