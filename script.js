function showNotification(type, message) {
  let bgColor;

  if (type === "success") {
    bgColor = "#2e8b75";
  } else if (type === "fail") {
    bgColor = "#e74c3c";
  } else if (type === "warning") {
    bgColor = "#e67e22";
  } else {
    bgColor = "#333";
  }

  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: bgColor,
      borderRadius: "15px",
      fontSize: "16px",
      padding: "12px 20px"
    }
  }).showToast();
}

document.getElementById("btn-success").addEventListener("click", () => {
  showNotification("success", "Well done!");
});

document.getElementById("btn-fail").addEventListener("click", () => {
  showNotification("fail", "Oh snap! Change a few things.");
});

document.getElementById("btn-warning").addEventListener("click", () => {
  showNotification("warning", "Warning!");
});
