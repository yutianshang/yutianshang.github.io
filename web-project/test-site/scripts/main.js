// 先把 <img> 元素的引用存放在 myImage 变量里。
let myImage = document.querySelector('img');

myImage.onclick = function() {
    // 获取这张图片的 src 属性值。
    let mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/1.jpg') 
        {
             myImage.setAttribute('src', 'images/2.jpg');
        } 
    else 
        {
            myImage.setAttribute('src', 'images/1.jpg');
        }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
  }
  
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }
 
  
