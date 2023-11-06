function onInput() {
  let myName = document.getElementById("name");
  let myComment = document.getElementById("comment");
  
  if (myName.value.length > 0 && myComment.value.length > 0) {
    document.getElementById("comment-button").disabled = false;
  } else {
    document.getElementById("comment-button").disabled = true;
  }
}

function submitComment() {
  let myName = document.getElementById("name").value;

  if (myName.length > 0) {
    let message = myName + ", thanks for sharing your thoughts!";
    alert(message);
  }
}
