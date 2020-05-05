Btn_ScrollToTop.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
document.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        Btn_ScrollToTop.style.transform = `scale(100%) rotate(270deg)`;
        Btn_ScrollToTop.style.opacity = `1`;
        Btn_ScrollToTop.style.transition = `0.5s`;
        Btn_ScrollToTop.onmouseover = () => Btn_ScrollToTop.style.transform = `scale(150%) rotate(-450deg)`;
        Btn_ScrollToTop.onmouseout = () => Btn_ScrollToTop.style.transform = `scale(100%) rotate(630deg)`;

      } else {
        Btn_ScrollToTop.style.transform = `scale(0%) rotate(-360deg)`;
        Btn_ScrollToTop.style.opacity = `0`;        
        Btn_ScrollToTop.style.transition = `0.5s`;
      }
}
