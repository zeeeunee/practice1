const h1 = document.querySelector('h1');
const txt = h1.innerText;
console.log(txt);

//알파벳하나씩 span 태그로 묶는 코드 짜기
let tags = '';
for (let letter of txt) {
	tags += `<span>${letter}</span>`;
}
h1.innerHTML = tags;
console.log(tags);
