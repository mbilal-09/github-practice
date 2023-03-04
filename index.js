// var a = prompt("Enter Your Name")
// var b = a[0]

// for (var i = 0; i < a.length; i++){
//     if(a[i] === " "){
//         b = b + " " + a[i + 1]
//     }
// }

// console.log(b)

// var num = [1, 2, 3, 4, 5, 7, 8, 9]

// for (var i = 0; i < num.length - 1; i++){

//     var currentNum = num[i]
//     var nextNum = num[i + 1]

//     if(currentNum + 1 !== nextNum){
//         console.log(currentNum + 1)
//     }
// }

// var a = [8, 45, 78, 80, 5, 1, 90]
// var b = 0

// for(var i = 0; i < a.length; i++){
//     if(a[i] > b){
//         b = a[i]
//     } else if (a[i] < b){
//         var c = a[i]
//     }
// }
// console.log(b, c)




var msg = 'this is my upwork id you can contact me there'

for (var i = 0; i < msg.length; i++) {
  if (msg.slice(i, i + 6) === "upwork") {
    alert('Please dont use letter upwork')
  }
}

const b = "Here's my fiverr profile link"

for (var i = 0; i < b.length; i++){
  if (b.slice(i, i + 6) === "fiverr"){
    alert("Don't use word " + b.slice(i, i + 6))
  }
}