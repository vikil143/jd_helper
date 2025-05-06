class MenuWrapper {
    constructor({ top, left }) {
        this.menu = document.createElement('div');
        this.menu.classList.add('ext-jd-menu');
        this.menuContent = document.createElement('div');
        this.menuContent.classList.add('ext-jd-menu-content');
        this.menuContent.style.top = `${top}px`;
        this.menuContent.style.left = `${left}px`;
        this.backDrop = document.createElement('div');
        this.backDrop.classList.add('ext-jd-menu-backdrop');
        // Append elements to the menu
        this.menu.appendChild(this.backDrop);
        this.menu.appendChild(this.menuContent);
        document.body.appendChild(this.menu);
        this.menu.style.display = 'none'; // Initially hide the menu
    }

    addMenuItem(text, onClick) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('ext-jd-menu-item');
        menuItem.innerText = text;
        menuItem.onclick = onClick;
        this.menuContent.appendChild(menuItem);
    }

    open() {
        this.menu.style.display = 'block';
        this.backDrop.onclick = () => {
            this.close();
        };
        // Close the menu when clicking outside of it
    }
    close() {
        this.menu.style.display = 'none';
    }
}

export default MenuWrapper;