/* Sticky navbar */
nav.scrolled{
    background: rgba(9, 11, 25, 0.9);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    transition: 0.3s;
}

/* Active nav link */
.nav-links ul li a.active{
    color: #f44336;
}

/* Scroll to top button */
#scrollTopBtn{
    display: none;
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #cf4436;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    font-size: 18px;
    cursor: pointer;
    z-index: 100;
    transition: 0.3s;
}
#scrollTopBtn:hover{
    background: #781b2c;
}

/* Fade-in animation */
.fade-init{
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-init.appear{
    opacity: 1;
    transform: translateY(0);
}