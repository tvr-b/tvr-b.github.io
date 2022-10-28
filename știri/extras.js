$(window).on("load", () => {
    if (!$("nav").length) generateNavbar();
    if (!$("footer").length) generateFooter();
})

function generateNavbar() {
    let navbar = document.createElement("nav");
    navbar.classList.add("d-flex", "flex-column")
	
	navbar.innerHTML = `
		<div class="container bbc-header d-inline-flex" style="justify-content: space-between;">
        <div class="header-element">
            <img src="https://tvr-b.github.io/știri/assets/images/svg/bbc-b.svg" width="80px>
        </div>
        
        
        <div></div>
        

<div></div>
        
    $("body").prepend(navbar);
}

function generateFooter() {
    let footer = document.createElement("footer");
    
	footer.innerHTML = `
		<hr class="w-100" style="margin-bottom: 10px;"><div class="container"><div class="d-flex flex-column">
    <div class="footer-element d-none d-sm-block" style="font-size: 1.7em;font-weight: bold;padding-top: 8px;padding-bottom: 8px;">Explore the BBC</div>
        <div class="row">
            <div class="d-flex footer-element-container col">
                <div class="d-flex flex-column w-100" style="font-weight: bold;">
                    <div style="">Home</div>
                    <div>Future</div>
                    
                </div>
                
            </div>
            <div class="d-flex footer-element-container col" style="font-weight: bold;">
                <div class="d-flex flex-column w-100">
                    <div style="">News</div>
                    <div>Culture</div>
                    
                </div>
                
            </div>
            <div class="d-flex footer-element-container col">
                <div class="d-flex flex-column w-100" style="font-weight: bold;">
                    <div style="">Sport</div>
                    <div>TV</div>
                </div>
                <div></div>
            </div>
            <div class="d-none d-sm-flex footer-element-container col">
                <div class="d-flex flex-column w-100" style="font-weight: bold;">
                    <div style="">Reel</div>
                    <div>Weather</div>
                </div>
                <div></div>
            </div>
            <div class="d-none d-lg-flex footer-element-container col">
                <div class="d-flex flex-column w-100" style="font-weight: bold;">
                    <div style="">Worklife</div>
                    <div>Sounds</div>
                </div>
                <div></div>
            </div>
            <div class="d-none d-lg-flex footer-element-container col" style="font-weight: bold;">
                <div class="d-flex flex-column w-100">
                    <div>Travel</div>
                    
                </div>
                <div></div>
            </div>
        </div>
        <hr class="w-100">
        <div class="d-flex footer-bottom">
            <div class="footer-element">
                Terms of Use
            </div>
            <div class="footer-element">
                About the TBBC
            </div>
            <div class="footer-element">
                Privacy Policy
            </div>
            <div class="footer-element d-none d-sm-block">
                Cookies
            </div>
            <div class="footer-element d-none d-sm-block">
                Accessibility Help
            </div>
            <div class="footer-element d-none d-lg-block">
                Parental Guidance
            </div>
            <div class="footer-element d-none d-lg-block">
                Contact the TBBC
            </div>
            <div class="footer-element d-none d-lg-block">
                Get Personalised Newsletters
            </div>
        </div>
        


    </div></div>
	`

    $("body").append(footer);
}
