<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width", initial-scale="1.0">
        <title>Petpick</title>
        <link rel="icon" type = "image/x-icon" href = "front-images/logo-only-transparent-browser-title-for-black.ico">
        <link rel="stylesheet" href = "login-page.css">
    </head>
    <body>
        <div class = "navbar" id = "navbar">
            <div class="navbar-left-split">
            <!-- The logo for the leftmost one -->
                <img src="front-images/logo-only-transparent-browser-title-for-black.ico" alt="logo" class="logo">
                <p class="bar"></p>
                <img src="front-images/petpick-text.png" alt="textlogo" class="imgtxt">
                <!-- The buttons appear from bottom to up -->
`           </div>
            <div class="navbar-links">
                <a href="#home" class = "navbar-right"  id = "scrollToTopLink">Home</a>
                <a href="#functionality" class = "navbar-right" onclick="scrollToDiv('content_functionality')">Functionality</a>
                <a href="#about-us" class = "navbar-right" onclick="scrollToDiv('content_about_us')">About Us</a>
                <a href="login.php" class = "navbar-right">Login</a>
            </div>
        </div>
        <!-- Contents -->
        <div class="content">
            <div class = "content_home">
                <div class="square-home" id="square-home">
                    <div class = "square-home-main-content">
                            <img id="cycling-image" src="front-images/content-home/c-home-cycling-images/cycling-image-1.png" alt="cycling-image" class="cycling-image">
                            <div class = "square-text" id = "square-text">
                                <p class = "box-title" id = "box-title">Choosing pets can be Confusing...</p>
                                <p class = "box-content" id = "box-content">
                                    With the variety of breeds and species of 
                                    animals that we can choose from, it can be confusing for 
                                    some to pick and choose their companion.
                                </p>
                            </div>
                    </div>
                    <div class = "wrapper-for-navibar">
                        <div class = "navbar-arrows">
                            <a href = "#" onclick="previous_image()" id = "image"><img src="front-images/content-home/arrow-button-left.png"> </a>
                        </div>
                        <div class="navibar-small-dots" id = "navibar-small-dots">
                            <span class = "small-dot" data-status="inactive"></span>
                            <span class = "small-dot" data-status="inactive"></span>
                            <span class = "small-dot" data-status="inactive"></span>
                        </div>
                        <div class = "navbar-arrows">
                            <a href="#" onclick="next_image()" id = "image2"><img src="front-images/content-home/arrow-button-right.png"></a>
                        </div>
                    </div>
                </div>
            </div>
            <p></p>
            <div class = "content_functionality" id = "content_functionality">
                <img src = "front-images/cards-functionality-1.png" class = "cardsf">
                <img src = "front-images/cards-functionality-2.png" class = "cardsf">
                <img src = "front-images/cards-functionality-3.png" class = "cardsf">
                <p></p>
            </div>
            <div class = "content_about_us" id = "content_about_us">
                <p></p>
                <div class = "white_bg">
                    <p class = "font_you a11">AN APPLICATION BY GROUP 2</p>
                    <p class = "font_you a111">Leader: Nodado, Carlos David</p>
                    <p class = "font_you a1111">Members:</p>
                    <p class = "font_you a11111">Matencio, Julianne,<br>Pil, Marck Darrel,<br>Rotaquio, Renzybert,<br>Talisek, Charles Andre</p>
                </div>
            </div>
        </div>
    <!-- imports the script.js for some scripting -->
    <script src = "script.js"></script>
    </body>

</html>
