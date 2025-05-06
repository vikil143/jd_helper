import { modal } from "./js/components/modal/main";
import "./css/main.css";

document.body.onload = function () {
    document.body.style.backgroundColor = "red";
    modal().creatation({
        title: 'Test Modal',
        c: document.createElement('div'),
        buttons: [
            {
                text: 'OK',
                onClick: () => {
                    console.log('OK clicked');
                },
            },
            {
                text: 'Cancel',
                onClick: () => {
                    console.log('Cancel clicked');
                },
            },
        ],
    });
    modal().open();
}