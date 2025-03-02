from=document.querySelector('#from')
to=document.querySelector('#to')
amount= document.querySelector("#amount");
convert = document.querySelector("#convert");
result = document.querySelector("#result");

// console.log(from,to,amount,convert,result);


async function CurrencyConvertor(event) {
    event.preventDefault();
    event.stopPropagation();
    await fetch(
        `https://v6.exchangerate-api.com/v6/3eec63895f296894597acb86/latest/${from.value}`
    )
    .then((response) => {
      return response.json();
    })

    .then((data)=>{
        console.log(data);
        console.log((data["conversion_rates"][to.value] * amount.value))
        result.innerText = data["conversion_rates"][to.value] * amount.value;
    })
    .catch((err)=>{
        console.log(err);  
    })
}

function clear(event){
    event.target.value=""
    event.stopPropagation()
}

convert.addEventListener('click',CurrencyConvertor);
from.addEventListener('click',clear)
to.addEventListener("click", clear);