// === Students Section ===
const studentForm = document.getElementById("student-form");
const studentList = document.getElementById("student-list");

studentForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  // Create student card
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";
  col.innerHTML = `
    <div class="card shadow h-100">
      <img src="assets/images/student.png" class="card-img-top" alt="Student">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${course} - ${email}</p>
      </div>
    </div>
  `;
  studentList.appendChild(col);

  // Reset form
  studentForm.reset();
});

// === Notifications Section ===
const notificationList = document.getElementById("notification-list");
const notifications = [
  { text: "📢 Admission Notice: AP EAPCET-2025 Internal Sliding", badge: "New", badgeClass: "bg-danger" },
  { text: "📝 Exam Postponed: B.Tech VII Semester", badge: "Updated", badgeClass: "bg-warning text-dark" },
  { text: "🎓 Workshop on AI & ML", badge: "Event", badgeClass: "bg-success" }
];

notifications.forEach(n => {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `${n.text} <span class="badge ${n.badgeClass} rounded-pill">${n.badge}</span>`;
  notificationList.appendChild(li);
});

// === Events Section ===
const eventList = document.getElementById("event-list");
const events = [
  { title: "AI & ML Workshop", date: "15 Dec 2025", desc: "Hands-on workshop on Artificial Intelligence and Machine Learning.", img: "assets/images/event1.jpg" },
  { title: "Annual Tech Fest", date: "20 Dec 2025", desc: "Join us for coding contests, robotics, and hackathons.", img: "assets/images/event2.jpg" },
  { title: "Cultural Fest", date: "25 Dec 2025", desc: "Music, dance, and drama performances by students.", img: "assets/images/event3.jpg" }
];

events.forEach(ev => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";
  col.innerHTML = `
    <div class="card shadow h-100">
      <img src="${ev.img}" class="card-img-top" alt="${ev.title}">
      <div class="card-body">
        <h5 class="card-title">${ev.title}</h5>
        <p class="card-text">Date: ${ev.date}</p>
        <p class="card-text">${ev.desc}</p>
        <a href="#" class="btn btn-outline-primary btn-sm">View Details</a>
      </div>
    </div>
  `;
  eventList.appendChild(col);
});

// === Smooth Scroll for Navbar Links ===
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// === Auto-close Navbar on Mobile ===
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.getElementById('navbarNav');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});