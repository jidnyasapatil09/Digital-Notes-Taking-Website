
const textarea = document.getElementById("comments");
const saveBtn = document.querySelector("footer button");


window.onload = () => {
  const savedNote = localStorage.getItem("myNote");
  if (savedNote) {
    textarea.value = savedNote;
  }
};


saveBtn.addEventListener("click", () => {
  const note = textarea.value.trim();

  if (note) {
    localStorage.setItem("myNote", note);

    
    saveBtn.style.background = "#9d4edd";
    saveBtn.style.boxShadow = "0 0 15px #9d4edd";
    saveBtn.textContent = "✅ Saved!";

    setTimeout(() => {
      saveBtn.style.background = "#6a0dad";
      saveBtn.style.boxShadow = "none";
      saveBtn.textContent = "Save";
    }, 2000); 
  } else {
    alert("⚠️ Please write something before saving.");
  }
});


textarea.addEventListener("focus", () => {
  textarea.style.outline = "none";
  textarea.style.border = "2px solid #9d4edd";
  textarea.style.boxShadow = "0 0 15px #9d4edd";
});


textarea.addEventListener("blur", () => {
  textarea.style.border = "2px solid #6a0dad";
  textarea.style.boxShadow = "none";
});
