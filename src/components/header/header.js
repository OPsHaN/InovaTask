import './header.css';

const Header = () => {


return (
<>
<section class="ftco-section text-white bg">
<div class="container">
<div class="row justify-content-between">
<div class="col mt-2 mb-2">
<a href="/" ><img src="http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg"/></a>
</div>
<div class="col d-flex justify-content-end align-items-center">
<a href='' class="mx-2">Sign in </a> or <a href='' class="mx-2">Sign up </a>
</div>
</div>
</div>
<nav class="navbar navbar-expand-lg navbar-dark text-white ftco_navbar bg-dark ftco-navbar-white" id="ftco-navbar">
<div class="container">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
<span class="fa fa-bars"></span> Menu
</button>
<form action="#" class="searchform order-lg-last">
<div class="form-group d-flex text-white align-items-center ">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart mx-2" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> Cart   
</div>
</form>
<div class="collapse navbar-collapse text-white" id="ftco-nav">
<ul class="navbar-nav mr-auto text-white ">
<li class="nav-item "><a href="#" class="nav-link active font-weight-bold">Home</a></li>
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle mx-5" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">News</a>
<div class="dropdown-menu" aria-labelledby="dropdown04">
<a class="dropdown-item" href="#">Page 1</a>
<a class="dropdown-item" href="#">Page 2</a>
<a class="dropdown-item" href="#">Page 3</a>
<a class="dropdown-item" href="#">Page 4</a>
</div>
</li>
<li class="nav-item mx-3"><a href="#aboutus" class="nav-link">About Us</a></li>
<li class="nav-item mx-3"><a href="#" class="nav-link">E-Books</a></li>
<li class="nav-item mx-3"><a href="#" class="nav-link">Contact us</a></li>
</ul>
</div>
</div>
</nav>
</section>

</>
    )


}

export default Header;
