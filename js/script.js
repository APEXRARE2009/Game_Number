let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let jsSpan = document.querySelector(".jsSpan");
let textEnd = document.querySelector(".content_block-end");

let randomIndex;

function randomGet() {
	randomIndex = Math.ceil(Math.random() * 20);
}

randomGet();

console.log(randomIndex);

jsSpanValue = jsSpan.contentText;


let count = 0;

btn.addEventListener("click", () => {
	count++;
	console.log('попытка ', count);
    let value = +input.value;

    if (value == randomIndex) {
        console.log(1);
        alert(`yes ${count}`);
        input.value = "";
        randomGet();
        count = 0;
        console.log(randomIndex);
    } else if (count == 8) {
        count = 0;
    } else {
        console.log(0);
    }
	jsSpan.textContent = 8 - count;
})

	/*if (jsSpan == 8) {
		jsSpanValue.style.color = "#00cf1c"
	} else if (jsSpan == 7) {
		jsSpanValue.style.color = "#1ccf00"
	} else if (jsSpan == 6) {
		jsSpanValue.style.color = "#bacf00"
	} else if (jsSpan == 5) {
		jsSpanValue.style.color = "#f1f500"
	} else if (jsSpan == 4) {
		jsSpanValue.style.color = "#f5d400"
	} else if (jsSpan == 3) {
		jsSpanValue.style.color = "#f5a300"
	} else if (jsSpan == 2) {
		jsSpanValue.style.color = "#f56200"
	} else if (jsSpan == 1) {
		jsSpanValue.style.color = "#f53500"
	} else if (jsSpan == 0) {
		jsSpanValue.style.color = "#ff0000"
	}*/
