import logo from './assets/instagram.png';
export const Navbar = () => {
    return (
        <nav class="navbar bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="Logo" width="28" height="28" class="d-inline-block align-text-center" />
                   <span className="ms-2">
                    Instagram Story Downloader
                   </span>
                </a>
            </div>
        </nav>
    )
}
