(function(){
  const btn = document.getElementById("chatBtn");
  const panel = document.getElementById("chatPanel");
  const closeBtn = document.getElementById("chatClose");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  if(!btn || !panel) return;
  btn.addEventListener("click", ()=> panel.classList.toggle("open"));
  if(closeBtn) closeBtn.addEventListener("click", ()=> panel.classList.remove("open"));
})();
