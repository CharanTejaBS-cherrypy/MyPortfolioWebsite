document.addEventListener("DOMContentLoaded", function () {
  var kinet = new Kinet({
    acceleration: 0.9,
    friction: 0.8,
    names: ["x", "y"],
  });

  var circle = document.getElementById("circle");

  kinet.on("tick", function (instances) {
    circle.style.transform = `translate3d(${instances.x.current}px, ${
      instances.y.current
    }px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${
      instances.y.velocity / 2
    }deg)`;
  });

  document.addEventListener("mousemove", function (event) {
    kinet.animate("x", event.clientX - window.innerWidth / 2);
    kinet.animate("y", event.clientY - window.innerHeight / 2);
  });
});
function downloadResume() {
  // SweetAlert2 confirmation dialog
  Swal.fire({
    title: "Download Resume",
    text: "Would you like to download my resume?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, download it!",
    cancelButtonText: "No, thanks",
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  }).then((result) => {
    if (result.isConfirmed) {
      // Replace 'resume.pdf' with the actual path to your resume file
      const link = document.createElement("a");
      link.href = "RESUME_B.docx";
      link.download = "RESUME_B.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });
}

// Add an event listener to the resume icon
document
  .getElementById("resume-icon")
  .addEventListener("click", downloadResume);
