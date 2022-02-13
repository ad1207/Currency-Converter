var data


fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json").then(res=>res.json()).then(res1=>data=res1)
//Initializing data and fetch the api and add the response to data

document.addEventListener("DOMContentLoaded", function (event) {
    let amount = document.getElementById("amount")
    let from = document.getElementById("from")
    let to = document.getElementById("to")
    let switchButton = document.getElementById("switchButton")
    let submitButton = document.getElementById("submitButton")
    let result = document.getElementById("result")
    //creating elements by Id
    submitButton.addEventListener('click',function(){
        //When submit button is pressed this function gets executed
        //It throws error when no value is entered
        //If it isn't valid numerical then it throws an error
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
        //This function exchanges from and to value
        let temp = from.value
        from.value = to.value
        to.value = temp
    })
})

function check(val){
    return !isNaN(val)
}
