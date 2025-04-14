
$(document).ready(function () {
    let currentIndex = 0;
    const images = $('.gallery-images img');

    function showImage(index) {
        images.hide();
        images.eq(index).show();
    }

    showImage(currentIndex);

    $('.next').click(function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    $('.prev').click(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");

    const today = new Date();
    const numDays = 7;
    const timeSlots = ["7:00 AM", "9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"];

    const createCalendar = () => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("calendar-wrapper");

        for (let i = 0; i < numDays; i++) {
            const currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);

            const dayColumn = document.createElement("div");
            dayColumn.classList.add("calendar-day");

            const dateHeading = document.createElement("h3");
            dateHeading.textContent = currentDate.toDateString();
            dayColumn.appendChild(dateHeading);

            timeSlots.forEach((slot) => {
                const btn = document.createElement("button");
                btn.classList.add("time-slot");
                btn.textContent = slot;

                btn.addEventListener("click", () => {
                    alert(`Session booked on ${currentDate.toDateString()} at ${slot}`);
                });

                dayColumn.appendChild(btn);
            });

            wrapper.appendChild(dayColumn);
        }

        calendar.appendChild(wrapper);
    };

    createCalendar();
});
