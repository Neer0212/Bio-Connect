function redirect(role) {
    if (role === "student") {
        window.location.href = "student.html";
    } else if (role === "faculty") {
        window.location.href = "faculty.html";
    }
}
let selectedRole = "";

function selectRole(role) {
    selectedRole = role;

    document.getElementById("studentBtn").classList.remove("active");
    document.getElementById("facultyBtn").classList.remove("active");

    if (role === "student") {
        document.getElementById("studentBtn").classList.add("active");
    } else {
        document.getElementById("facultyBtn").classList.add("active");
    }
}

document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!selectedRole) {
        alert("Please select a role before logging in.");
        return;
    }

    if (selectedRole === "student") {
        window.location.href = "student.html";
    } else if (selectedRole === "faculty") {
        window.location.href = "faculty.html";
    }
});