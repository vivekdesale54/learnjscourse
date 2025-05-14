document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggleBtn');
    const dateDiv = document.getElementById('dateDisplay');
    const dateStr = 'Wed May 14 2025 01:41:41 GMT+0530 (India Standard Time)';
    const head = document.createElement('h1');
    head.innerText = "Hello Vivek";


    btn.addEventListener('click', () => {
        if (dateDiv.style.display === 'none' || dateDiv.style.display === '') {
            dateDiv.textContent = dateStr;
            dateDiv.appendChild(head);
            dateDiv.style.display = 'block';
        } else {
            dateDiv.style.display = 'none';
            dateDiv.textContent = '';
        }
    });
});




