let cartTotal = 0;
console.log(cartTotal);

const addToCartBtns = document.querySelectorAll("button:not(.button1)"); // 取得所有「加入購物車」按鈕
const totalBtn = document.querySelector('.button1') ; // 取得「購物車總額」按鈕
const clearBtn = document.querySelectorAll('.button1')[1];  // 取得「清空購物車」按鈕

// 加入購物車功能
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        cartTotal += 100; // 每次點擊加入購物車，總額增加100
        console.log('目前總額' + cartTotal + "元");
        alert('已加入購物車!');
    });
});


// 顯示購物車總額
totalBtn.addEventListener('click', () => {
    alert("購物車總額:" + cartTotal + '元'
    );
});

// 清空購物車
clearBtn.addEventListener('click', () => {
    cartTotal = 0;
    console.log('已清空，總額:', cartTotal); // 清空後顯示0
    alert('購物車已清空!');
});