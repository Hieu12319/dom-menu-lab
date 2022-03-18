// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  let topMenuEl = document.querySelectorAll("nav")
  for (let Links of menuLinks) {
    let Link = document.createElement('a')
    Link.textContent = Links.text
    console.log(Link)
    Link.setAttribute('href', Links.href)
    topMenuEl[0].appendChild(Link)
    console.log(Link)
    
    }

let mainEl = document.querySelectorAll("main") // returns an array (node)
console.log(mainEl)
mainEl[0]
mainEl[0].style.backgroundColor = "#4a4e4d";
mainEl[0].innerHTML = "<h1> SEI Rocks!</h1>"
mainEl[0].classList.add ("flex-ctr");

topMenuEl[0].style.height = "100%"
topMenuEl[0].style.backgroundColor = "var(--top-menu-bg)";
topMenuEl[0].classList.add ("flex-around")