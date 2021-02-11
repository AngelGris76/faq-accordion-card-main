const faq = document.getElementById('faq');

faq.addEventListener('click', (e) =>
{
    let faqQuestion;
        
    if (e.target.classList.contains('faq__img')) faqQuestion = e.target.parentElement;
    else
        faqQuestion = e.target;

    if (faqQuestion.classList.contains('faq__question'))
    {
        faqQuestion.classList.toggle('faq__question--open');
        faqQuestion.children[0].classList.toggle('faq__img--open');
        faqQuestion.nextElementSibling.classList.toggle('faq__answer--open');
    }
});