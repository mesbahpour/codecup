function toggle_btn_img(){
    const avatar = document.getElementById('avatar');
    const btn = document.getElementById('btn');
    avatar.classList.toggle("w3-hide");
    if (btn.innerHTML === "Hide!") {
        btn.innerHTML = "Show!";
      } else {
        btn.innerHTML = "Hide!";
      }

}