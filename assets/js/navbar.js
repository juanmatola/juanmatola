class AnimatedNavbar {
    constructor (navId,buttonId,linksClass){
        this.navbar = document.getElementById(navId);
        this.button = document.getElementById(buttonId);
        this.links = document.querySelectorAll(linksClass);
        this.status = 'closed';
        this.lgWidth = '70%';
        this.smWidth = '20%';
        this.breakpoint = 768;
        this.init();
    }
    init () {
        this.button.addEventListener('click', () => this.action());
        for(let link of this.links){
            link.addEventListener('click', () => this.close());
        }
    }
    action (){
        if (this.status == 'closed') {
            this.open();
        }else{
            this.close();
        }
    }
    open () {
        if(this.viewportWidthObtain() < this.breakpoint){
            this.navbar.style.width = this.lgWidth;
        }else{
            this.navbar.style.width = this.smWidth;
        }
        this.status = 'open';
        this.changeButtonToClose();
    }
    close () {
        this.navbar.style.width = '0%';
        this.status = 'closed';
        this.changeButtonToOpen();
    }
    changeButtonToOpen () { 
        this.button.innerHTML = '<i class="fas fa-bars fa-2x"></i>';
    }
    changeButtonToClose () {
        this.button.innerHTML = '<i class="fas fa-times fa-2x"></i>';
    }
    viewportWidthObtain(){
        return document.documentElement.clientWidth;
    }
}

let nav = new AnimatedNavbar('myNav','openNav','.menu__link');