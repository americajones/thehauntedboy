const togButt = document.querySelector(".btn-toggle");
var pics = document.querySelectorAll(".pic");
var overlay = document.querySelector("#Fullscreen");
var fullImg = document.createElement("img");
var nextImage = document.createElement("img");
var sourceNum;
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

togButt.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        overlay.classList.toggle("light-theme");
    } else {
        document.body.classList.toggle("dark-theme");
        overlay.classList.toggle("dark-theme");
    }
});


pics.forEach((pic) => {
    pic.addEventListener("click", function () {
        sourceNum = 01;
        fullImg.src = pic.src;
        let srcString;
        srcString = JSON.stringify(pic.src);
        // console.log(srcString);
        overlay.append(fullImg);
        overlay.style.visibility = "visible";
        sourceNum = srcString.substring(59, 60);
        // console.log(Number(sourceNum));
    });
});

document.addEventListener("keydown", (e) => {
    if (overlay.style.visibility == "visible" && e.key == "ArrowRight") {
        if (sourceNum < 406) {
            sourceNum++;
        }
        if (sourceNum < 10) {
            let newNewNum = sourceNum.toString().padStart(2, '0');
            // console.log("newnum is: " + newNewNum);
            let final = "images/" + newNewNum + ".jpg";
            nextImage.src = final;
        } else {
            let final = "images/" + sourceNum + ".jpg";
            nextImage.src = final;
        }
        fullImg.src = nextImage.src;
        // console.log("new sourceNum is:" + sourceNum);
    } else if (overlay.style.visibility == "visible" && e.key == "ArrowLeft") {
        if (sourceNum > 1) {
            sourceNum--;
        }
        if (sourceNum < 10) {
            let newNewNum = sourceNum.toString().padStart(2, '0');
            // console.log("newnum is: " + newNewNum);
            let final = "images/" + newNewNum + ".jpg";
            nextImage.src = final;
        } else if (sourceNum < 1) {
            sourceNum = 1;
        } else {
            let final = "images/" + sourceNum + ".jpg";
            nextImage.src = final;
        }
        fullImg.src = nextImage.src;
        // console.log("new sourceNum is:" + sourceNum);

    }

});




overlay.addEventListener("click", function () {
    overlay.style.visibility = "hidden";
});