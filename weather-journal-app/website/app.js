/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();

let generateBtn = document.getElementById('generate');
const zipCode=document.getElementById('zip').value;
const feeling=document.getElementById('feelings').value;
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apikey = '&appid=xxxxxxxxxxxxxxxxxxxxxxxxxxx';





/* Function to GET Web API Data*/
const getData = async (apiURL, zipCode, apikey) => {
     
    
    const request = await fetch(apiURL+zipCode+apikey+`&units=metric`);
    try{
       
       const response = await request.json();
       console.log(response);
       return response;
    } catch(error){
        //code to log error
        console.log("error"+error);
    }
};

/* Function to POST data */
const postData = async(url = "", data = {}) => {
    
    const request = await fetch (url , {
        method : 'Post',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        return;
    } catch(error){
        //code to log error
        console.log(error)
    }
};
var date = document.getElementById('date');
var temprature = document.getElementById('temp');
var Feelings =  document.getElementById('content');
/* Function to GET Project Data */
const updateScreen = async() => {

    const request = await fetch ('/all');
    try{
        const allData= await request.json();
        console.log(allData);
        date.innerHTML = allData.date;
        temprature.innerHTML = allData.temp;
        Feelings.innerHTML = allData.feeling;
    } catch(error){
       
        console.log(error)
    }
};

generateBtn.addEventListener('click', Action);

function Action(){
    const zipCode=document.getElementById('zip').value;
    const feeling=document.getElementById('feelings').value;
     if(zipCode === ' '){
          alert("Please Enter valid zip code");
     }
     else{
        getData(apiURL, zipCode, apikey).then(function(data){
            console.log(data);
            postData('/addData',{temp:data.main.temp, date:newDate, feeling:feeling});
            updateScreen();
        }
        })
    
}
