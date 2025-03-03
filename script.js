

const completedBtns = document.getElementsByClassName("complete-btn");

for (let i = 0; i < completedBtns.length; i++) {
    const button = completedBtns[i];

    button.addEventListener("click", function (event) {

        event.preventDefault();

        alert("Board Updated Successfully");


        const activeButtons = document.querySelectorAll(".complete-btn:not([disabled])");


        if (activeButtons.length === 1) {
            alert("Congrats!!! You have completed all current tasks");
        }



        button.setAttribute("disabled", "");
        button.classList.add("opacity-50", "cursor-not-allowed");

        // Reduce count logic
        const reduceCount = document.getElementById("reduce-count");
        if (reduceCount) {
            let count = parseInt(reduceCount.innerText, 10) || 0;
            if (count > 0) {
                reduceCount.innerText = count - 1;

            }
        } else {
            console.warn("Element with ID 'reduce-count' not found.");
        }

        // Increase count logic
        const increaseCount = document.getElementById("increase-count");
        if (increaseCount) {
            let count = parseInt(increaseCount.innerText, 10) || 0;
            increaseCount.innerText = count + 1;

        } else {
            console.warn("Element with ID 'increase-count' not found.");
        }

        // Find the closest history-title related to this button
        const parentElement = button.closest(".task-item");
        const historyTitleElement = parentElement ? parentElement.querySelector(".history-title") : null;
        const historyText = historyTitleElement ? historyTitleElement.innerText : "No title found";

        // Add history entry with the specific title
        addHistoryEntry(historyText);

    });
}

function addHistoryEntry(historyText) {
    const historyContainer = document.getElementById("history-add");

    if (historyContainer) {

        const currentTime = new Date().toLocaleTimeString();


        const historyEntry = document.createElement("p");
        historyEntry.className = "text-black-500 bg-[#F4F7FF] mb-4 p-2 rounded";


        historyEntry.innerText = `You have completed the task "${historyText}" at ${currentTime}`;


        historyContainer.appendChild(historyEntry);
    } else {
        console.warn("Element with ID 'history-add' not found.");
    }
}


// Function to clear history
function clearHistory() {
    const historyContainer = document.getElementById("history-add");
    if (historyContainer) {
        historyContainer.innerHTML = "";
        console.log("History cleared.");
    } else {
        console.warn("Element with ID 'history-add' not found.");
    }
}


const clearHistoryBtn = document.getElementById("clear-history");
if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", clearHistory);
} else {
    console.warn("Clear History button not found.");
}


function updateDate() {
    const dateElement = document.getElementById("update-date");

    if (dateElement) {

        const today = new Date();


        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        const formattedDate = today.toLocaleDateString("en-US", options);


        dateElement.innerHTML = formattedDate;
    } else {
        console.warn("Element with ID 'update-date' not found.");
    }
}


window.onload = updateDate;



const colors = ["#FF5733", "#33FF57", "#3357FF", "#F39C12", "#8E44AD", "#2ECC71", "#E74C3C"];
let colorIndex = 0;


function changeBackgroundColor() {

    document.body.style.backgroundColor = colors[colorIndex];


    colorIndex = (colorIndex + 1) % colors.length;
}


document.getElementById("change-bg").addEventListener("click", changeBackgroundColor);


document.getElementById("board-btn").addEventListener("click", function () {

    window.location.href = "./blog.html";
});










