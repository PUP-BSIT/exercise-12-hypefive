let commenterName = document.getElementById('commenter_name');
let commenterText = document.getElementById('comment_text');
let commentButton = document.getElementById('comment_button');

commenterName.addEventListener('input', validateForm);
commenterText.addEventListener('input', validateForm);

function validateForm() {
    let nameValue = commenterName.value.trim();
    let commentValue = commenterText.value.trim();

    if (nameValue !== '' && commentValue !== '') {
        commentButton.disabled = false;
    } else {
        commentButton.disabled = true;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const commentButton = document.getElementById("comment_button");
    const dataList = document.getElementById("data_list");

    commentButton.addEventListener("click", function () {
        const commenterName = document.getElementById("commenter_name");
        const commenterText = document.getElementById("comment_text");

        const comName = commenterName.value;
        const comText = commenterText.value;

        if (comName && comText) {
            const listItem = document.createElement("p");
            listItem.innerHTML = `${comName} - ${comText}
                <button class="delete-button">Delete</button>`;
            dataList.prepend(listItem);
            commenterName.value = "";
            commenterText.value = "";

            listItem.querySelector(".delete-button").addEventListener
                ("click", function () {
                    listItem.remove();
                });
        }
    });
});