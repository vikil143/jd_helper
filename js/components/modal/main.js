
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

    function content() {
        const c = document.createElement('div');
        c.classList.add('ext-jd-modal-content');
        return c;
    }

    function header() {
        const header = document.createElement('div');
        header.classList.add('ext-jd-modal-header');
        return header;
    }

    return {
        // Need to consider types
        creatation: ({ title, c, buttons }) => {
            modal.innerHTML = '' // Clear previous content
            const backdrop = backDrop();
            const modalContent = content();
            const modalHeader = header();
            const modalTitle = document.createElement('h2');
            modalTitle.innerText = title;
            modalHeader.appendChild(modalTitle);
            const modalButtons = document.createElement('div');
            modalButtons.classList.add('ext-jd-modal-buttons');
            buttons.forEach((button) => {
                const btn = document.createElement('button');
                btn.innerText = button.text;
                btn.onclick = () => {
                    button.onClick();
                    modal.close();
                };
                modalButtons.appendChild(btn);
            });
            modal.appendChild(backdrop);
            modal.appendChild(modalContent);
            modalContent.appendChild(modalHeader);
            modalContent.appendChild(c);
            document.body.appendChild(modal)
        },
        open: () => {
            const modal = document.querySelector('.ext-jd-modal');
            if (modal) {
                modal.style.display = 'block';
            }
        },
        close: () => {
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