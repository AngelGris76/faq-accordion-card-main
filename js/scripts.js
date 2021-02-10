const faq = document.getElementById('faq');

faq.addEventListener('click', (e) =>
{
    let faqQuestion;
        
    if (e.target.tagName === 'IMG') faqQuestion = e.target.parentElement;
    else
        faqQuestion = e.target;

    if (faqQuestion.tagName === 'H2')
    {
        faqQuestion.classList.toggle('faq__question--open');
        faqQuestion.children[0].classList.toggle('faq__img--open');
        faqQuestion.nextElementSibling.classList.toggle('faq__answer--open');
    }
});