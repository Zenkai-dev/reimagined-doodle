document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons in the military tab
    const actionButtons = document.querySelectorAll('.btn-military');

    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Get the unit name from the card title
            const card = e.target.closest('.card-body');
            const unitName = card.querySelector('.card-title').textContent;
            const action = e.target.textContent;

            alert(`${action} for ${unitName} is under construction!`);
        });
    });
});