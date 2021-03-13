const faq = document.getElementById('faq__list');
const box = document.getElementById('box');

faq.addEventListener('click', (e) =>
{
    let elementTarget;

    if (e.target.classList.contains('faq__question')) elementTarget = e.target;
    else
        if (e.target.classList.contains('faq__question-arrow')) elementTarget = e.target.previousElementSibling;

    elementTarget.classList.toggle('faq__question--bold')
    elementTarget.nextElementSibling.classList.toggle('faq__question-arrow--active');
    elementTarget.parentElement.nextElementSibling.classList.toggle('faq__answer--hide');
});

faq.addEventListener('mouseover', (e) =>
{
    if (e.target.classList.contains('faq__question') )
    {
        box.classList.add('box--hover');
        e.target.classList.toggle('faq__question--hover');
    }
});

faq.addEventListener('mouseout', (e) =>
{
    if (e.target.classList.contains('faq__question'))
    {
        box.classList.remove('box--hover');
        e.target.classList.toggle('faq__question--hover');
    }
});