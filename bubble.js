let circle1 = document.getElementById('circle1');
let circle1arrow = document.getElementById('circle1arrow');

let circle2 = document.getElementById('circle2');
let circle2arrow = document.getElementById('circle2arrow');

let circle3 = document.getElementById('circle3');
let circle3arrow = document.getElementById('circle3arrow');

let circle4 = document.getElementById('circle4');
let circle4arrow = document.getElementById('circle4arrow');

let resetbtn = document.getElementById('reset');

let m = 0;
let a;
circle1.onclick = function() {
    if (m === 0) {
        a = setInterval(function arrow() {
            if (m === 800) {
                circle1.style.backgroundColor = 'pink';
                clearInterval(a);
                m = 0;
            } else {
                m += 10;
                circle1arrow.style.marginRight = m + 'px';
            }
        }, 50);
    }
};
let n = 0;
let b;
circle2.onclick = function() {
    if (n === 0) {
        b = setInterval(function arrow() {
            if (n === 800) {
                circle2.style.backgroundColor = 'pink';
                clearInterval(b);
                n = 0;
            } else {
                n += 10;
                circle2arrow.style.marginRight = n + 'px';
            }
        }, 50);
    }

}
let p = 0;
let c;
circle3.onclick = function() {
    if (p === 0) {
        c = setInterval(function arrow() {
            if (p === 800) {
                circle3.style.backgroundColor = 'pink';
                clearInterval(c);
                p = 0;
            } else {
                p += 10;
                circle3arrow.style.marginRight = p + 'px';
            }
        }, 50);
    }
}
let q = 0;
let d;
circle4.onclick = function() {
    if (q === 0) {
        d = setInterval(function arrow() {
            if (q === 800) {
                circle4.style.backgroundColor = 'pink';
                clearInterval(d);
                q = 0;
            } else {
                q += 10;
                circle4arrow.style.marginRight = q + 'px';
            }
        }, 50);
    }
};

resetbtn.onclick = function() {
    clearInterval(a);
    location.reload();
};