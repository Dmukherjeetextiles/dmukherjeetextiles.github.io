var countClick = 0;

function copyEmail() {
    navigator.clipboard.writeText("dmukherjeetextiles@gmail.com");

    countClick++;

    switch (countClick) {
        case 1:
            document.getElementById('copy-email').innerHTML = "Email copied!"
            document.getElementById('copy-email').style.cursor = "pointer";
            break;
        case 2:
            document.getElementById('copy-email').innerHTML = "Email copied again."
            document.getElementById('copy-email').style.cursor = "pointer";
            break;
        case 3:
            document.getElementById('copy-email').innerHTML = "Trust me, email's already been copied. Stop."
            document.getElementById('copy-email').style.cursor = "pointer";
            break;
        case 50:
            document.getElementById('copy-email').innerHTML = "Congratulations, you've wasted a few minutes of your life!"
            document.getElementById('copy-email').style.cursor = "default";
            document.getElementById('copy-email').removeAttribute("onclick");
            break;
        default:
            document.getElementById('copy-email').innerHTML = "Okay, <b>dmukherjeetextiles@gmail.com</b>."
            document.getElementById('copy-email').style.cursor = "pointer";
            break;
    }
}