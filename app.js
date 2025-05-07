import "./css/main.css";
import { companySearchByGoogle } from "./js/api/company-search";
import MenuWrapper from "./js/components/menu/main";

document.body.onload = function () {
    // HIgher Level Code
    document.addEventListener("keyup", function (event) {
        // Low Level Code 
        const selection = window.getSelection();
        const textSelection = selection.toString();
        const selectedText = textSelection.trim();
        if(selection.rangeCount > 0) {
            if (event.shiftKey && event.code === 'KeyE') {
                // document.body.style.backgroundColor = "red";
                // Get the selected text range
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                // Find the parent element
                const menu = new MenuWrapper({ top: rect.top, left: rect.left });
                menu.addMenuItem('Company Info', function() {
                    console.log('Hello World clicked!', selectedText);
                    companySearchByGoogle(selectedText)
                    menu.close()
                });
                menu.addMenuItem('Save Company', function() {
                    console.log('Goodbye World clicked!');
                    menu.close();
                });

                menu.open();                
            }
        }
    });
}