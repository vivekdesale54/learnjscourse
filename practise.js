document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggleBtn');
    const dateDiv = document.getElementById('dateDisplay');
    const dateStr = 'Wed May 14 2025 01:41:41 GMT+0530 (India Standard Time)';
    const head = document.createElement('h1');
    head.innerText = "Hello Vivek";

    // Create a new div for person1 info
    const person1Info = document.createElement('div');

    // Person objects
    const person = {
        name: "alibaba",
        age: 30,
        greet() {
            return `Hello ${this.name}, your age is ${this.age}, you are too old`;
        }
    };

    const personInfo = {
        name: "Yash",
        age: 34,
        city: "pune",
        ageGreet() {
            return `Hello ${this.name}, your age is ${this.age}, you live in ${this.city}`;
        }
    };

    // Prepare text for person (instead of changing .person element)
    const personText = person.greet();

    // Set text for person1Info div using personInfo.ageGreet()
    person1Info.innerText = personInfo.ageGreet();

    btn.addEventListener('click', () => {
        if (dateDiv.style.display === 'none' || dateDiv.style.display === '') {
            dateDiv.textContent = '';

            // Add date string as text
            dateDiv.textContent = dateStr;

            // Append heading
            dateDiv.appendChild(head);

            // Add person text in a new div each time (or reuse)
            const personDiv = document.createElement('div');
            personDiv.innerText = personText;
            dateDiv.appendChild(personDiv);

            // Append person1Info div
            dateDiv.appendChild(person1Info);

            dateDiv.style.display = 'block';
        } else {
            dateDiv.style.display = 'none';
            dateDiv.textContent = '';
        }
    });
});
