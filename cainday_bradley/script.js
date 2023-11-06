let nameInput = document.getElementById("name")
let commentInput = document.getElementById("comment")
let commentButton = document.getElementById("comment-button")

nameInput.addEventListener("input", toggleCommentButton);
commentInput.addEventListener("input", toggleCommentButton);

function toggleCommentButton() {
    let nameValue = nameInput.value.trim();
    let commentValue = commentInput.value.trim();

            if (nameValue !== '' && commentValue !== '') {
                commentButton.disabled = false;
            } else {
                commentButton.disabled = true;
            }
        }