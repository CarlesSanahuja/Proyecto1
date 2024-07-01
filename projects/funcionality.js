
async function obtainData() {
try {
    const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
    const jsonResponse = await response.json();

    const title0 =document.getElementById('titlePro0');
    const subtitle0 = document.getElementById('subtitlePro0');
    const image0 = document.getElementById('imagePro0');
    const completed = document.getElementById('completed');
    const content = document.getElementById('content');

    const title1 =document.getElementById('titlePro1');
    const subtitle1 = document.getElementById('subtitlePro1');
    const image1 = document.getElementById('imagePro1');

    const title2 =document.getElementById('titlePro2');
    const subtitle2 = document.getElementById('subtitlePro2');
    const image2 = document.getElementById('imagePro2');

    const title3 =document.getElementById('titlePro3');
    const subtitle3 = document.getElementById('subtitlePro3');
    const image3 = document.getElementById('imagePro3');
    
    title0.textContent = jsonResponse[1].name;
    subtitle0.textContent = jsonResponse[1].description;
    image0.src = jsonResponse[1].image;
    completed.textContent = jsonResponse[1].completed_on;
    content.textContent = jsonResponse[1].content;

    title1.textContent = jsonResponse[3].name;
    subtitle1.textContent = jsonResponse[3].description;
    image1.src = jsonResponse[3].image;
    title2.textContent = jsonResponse[2].name;
    subtitle2.textContent = jsonResponse[2].description;
    image2.src = jsonResponse[2].image;
    title3.textContent = jsonResponse[0].name;
    subtitle3.textContent = jsonResponse[0].description;
    image3.src = jsonResponse[0].image;

} catch (err) {
    // Handle error or a rejected Promise
    console.log("Something went wrong!", err);
    alert("An error occurred while fetching the data.");
}
}
window.addEventListener("load", (event) => {
    obtainData();
});

