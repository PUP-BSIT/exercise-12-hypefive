function onInput() {
  let myName = document.getElementById("name");
  let myComment = document.getElementById("comment");

  if (myName.value.length > 0 && myComment.value.length > 0) {
    document.getElementById("comment_button").disabled = false;
  } else {
    document.getElementById("comment_button").disabled = true;
  }
}

function submitComment(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  const name = document.getElementById("name").value;
  const commentText = document.getElementById("comment").value;

  if (name && commentText) {
    // Create new elements for a new comment
    const newComment = document.createElement("div");
    newComment.className = "comment";

    const userInfo = document.createElement("div");
    userInfo.className = "user-info";

    const userImage = document.createElement("img");
    userImage.src = "image/defaultprofile.png"; // Replace with the user's image
    userImage.alt = "User Image";

    const nameInfo = document.createElement("div");
    nameInfo.className = "name-info";

    const nameHeading = document.createElement("h3");
    nameHeading.className = "name";
    nameHeading.textContent = name;

    const usernamePara = document.createElement("p");
    usernamePara.className = "username";
    usernamePara.textContent = "@" + name.toLowerCase().replace(/\s/g, "");

    const userCommentPara = document.createElement("p");
    userCommentPara.className = "userComment";
    userCommentPara.textContent = commentText;

    // Construct the comment structure
    nameInfo.appendChild(nameHeading);
    nameInfo.appendChild(usernamePara);
    userInfo.appendChild(userImage);
    userInfo.appendChild(nameInfo);
    newComment.appendChild(userInfo);
    newComment.appendChild(userCommentPara);

    // Append the new comment to the comment container
    const commentContainer = document.querySelector(".usercommentcontainer");
    commentContainer.appendChild(newComment);
    newComment.scrollIntoView({ behavior: "smooth", block: "start" });

    // Clear the input fields after appending the comment to disable the button
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
    document.getElementById("comment_button").disabled = true;
  }
}
