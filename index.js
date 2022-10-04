function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  const checkbox = document.getElementById('checkbox');

  checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
  })
  function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }