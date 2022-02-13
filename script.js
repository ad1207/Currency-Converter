var data

// var request = new XMLHttpRequest();
// request.open("GET","http://data.fixer.io/api/latest?access_key=d6e9581884c6d16e0ff1d3aff0c86279")
// request.send()
// request.onload=function(){
//     data=JSON.parse(this.response)    
// }

fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json").then(res=>res.json()).then(res1=>data=res1)


document.addEventListener("DOMContentLoaded", function (event) {
    let amount = document.getElementById("amount")
    let from = document.getElementById("from")
    let to = document.getElementById("to")
    let switchButton = document.getElementById("switchButton")
    let submitButton = document.getElementById("submitButton")
    let result = document.getElementById("result")
    submitButton.addEventListener('click',function(){
        if(amount.value==""){
            window.alert("Please enter amount")
        }
        else if(check(amount.value)){
        var ans = (data["eur"][to.value]*amount.value)/data["eur"][from.value]
        console.log(ans)
        result.innerHTML = ans.toFixed(2) + `<small>${to.value.toUpperCase()}</small>`
        }
        else{
            window.alert("Enter valid amount")
        }
    })
    switchButton.addEventListener('click',function(){
        let temp = from.value
        from.value = to.value
        to.value = temp
    })
})

function check(val){
    return !isNaN(val)
}