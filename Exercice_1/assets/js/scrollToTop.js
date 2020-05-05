Btn_ScrollToTop.onclick = func_SrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
document.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        Btn_ScrollToTop.style.display = "block";
      } else {
        Btn_ScrollToTop.style.display = "none";
      }
}