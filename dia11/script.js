const name = document.getElementById('name');
const lastName1 = document.getElementById('lastName1');
const lastName2 = document.getElementById('lastName2');
const birthday = document.getElementById('birthday');
const newRFC = document.getElementById('newRFC');


function getRFC(){
    //VABJ861126
    console.log(name.value);
    console.log(lastName1.value);
    console.log(lastName2.value);
    console.log(birthday.value);

    let RFC = lastName1.value[0] + lastName1.value[1];
    RFC += lastName2.value[0];
    RFC +=  name.value[0];
    RFC += birthday.value[2] + birthday.value[3] +birthday.value[5] + birthday.value[6] + birthday.value[8] + birthday.value[9];
    RFC = RFC.toUpperCase();
    newRFC.innerText = "tu RFC es: " + RFC;
    console.log(RFC);
}