class AnimatedNavbar {
    constructor (navId,buttonId){
        this.navbar = document.getElementById(navId);
        this.button = document.getElementById(buttonId);
        this.status = 'closed';
        this.lgWidth = '70%';
        this.smWidth = '20%';
        this.breakpoint = 768;
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
        if(this.viewportWidthObtain() < this.breakpoint){
            this.navbar.style.width = this.lgWidth;
        }else{
            this.navbar.style.width = this.smWidth;
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