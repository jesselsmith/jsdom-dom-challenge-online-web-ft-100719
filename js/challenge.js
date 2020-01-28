function getCounter() {
  return document.getElementById('counter');
}

function incrementCounter() {
  const counter = getCounter();
  counter.textContent = parseInt(counter.textContent) + 1;
};

function decrementCounter() {
  const counter = getCounter();
  counter.textContent = parseInt(counter.textContent) - 1
}

function startTimer() {
  return window.setInterval(incrementCounter, 1000);
}

function switchButton(timer) {
  button = document.getElementById("pause");
  if (button.innerText == "pause") {
    window.clearInterval(timer);
    button.innerText = "resume";
    return timer;
  }
  else {
    button.innerText = "pause";
    return startTimer();
  }
}

function like(number) {
  const li = document.getElementById(`like-${number}`);
  if (li == null) {
    document.querySelector("ul.likes").innerHTML += `\n<li id="like-${number}">${number} has been liked 1 time.</li>`
  } else {
    let words = li.textContent.split(" ");
    words[4] = parseInt(words[4]) + 1;
    if (words[4] == 2) {
      words[5] = "times.";
    }
    li.textContent = words.join(" ");
  }
}

function likeCurrentNumber() {
  like(parseInt(getCounter().textContent));
}

document.addEventListener("DOMContentLoaded", () => {
  let timer = startTimer();
  document.getElementById("pause").addEventListener("click", function (e) {
    timer = switchButton(timer);
  });
  document.getElementById("plus").addEventListener("click", function (e) {
    incrementCounter();
  });
  document.getElementById("minus").addEventListener("click", function (e) {
    decrementCounter();
  });
  document.getElementById("heart").addEventListener("click", function (e) {
    likeCurrentNumber();
  });
  document.getElementById("comment-form").addEventListener("submit", function (event) {
    let comment = document.getElementById("comment-input");
    document.getElementById("list").innerHTML += `\n<p data-comment="${comment.value}">${comment.value}</li>`
    comment.value = "";
    event.preventDefault();
  }, false);
});