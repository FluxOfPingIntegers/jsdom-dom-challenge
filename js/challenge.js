document.addEventListener("DOMContentLoaded", () => {

  let counter = parseInt(document.querySelector("#counter").innerText);
  let isPaused = false;
  
  const pauseBtn = document.querySelector("#pause");
  pauseBtn.addEventListener("click", () => {
    isPaused = !isPaused
    if (isPaused) {
      pauseBtn.innerText = "resume"
      toggleBtns();
    } else {
      pauseBtn.innerText = "pause"
      toggleBtns();
    }
  })

  const plusBtn = document.querySelector("#plus");
  plusBtn.addEventListener("click", () => {
    counter += 1
    refreshCounter();
  });

  const minusBtn = document.querySelector("#minus");
  minusBtn.addEventListener("click", () => {
    counter -= 1
    refreshCounter();
  });

  const heartBtn = document.querySelector("#heart");
  heartBtn.addEventListener("click", () => {
    const likes = document.getElementsByClassName("likes");
    const li = document.querySelector(`li[data-num='${counter}']`);
    if (li) {
      const likeCount = parseInt(li.querySelector("span").innerText) + 1
      li.innerHTML = `${counter} has been liked <span>${likeCount}</span> times`
    } else {
      let listItem = document.createElement("li");
      listItem.dataset.num = `${counter}`;
      listItem.innerHTML = `${counter} has been liked <span>1</span> time`;
      likes[0].appendChild(listItem);
    }
  })

  const submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("click", (e) => {
    const comment = document.createElement("p")
    comment.innerText = document.querySelector("#comment-input").value;
    const comments = document.getElementsByClassName("comments");
    comments[0].appendChild(comment);
    document.querySelector("#comment-input").value = "";
    e.preventDefault();
  })

  setInterval(function() {
    if (!isPaused) {
      counter += 1;
      refreshCounter();
    }
  }, 1000);

  function refreshCounter() {
    document.querySelector("#counter").innerText = counter;
  }

  function toggleBtns() {
    plusBtn.disabled = !plusBtn.disabled;
    minusBtn.disabled = !minusBtn.disabled;
    heartBtn.disabled = !heartBtn.disabled;
  }


})