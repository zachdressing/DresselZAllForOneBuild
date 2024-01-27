const input1 = document.getElementById('input1');

if (document.getElementById('input2')) {
    const input2 = document.getElementById('input2')
}
if (document.getElementById('input3')) {
    const input3 = document.getElementById('input3')
}
if (document.getElementById('input4')) {
    const input4 = document.getElementById('input4')
}
let btn = document.getElementById('btn');
let output = document.getElementById('output');



if (window.location.href.includes('hello')) {
    btn.addEventListener('click', async () => {
        let endPoint = await helloAPI(input1.value);
        output.innerHTML = endPoint;
    })
}

if (window.location.href.includes('add')) {
    btn.addEventListener('click', async () => {
        let endPoint = await addAPI(input1.value, input2.value);
        output.innerHTML = endPoint;
    })
}

if (window.location.href.includes('wake')) {
    btn.addEventListener('click', async () => {
        let endPoint = await wakeAPI(input1.value, input2.value);
        output.innerHTML = endPoint;
    })
}

if (window.location.href.includes('less')) {
    btn.addEventListener('click', async () => {
        let endPoint = await glAPI(input1.value, input2.value);
        output.innerHTML = endPoint;
    })
}

if (window.location.href.includes('mad')) {
    btn.addEventListener('click', async () => {
        let endPoint = await madAPI(input1.value, input2.value);
        output.innerHTML = "Aidens API does not work with my inputs. I cannot get this working at the moment.";
    })
}

if (window.location.href.includes('odd')) {
    btn.addEventListener('click', async () => {
        let endPoint = await oeAPI(input1.value);
        output.innerHTML = endPoint;
    })
}

if (window.location.href.includes('Alpha')) {
    btn.addEventListener('click', async () => {
        let endPoint = await raAPI(input1.value);
        output.innerHTML = endPoint;
    })
}

if (window.location.href.includes('Num')) {
    btn.addEventListener('click', async () => {
        let endPoint = await rnAPI(input1.value);
        output.innerHTML = endPoint;
    })
}

if (window.location.href.includes('eight')) {
    btn.addEventListener('click', async () => {
        let endPoint = await ballAPI(input1.value);
        output.innerHTML = endPoint;
    })
}

if (window.location.href.includes('rest')) {
    btn.addEventListener('click', async () => {
        let endPoint = await restAPI(input1.value);
        output.innerHTML = endPoint;
    })
}


const helloAPI = async (input) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/Hello/${input}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const addAPI = async (input1, input2) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/AddNumbers/${input1}/${input2}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const wakeAPI = async (input1, input2) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/TwoQuestions/${input1}/${input2}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const glAPI = async (input1, input2) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/CompareNumbers/${input1}/${input2}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const madAPI = async (input1, input2) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/MadLib/${input1}/${input2}/${input3}/${input4}/${input4}/${input4}/${input4}/${input4}/${input4}?adverb=Huridly`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const oeAPI = async (input1) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/OddOrEven/${input1}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const raAPI = async (input1) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/ReverseItWord/${input1}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const rnAPI = async (input1) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/ReverseItNum/${input1}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const ballAPI = async (input1) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/8Ball/${input1}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const restAPI = async (input1) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/RestaurantPicker/FastFoodSitDownTakeOut/${input1}`);
    const response = await promise.text();
    console.log(response)
    return response;
}