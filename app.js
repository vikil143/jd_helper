import { modal } from "./js/components/modal/main";
import "./css/main.css";

document.body.onload = function () {
    modal().creatation({
        title: 'Test Modal',
        content: document.createTextNode("This is a test modal content."),
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