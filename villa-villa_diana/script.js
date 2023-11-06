function newComment() {
  let nameField = document.getElementById("name");
  let commentField = document.getElementById("user_comment");
  if (nameField.value.length > 0) {
    if (commentField.value.length > 0) {
      document.getElementById("comment_btn").disabled = false;
    }
  } else {
    document.getElementById("comment_btn").disabled = true;
  }
}
