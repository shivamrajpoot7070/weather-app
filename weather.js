
// async function weather() {
//     let API_KEY = "cef37ba88f2fdb77adca00125a1d937f";
//     let city = "goa";

//     try {
//         const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//         const data = await resp.json();

//         console.log(data);

//       //  Create new paragraphs for temperature, humidity, cloud details, and wind speed
//         let tempPara = document.createElement('p');
//         let humidityPara = document.createElement('p');
//         let cloudsPara = document.createElement('p');
//         let windPara = document.createElement('p');

//         // Populate the paragraphs with data
//         temperature.innerHTML = `Temperature: ${data?.main?.temp.toFixed(2)} °C`;
//         humidityPara.innerHTML = `Humidity: ${data?.main?.humidity} %`;
//         cloudsPara.innerHTML = `Cloudiness: ${data?.clouds?.all} %`;
//         windPara.innerHTML = `Wind Speed: ${data?.wind?.speed} m/s`;

//         // Append the paragraphs to the document body
//         document.body.appendChild(tempPara);
//         document.body.appendChild(humidityPara);
//         document.body.appendChild(cloudsPara);
//         document.body.appendChild(windPara);
//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//     }
// }

// // Call the weather function to fetch and display the data
// // weather();



// // Select the search form and the user weather element using attribute selectors
// const search = document.querySelector("[data-search-form]");
// const userweat = document.querySelector("[userweather]");
// const showhide=document.querySelector("[showhide]");   
// const temperature=document.querySelector("[data-temp]");

// // Add a click event listener to the user weather element
// userweat.addEventListener("click", () => {
//     // Check the current display style of the search form and toggle it
//     if (search.style.display === "none" || search.style.display === "") {
//         search.style.display = "flex";
//         showhide.style.display="none";

//     }
//     else {
//         search.style.display = "none";
//         showhide.style.display="block";
//     }


// });

// const searchweather=document.querySelector("[searchweather]");

// searchweather.addEventListener("click",()=>{

//     weather();



// });

async function weather() {
    let API_KEY = "cef37ba88f2fdb77adca00125a1d937f";
    let city =data.value;

    try {
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await resp.json();

        console.log(data);

        // Create new paragraphs for temperature, humidity, cloud details, and wind speed
        let tempPara = document.createElement('p');
        let humidityPara = document.createElement('p');
        let cloudsPara = document.createElement('p');
        let windPara = document.createElement('p');

        // Populate the paragraphs with data
        temperature.innerHTML = `${data?.main?.temp.toFixed(2)} °C`;
        humidity.innerHTML = `${data?.main?.humidity} %`;
        clouds.innerHTML = `${data?.clouds?.all} %`;
        windspeed.innerHTML = `${data?.wind?.speed} m/s`;
        chngcity.innerHTML=city;

        // Append the paragraphs to the document body
        document.body.appendChild(tempPara);
        document.body.appendChild(humidityPara);
        document.body.appendChild(cloudsPara);
        document.body.appendChild(windPara);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

//Select the search form and the user weather element using attribute selectors
const search = document.querySelector("[data-search-form]");
const userweat = document.querySelector("[userweather]");
const showhide = document.querySelector("[showhide]");   
const temperature = document.querySelector("[data-temp]");
const data=document.querySelector("[data-search-input]");
const windspeed=document.querySelector("[data-windspeed]");
const humidity=document.querySelector("[data-humidity]");
const clouds=document.querySelector("[data-clouds]");
const main=document.querySelector("[main]");
const chngcity=document.querySelector("[data-city-name]");
const yourweather=document.querySelector("[yourweather]");


// Add a click event listener to the user weather element
userweat.addEventListener("click", () => {
    // Check the current display style of the search form and toggle it
    if (search.style.display === "none" || search.style.display === "") {
        
        showhide.style.display = "none";
        search.style.display = "flex";
    } 
    else {
        
        search.style.display = "none";
        showhide.style.display = "block";
    }
});

const searchweather = document.querySelector("[searchweather]");

// Add a click event listener to the search weather button
searchweather.addEventListener('mouseover', () => {
   

    setTimeout(() => {

        weather();
        
    }, 1000); // 2000 milliseconds = 2 seconds
    
    showhide.style.display = "block";
    search.style.display = "none";

});

yourweather.addEventListener("click",()=>{

    showhide.style.display = "block";
    search.style.display = "none";

})







// const userweat = document.querySelector("[userweather]");

// userweat.addEventListener('click',()=>{

//     alert("jf");
//     weather();





























