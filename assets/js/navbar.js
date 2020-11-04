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
        if(this.viewportWidthObtain() < 768){
            this.navbar.style.width = '70%';
        }else{
            this.navbar.style.width = '20%';
        }
        this.status = 'open';
    }
    close () {
        this.navbar.style.width = '0%';
        this.status = 'closed';
    }
    changeButtonToOpen () { 
        this.button.innerHTML = '<i class="fas fa-bars fa-2x"></i>';
        this.button.classList.replace('color-white','color-dark');
    }
    changeButtonToClose () {
        this.button.innerHTML = '<i class="fas fa-times fa-2x"></i>';
        this.button.classList.replace('color-dark','color-white');
    }
    viewportWidthObtain(){
        return document.documentElement.clientWidth;
    }
}

let nav = new AnimatedNavbar('myNav','openNav');