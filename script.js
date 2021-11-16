var url = "https://api.coincap.io/v2/assets";

//create function for getdata from the fetch url 
function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((datas) => {
      console.log(datas);

      //choose where to store data
       var td=document.getElementById('data');

        datas.data.forEach((data)=> {
          td.innerHTML +=`             
          <tr>
          <td>${data.rank}</td>
          <td>${data.id}</td>
          <td>${data.symbol}</td>
          <td>${data.supply}</td>
          <td>${data.name}</td>
          <td>${data.priceUsd}</td>
          </tr>
          `
        })
    })
    .catch((err) => console.log(err))
}
//call the function component to strat the function
getData();
