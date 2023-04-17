function HeaderComp(props){
    return <header>
        <div className="row justify-content-evenly">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid colorback">
          <div className="col-lg-4 align-self-center"><img src="\Image\Logo.PNG" alt="Italian Trulli"/></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="navbar-nav">
              <a className="nav-link active col-5" aria-current="page" href="#">Home</a>
              <a className="nav-link col-lg-5" href="#">Menu 1</a>
              <a className="nav-link col-lg-5" href="#">Menu 2</a>
              <a className="nav-link col-lg-5" href="#">Menu 3</a>
              <a className="nav-link col-lg-5" href="#">Menu 4</a>
          </div>
         

        </div>
        <div className="col-lg-1 "><img id="transparent" src="\Image\LogoProfile.png" /></div>
      </div>
      
    </nav>
</div>
      </header>
    ;
}
export default HeaderComp;