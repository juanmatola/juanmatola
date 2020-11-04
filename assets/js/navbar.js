class AnimatedNavbar {
    constructor (navId,buttonId){
        this.navbar = document.getElementById(navId);
        this.button = document.getElementById(buttonId);
        this.status = 'closed';
        this.init();
    }
    init () {
        this.button.addEventListener('click', () => {this.action();});
    }
    action (){
        if (this.status == 'closed') {
            this.open();
            this.changeButtonToClose();
        }else{
            this.close();
            this.changeButtonToOpen();
        }
    }
    open () {
        this.navbar.style.width = '100%';
        this.status = 'open';
    }
    close () {
        this.navbar.style.width = '0%';
        this.status = 'closed';
    }
    changeButtonToOpen () {
        this.button.innerHTML = '<i class="fas fa-bars"></i>';
        this.button.classList.replace('color-white','color-dark');
    }
    changeButtonToClose () {
        this.button.innerHTML = '<i class="fas fa-times"></i>';
        this.button.classList.replace('color-dark','color-white');
    }
}

let nav = new AnimatedNavbar('myNav','openNav');