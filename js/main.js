
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const sidebar = document.getElementById('sidebar');
  const backToTopBtn = document.querySelector('#back-to-top');
  const links = document.querySelectorAll('#sidebar a');

  window.onload =  () => {
    window.scrollTo({
      top:0,
    });
  const preloader = document.getElementById("preloader");
  preloader.classList.add("opacity-0");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 200);
};

  menuBtn.onclick = ()=>{
    sidebar.style.right = '0';
    document.body.classList.add("overflow-hidden"); // منع السكرول عنند فتح القائمة المنسدلة
  }

  closeBtn.onclick = ()=>{
    sidebar.style.right = '-100%';
    document.body.classList.remove("overflow-hidden"); // إعادة السكرول عند غلق القائمة المنسدلة
  }
  links.forEach(link =>{
    link.onclick = ()=>{
      sidebar.style.right = '-100%';
      document.body.classList.remove("overflow-hidden"); //اغلاق القائمة المنسدلة عند الضغط على أي رابط
    }
  });

window.onscroll = () =>{
  if(window.scrollY >200){
    backToTopBtn.classList.remove('hidden');
    backToTopBtn.classList.add('block');
  }else{
    backToTopBtn.classList.add('hidden');
    backToTopBtn.classList.remove('block');
  }
}

backToTopBtn.onclick = ()=>{
  window.scrollTo({
    top:0,
  });
}
