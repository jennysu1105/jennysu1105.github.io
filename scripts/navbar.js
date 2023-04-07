class Navigation extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Jenny Su</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/resume.html">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/projects.html">Projects</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        `
    }
}

customElements.define('nav-bar', Navigation);