let nameInput= document.getElementById("name");
let commentInput= document.getElementById("comment");
    
nameInput.addEventListener('input', validateForm);
commentInput.addEventListener('input', validateForm);

function validateForm() {
    let commentButton= document.getElementById("commentButton");

    let nameValue = nameInput.value.trim();
    let commentValue = commentInput.value.trim();

    if (nameValue !== '' && commentValue !== ''){
        commentButton.disabled=false;
    }
    else{
        commentButton.disabled=true;
    }
}
