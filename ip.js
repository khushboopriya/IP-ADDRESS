ip = document.querySelector('#ipaddress');

const url = 'https://api.ipify.org/?format=json';

// fetch(url)
// .then((response)=>response.json())
// .then((json)=>{console.log(json)});

const promise = fetch(url);

promise
.then((response)=>response.json())
    .then((json_response)=>{
        ip.value = "   "+ json_response.ip;
});