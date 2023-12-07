const apiUrl = "http://localhost:3000/posts";
let posts = [];
function UserAction() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            posts = JSON.parse(this.responseText);

            let ul = document.getElementById("post-list");

            // حلقه‌ی بر روی هر پست
            posts.forEach(post => {
                // ایجاد المان li
                const listItem = document.createElement("li");

                // ایجاد المان h3 برای عنوان پست
                const titleElement = document.createElement("h3");
                titleElement.textContent = post.title;

                // ایجاد المان p برای متن پست
                const bodyElement = document.createElement("p");
                bodyElement.textContent = post.body;

                // ایجاد المان em برای شماره پست
                const idElement = document.createElement("em");
                idElement.textContent = `شماره ${post.id}`;

                // افزودن المان‌های ساخته شده به المان li
                listItem.appendChild(titleElement);
                listItem.appendChild(bodyElement);
                listItem.appendChild(idElement);

                // افزودن المان li به المان ul
                ul.appendChild(listItem);
            });
        }
    };
    xhttp.open("GET", apiUrl, true);
    xhttp.send("Your JSON Data Here");
}

UserAction();
