// document.addEventListener("DOMContentLoaded", function () {
//   var kinet = new Kinet({
//     acceleration: 0.9,
//     friction: 0.8,
//     names: ["x", "y"],
//   });

//   var circle = document.getElementById("circle");

//   kinet.on("tick", function (instances) {
//     circle.style.transform = `translate3d(${instances.x.current}px, ${
//       instances.y.current
//     }px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${
//       instances.y.velocity / 2
//     }deg)`;
//   });

//   document.addEventListener("mousemove", function (event) {
//     kinet.animate("x", event.clientX - window.innerWidth / 2);
//     kinet.animate("y", event.clientY - window.innerHeight / 2);
//   });
// });
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

document.addEventListener("DOMContentLoaded", function () {
  // Function to add animation class
  function animateOnScroll(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  }

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1, // Trigger animation when 10% of the section is visible
  });

  // Select all sections you want to animate
  const sections = document.querySelectorAll(".animate-on-scroll");

  // Observe each section
  sections.forEach((section) => {
    observer.observe(section);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const iframe = document.querySelector(".contrib");
  iframe.style.opacity = "0"; // Start hidden

  // Function to handle fade-in animation
  function fadeIn(element, duration) {
    let opacity = 0;
    const interval = 50;
    const increment = interval / duration;

    function step() {
      opacity += increment;
      if (opacity >= 1) {
        opacity = 1;
        clearInterval(fade);
      }
      element.style.opacity = opacity;
    }

    const fade = setInterval(step, interval);
  }

  fadeIn(iframe, 1000); // 1 second fade-in duration
});
document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".p");

  function fadeInOnScroll() {
    projectCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      if (rect.top < viewHeight - 100) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
      }
    });
  }

  // Initial call to handle page load
  fadeInOnScroll();

  // Add event listener for scrolling
  window.addEventListener("scroll", fadeInOnScroll);
});
