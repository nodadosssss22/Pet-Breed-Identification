function hide_show() {
    const ssh = document.getElementById('main_form');
    ssh.style.display = 'none';
    const sh = document.getElementById('login_title');
    sh.style.display = 'none';

    const shh = document.getElementById('register_success');
    ssh.style.display = "flex";
    ssh.style.flexDirection =  "column";
    ssh.style.alignItems = "center";
    ssh.style.justifyContent = "center";

}

function popup(id, toggle) {
    var popup = document.getElementById(id);
    popup.classList.toggle(toggle);
}