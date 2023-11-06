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
