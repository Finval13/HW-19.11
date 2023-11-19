function addComment() {
  const userName = document.getElementById("userName").value;
  const currentDate = new Date().toLocaleString("uk-UA", { hour12: false });
  const commentText = document.getElementById("commentText").value;

  if (userName && commentText) {
    const commentsSection = document.getElementById("comments");

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    commentDiv.innerHTML = `<p><strong>${userName}</strong> (${currentDate}):<br>${commentText}</p>`;

    commentsSection.appendChild(commentDiv);

    document.getElementById("commentForm").reset();
  } else {
    alert("Будь ласка, заповніть всі поля форми.");
  }
}
