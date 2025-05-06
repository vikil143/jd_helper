
// Used conecept for this ==> 
// Clouser
// on Creation of modal ==> content was taking for resuablity
export function modal() {
    const modal = document.createElement('div');
    modal.classList.add('ext-jd-modal');

    function backDrop() {
        const backdrop = document.createElement('div');
        backdrop.classList.add('ext-jd-modal-backdrop');
        return backdrop;
    }

    function modalContent() {
        const content = document.createElement('div');
        content.classList.add('ext-jd-modal-content');
        return content;
    }

    function header() {
        const header = document.createElement('div');
        header.classList.add('ext-jd-modal-header');
        return header;
    }

    return {
        // Need to consider types
        // Written normal function instead of arrow function to use 'this' keyword
        // Need to consider types
        creatation: function ({ title, content, buttons }){
            modal.innerHTML = '' // Clear previous content
            const backdrop = backDrop();
            const modalC = modalContent();
            const modalH = header();
            const modalTitle = document.createElement('h2');
            modalTitle.innerText = title;
            modalH.appendChild(modalTitle);
            const modalButtons = document.createElement('div');
            modalButtons.classList.add('ext-jd-modal-buttons');
            buttons.forEach((button) => {
                const btn = document.createElement('button');
                btn.innerText = button.text;
                btn.onclick = () => {
                    button.onClick();
                    this.close(); // Close the modal after button click
                };
                modalButtons.appendChild(btn);
            });
            modal.appendChild(backdrop);
            modal.appendChild(modalC);
            modalC.appendChild(modalH);
            modalC.appendChild(content);
            modalC.appendChild(modalButtons);
            document.body.appendChild(modal)
        },
        open: function () {
            const modal = document.querySelector('.ext-jd-modal');
            if (modal) {
                modal.style.display = 'block';
            }
        },
        close: function () {
            const modal = document.querySelector('.ext-jd-modal');
            if (modal) {
                modal.remove();
            }
        },
    }
}

// const modal = require('./js/components/modal/main').modal;
// modal().creatation({
//     title: 'Hello World',
//     content: 'This is a modal example.',
//     buttons: [
//         { text: 'OK', onClick: () => console.log('OK clicked') },
//         { text: 'Cancel', onClick: () => console.log('Cancel clicked') }
//     ]
// });
// modal().open();