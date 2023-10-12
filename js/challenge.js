
document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    const heart = document.getElementById("pause");
    const pause = document.getElementById("pause");
    const comment = document.getElementById("comment")
    const submit = documen.querySelector(".likes");
    const commentList = document.querySelector(".comments");

    let counterValue = 0;
    let intervalID;
    let isPaused = false;

    function updateCounter() {
        counter.textContent = counterValue;
    }

    function incrementCounter() {
        counterValue++;
        updateCounter();
    }

    function decrementCounter() {
        counterValue--;
        updateCounter();
    }

    plus.addEventListener("click", () => {
        if (!isPaused) {
            incrementCounter();
        }
    });

    minus.addEventListener ("click", () => {
        if (!isPaused) {
            decrementCounter();
        }
    });

    heart.addEventListener("click", () => {
        if (!isPaused) {
            const li = document.createElement("li");
            li.textContent = `liked ${counterValue} times`;
            likesList.appendChild(li);
        }
    });

pause.addEventListener("click", () => {
    isPaused = !isPaused;
    plus.disabled = isPaused;
    minus.disabled = isPaused;
    heart.disabled = isPaused;
    submit.disabled = isPaused;

    if (isPaused) {
        clearInterval(intervalID);
        pause.textContent = "resume";
    } else {
        intervalID = setInterval(incrementCounter, 1000);
        pause.textContent = "pause";
    }
});
 submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (!isPaused) {
        const commentText = commentInput.value;
        if (commentText.trim() !== "") {
            const commentDiv = document.createElement("div");
            commentDiv.textContent = commentText;
            commentList.appendChild(commentDiv);
            commentInput.value = "";
        }
    }
 });

intervalID = setInterval(incrementCounter, 1000);
})