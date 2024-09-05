const data = [
    {
        id: 1,
        question: "what are accordion components?",
        answer: "Accordion components are user interface elements. The accordion component is used to generate vertically stacked content in a page. It is intended to save vertical space by hiding content, reducing scrolling. Accordions contains labels with the relevant information. Users can click on the accordion to read additional information."
    },
    {
        id: 2,
        question: "what are they used for?",
        answer: "They are commonly employed in various contexts, including FAQs. If you're struggling with too many navigation options or too much content on a web page, an accordion could be the perfect solution"
    },
    {
        id: 3,
        question: "Accordion as a musical instrument?",
        answer: " The accordion is a musical instrument with a keyboard and bellows. "
    },
    {
        id: 4,
        question: "Can i create an accordion component with a different framework?",
        answer: "Yes of course, it is very possible to create an accordion component with another framework."
    },

];

const accordionWrapper = document.querySelector('.accordion');

function createAccordionData() {
    accordionWrapper.innerHTML = data.map(dataItem => `
        <div class = "accordion-item">
        <div class ="accordion-title">
        <h3>${dataItem.question}</h3>
        <i class ="fa-solid fa-arrow-down"></i>
        </div>
        <div class ="accordion-content">
        <p>${dataItem.answer}</p>
        </div>
        </div>
        `
    ).join(" ");

}
createAccordionData()

const getAccordionTitles = document.querySelectorAll('.accordion-title');
console.log("-------------------");
console.log(getAccordionTitles);
console.log("-------------------");

getAccordionTitles.forEach(currentItem => {
    currentItem.addEventListener('click', event => {
        if (currentItem.classList.contains('active')) {
            currentItem.classList.remove('active')
        } else {
            let getAlreadyAddedActiveClasses = document.querySelectorAll('.active');
            getAlreadyAddedActiveClasses.forEach(currentActiveItem => {
                currentActiveItem.classList.remove('active')
            })
            currentItem.classList.add('active')
        }
    })
})
