// SIMULATE DATA FROM DATA BASE
const tabs = [
{
    title: "Automation",
    text: "Transition from labor-for-income emphasis to machine automation emphasis.",
    goals: "Goals: Maximize production capacity; reduce human exposure; increase efficiency.",
    img: "./automation.jpg",
},
{
    title: "Access",
    text: "Transition from property/ownership emphasis to strategic access emphasis.",
    goals: "Goals: Maximize good use-time efficiency; reduce production pressure; increase overall good availability for use.",
    img: "./access.jpg",
},
{
    title: "Open Source",
    text: "Transition from proprietary research, data hoarding, and internal development to collaborative commons contribution.",
    goals: "Goals: Maximize innovation.",
    img: "./open-source.png",
},
{
    title: "Localization",
    text: "Transition from globalization to localization, emphazing networked design.",
    goals: "Goals: Maximize productive/distributive efficiency;reduce waste.",
    img: "./localization.jpeg",
},
{
    title: "Digital Feedback",
    text: "Transition from gradmented economic data relay to fully integrated, sensor-based digital systems.",
    goals: "Goals: Maximize feedback and information efficacy/utilization;increase total economic efficiency.",
    img: "./network.jpg",
}
];

const attList = document.querySelector('.attributes-list');

const attTextWrap = document.querySelector('.attributes-text-wrapper');


window.addEventListener('load', function(){
    
    displayBtnAtt(tabs);
    displayTextAtt(tabs);

});

attList.addEventListener('click', function(e){
    const attBtns = document.querySelectorAll('.attribute-item');
    const attText = document.querySelectorAll('.attribute-text');
    const id = e.target.dataset.id;
    console.log(id);

    if(id){
        
        //REMOVE ACTIVE FROM OTHER BUTTONS
        attBtns.forEach(function(btn){
            btn.classList.remove("btn-active");
            e.target.classList.add("btn-active");
        });
        attText.forEach(function(att){
            att.classList.remove("active");    
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }     
});



function displayBtnAtt (tabs){

    let btnList = tabs.map(function(obj) {
        return`<button class="attribute-item" data-id="${obj.title}">${obj.title}</button>`
    }).join("");

    attList.innerHTML = btnList;
};

function displayTextAtt (tabs){
    let attParagraph = tabs.map(function(obj){
        // CREATE ARRAY OF GOALS
        let goals = obj.goals.slice(7).split(";");
        // CLEAN ELEMENT (GOAL) && CREATE LIST-ITEM FOR EACH
        let goalsText = goals.map(function (goal) {
            goal = goal.trim().replace(".","").toUpperCase();
            return `<li class="goal">${goal}</li>`
        }).join("");

        return `<article class="attribute-text" id="${obj.title}">
                    <p class="attributes-paragraph">${obj.text}</p>
                    <ul class="attributes-goals-list">
                    <h3 class="goals-heading">Goals</h3>
                        ${goalsText}
                    </ul>
                    <img src="${obj.img}">
                </article>`
    }).join("")

    attTextWrap.innerHTML = attParagraph;
};


