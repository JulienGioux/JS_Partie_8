Btn_ScrollToTop.onclick = func_SrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
document.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        Btn_ScrollToTop.style.transform = `scale(100%) rotate(-90deg)`;
        Btn_ScrollToTop.style.transition = `0.5s`;
      } else {
        Btn_ScrollToTop.style.transform = `scale(0%) rotate(-90deg)`;        
        Btn_ScrollToTop.style.transition = `0.5s`;
      }
}