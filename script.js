const FAQContainer = document.getElementById('FAQContainer');
const filterForm = document.getElementById('filterForm');

const FAQ = [
    {
        id: 1,
        quetion: 'What is COHANDS FMS (Financial Management System)?',
        answer: 'Financial Management System is designed and developed to enable SFURTI Clusters of Council of Handicrafts Development Corporations (COHANDS) to Submit and Manage Pay orders.'
    },
    {
        id: 2,
        quetion: 'How to register as an Implementing Agency (IA) on FMS?',
        answer: 'You can register for the FMS account of your IA/SPV via <a href="https://www.cohandsindia.com/iafdashboard/#/register" target="_blank">this form</a>'
    },
    {
        id: 3,
        quetion: 'Why is an FMS used for Payorder process?',
        answer: 'FMS has been launched and utilized by COHANDS to make sure that the payorder and fund disbursement process is done in a standardized, consistent, timely and transparent manner. With FMS, IAs are able to submitted supporting document with zero paperwork. Additionally, the system itself makes all financial calculations so that there are no calculation related errors'
    },
    {
        id: 4,
        quetion: 'Where can I submit my monthly cluster reports?',
        answer: 'As a Handicraft and Handloom cluster under SFURTI, you can submit the reports by selecting MIS from the sidebar and selecting the type of report'
    },
    {
        id: 5,
        quetion: 'What is a claim?',
        answer: 'A combination of payorder form and supporting documents are referred as Claim by the system'
    },
    {
        id: 6,
        quetion: 'I am having technical issues, how can I find help?',
        answer: 'For any technical assistance, please write to us at <a href="mailto:contact@sfurticohands.com" target="_blank">contact@sfurticohands.com</a>, please be sure to include all supporting documents and your contact information in the mail.'
    },
    {
        id: 7,
        quetion: 'What is the maximum file size for supporting documents?',
        answer: 'The maximum size for a supporting document is 2 MB.'
    },
    {
        id: 8,
        quetion: 'My IA / SPV has a new tender, how will it be published in this website?',
        answer: 'Please share the tender advertisement on <a href="mailto:contact@sfurticohands.com" target="_blank">contact@sfurticohands.com</a>'
    },
    {
        id: 9,
        quetion: 'Where are the design modules?',
        answer: 'You can download the design modules from this <a href="https://www.cohandsindia.com/modules.html">page.</a>'
    },
];

const htmlTamplate = (info) => {
    return (`
		<div class='mainQuetionContainer'>
			<div class='quetionContainer'>
				<h5>${info.id}) ${info.quetion}</h5>
				<button class='expandBtn'>+</button>
			</div>
			<p class='hide answer'>${info.answer}<p>
		</div>
	`)
};

const html = FAQ.map(htmlTamplate).join(' ');

FAQContainer.innerHTML = html;

const expandBtn = document.querySelectorAll('.expandBtn');
const answerShower = document.querySelector('.answer');

console.log(FAQContainer)
FAQContainer.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        if (event.target.innerText === '-') {
            event.target.innerText = '+';
        } else {
            event.target.innerText = '-';
        }
        event.target.parentNode.nextElementSibling.classList.toggle('hide');
        console.log(event.target.parentNode.nextElementSibling.classList.toggle('show'))
    }
})


filterForm.addEventListener('submit', event => {
    event.preventDefault();
})

filterForm.addEventListener('keyup', event => {
    let filtered = FAQ.filter(obj => {
        return obj.quetion.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase());
    });

    const filteredHtml = filtered.map(htmlTamplate).join(' ');

    FAQContainer.innerHTML = filteredHtml;
});