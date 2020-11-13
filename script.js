
const api_url = "https://reqres.in/api/users/2"; 

async function getapi(url) { 

	const response = await fetch(url); 

	var data = await response.json(); 
	console.log(data); 

	show(data); 
} 

getapi(api_url); 

function show(data) { 
    
let card = '<div class="slds-grid">\
<div class="slds-col slds-size_1-of-3">\
</div>\
    <div class="slds-col slds-size_1-of-3">\
    <div class="slds-card slds-text-align_center slds-m-around_xx-large">\
    <div class="slds-grid slds-wrap slds-align-content-center ">\
    <div class="slds-col slds-large-size_1-of-1 slds-m-top_medium"> '+ data.data.id+ '</div>\
    <div id="firstdiv" class="slds-col slds-size_1-of-1 slds-large-size_1-of-1">\
    <img class="slds-m-around_large slds-avatar_circle slds-align_absolute-center img-mobile" src="'+data.data.avatar +' "">\
              </div>\
<div class="slds-col slds-large-size_1-of-1">\
        <span class="slds-text-heading_medium">First Name</span>\
    </div>\
    <div class="slds-col slds-large-size_1-of-1 slds-m-bottom_medium">\
        <span class="slds-text-heading_small">' + data.data.first_name+'</span>\
    </div>\
    <div class="slds-col slds-large-size_1-of-1">\
        <span class="slds-text-heading_medium">Last Name</span>\
    </div>\
    <div class="slds-col slds-large-size_1-of-1 slds-m-bottom_medium"><span class="slds-text-heading_small">'+ data.data.last_name+ '</span></div><div class="slds-col slds-large-size_1-of-1"><span class="slds-text-heading_medium">Email</span></div><div class="slds-col slds-large-size_1-of-1 slds-m-bottom_medium"><span class="slds-text-heading_small">'+ data.data.email +'</span></div><div class="slds-col slds-size_1-of-1 slds-large-size_1-of-1"></div></div><div class="slds-col slds-size_1-of-3"></div></div>'

   document.getElementById("demo").innerHTML = card;           

} 
