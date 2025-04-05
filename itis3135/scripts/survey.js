document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    const resultContainer = document.getElementById("result-container");
    const coursesContainer = document.getElementById("courses-container");
    const addCourseBtn = document.getElementById("add-course-btn");
    const resetBtn = document.getElementById("resetButton");

    addCourseBtn.addEventListener("click", () => {
        const courseDiv = document.createElement("div");
        courseDiv.className = "course-entry";

        const input = document.createElement("input");
        input.type = "text";
        input.name = "courses[]";
        input.placeholder = "Enter a course";

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            courseDiv.remove();
        });

        courseDiv.appendChild(input);
        courseDiv.appendChild(deleteBtn);
        coursesContainer.appendChild(courseDiv);
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        
        const requiredFields = [
            "name",
            "mascot",
            "image-caption",
            "personal-background",
            "professional-background",
            "academic-background",
            "web-dev-background",
            "primary-platform",
            "understand-checkbox"
        ];

        for (let id of requiredFields) {
            const element = document.getElementById(id);
            if ((element.type === "checkbox" && !element.checked) || (!element.value && element.type !== "checkbox")) {
                alert("Please fill out all required fields.");
                return;
            }
        }

        
        const name = document.getElementById("name").value;
        const mascot = document.getElementById("mascot").value;
        const imageCaption = document.getElementById("image-caption").value;
        const personalBackground = document.getElementById("personal-background").value;
        const professionalBackground = document.getElementById("professional-background").value;
        const academicBackground = document.getElementById("academic-background").value;
        const webDevBackground = document.getElementById("web-dev-background").value;
        const primaryPlatform = document.getElementById("primary-platform").value;
        const funnyThing = document.getElementById("funny-thing").value;
        const additional = document.getElementById("additional").value;

        const courses = [];
        document.querySelectorAll("input[name='courses[]']").forEach(courseInput => {
            if (courseInput.value.trim()) {
                courses.push(courseInput.value.trim());
            }
        });

        
        let outputHTML = `
          <h2>${name}'s Introduction</h2>
          <h3>Mascot: ${mascot}</h3>
          <figure>
            <img src="images/default-image.jpg" alt="User image" style="max-width: 250px;" />
            <figcaption>${imageCaption}</figcaption>
          </figure>

          <table class="intro-table">
            <tr><th>Category</th><th>Details</th></tr>
            <tr><td>Personal Background</td><td>${personalBackground}</td></tr>
            <tr><td>Professional Background</td><td>${professionalBackground}</td></tr>
            <tr><td>Academic Background</td><td>${academicBackground}</td></tr>
            <tr><td>Web Dev Background</td><td>${webDevBackground}</td></tr>
            <tr><td>Primary Computer Platform</td><td>${primaryPlatform}</td></tr>
            <tr><td>Courses</td><td><ul>${courses.map(course => `<li>${course}</li>`).join("")}</ul></td></tr>
            <tr><td>Funny Thing</td><td>${funnyThing}</td></tr>
            <tr><td>Anything Else</td><td>${additional}</td></tr>
          </table>

          <button id="restartBtn">Start Over</button>
        `;

        resultContainer.innerHTML = outputHTML;
        form.style.display = "none";

        document.getElementById("restartBtn").addEventListener("click", () => {
            form.reset();
            coursesContainer.innerHTML = "";
            resultContainer.innerHTML = "";
            form.style.display = "block";
        });
    });

    resetBtn.addEventListener("click", () => {
        form.reset();
        coursesContainer.innerHTML = "";
        resultContainer.innerHTML = "";
        form.style.display = "block";
    });
});
