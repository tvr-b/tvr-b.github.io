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
            <img src="https://dlphesigns.github.io/news/tbbc/img/bbc-c.svg" width="112px">
        </div>
        
        
        <div></div>
        
        
        <div class="header-element d-block d-sm-none d-xl-block">
            <div class="header-text">
                <a href="https://dlphesigns.github.io/news">Home</a>
            </div>
        </div>
        <div></div>
        <div class="header-element d-none d-sm-block">
            <div class="header-text">
                News
            </div>
        </div>
        <div></div>
        <div class="header-element d-none d-sm-block">
            <div class="header-text">
                Sport
            </div>
        </div>
        <div></div>
        <div class="header-element d-none d-sm-block">
            <div class="header-text">Reel</div>
        </div>
        <div></div>
        <div class="header-element d-none d-md-block">
            <div class="header-text">Worklife</div>
        </div>
        <div></div>
        <div class="header-element d-none d-lg-block">
            <div class="header-text">Travel</div>
        </div>

<div></div>
        
        
        
        <div class="header-element d-none d-lg-block">
            <div></div><div class="header-text">Future
  </div>
        </div><div></div>
<div class="header-element d-none d-lg-block">
            <div class="header-text">Culture
  </div>
        </div>
        <div></div><div class="header-element" style="justify-content: space-between;">
            <div class="header-input d-none d-sm-flex" style="padding-top: 0.3em;padding-bottom: 0.3em;">
                <div class="icon-filled" style="padding-left: 0.5em;"> </div><input type="text" style="align-items: center;fill: black;" placeholder=" Search the BBC">
                
            </div>
            <div class="d-flex d-sm-none">
                <div class="icon-filled"></div>
            </div>
        </div><div class="header-separator d-block d-sm-none"></div>
    </div><div class="news-header">
        <div class="d-flex flex-column container">
            <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 430.39658 110.75903" enable-background="new 3367.9 3.96 61 15.33" preserveAspectRatio="xMinYMin meet" style="padding: 1.1em 0px 0.7em;" width="119px"><path d="M68.982,108.52892q-11.5965-18.582-23.49-37.242-11.895-18.6555-23.49-36.2v73.442H0V2.23092H23.192q12.042,17.9895,23.713,36.052,11.66852,18.063,23.266,36.646V2.22992H92.174v106.298H68.982Zm44.259-106.298h73.145v19.029h-50.25v23.044h44.601v19.029H136.136v26.166h53.075v19.03h-75.97Zm177.914,106.298q-5.055-17.98651-9.886-35.978-4.833-17.9865-9.441-35.978-4.45948,17.9895-9.217,35.978-4.7595,17.991-9.812,35.978H228.566q-7.5825-26.0145-14.57-52.629-6.99-26.6115-13.231-53.67h24.976q3.71545,20.6655,7.88,41.33,4.1595,20.667,8.771,40.586,9.95852-38.802,18.881-77.456h22.3q4.461,19.032,9.143,37.985,4.683,18.95547,9.589,37.836,4.461-19.62453,8.623-39.843,4.15951-20.2155,7.73-40.438h24.531q-6.2445,27.06-13.231,53.67-6.99,26.613-14.57,52.629Zm95.37,2.23a78.3712,78.3712,0,0,1-17.32-1.933,66.25651,66.25651,0,0,1-16.428-6.096v-20.516a63.9326,63.9326,0,0,0,33.748,9.664q10.10857,0,15.387-3.419a10.74975,10.74975,0,0,0,5.278-9.515,9.75149,9.75149,0,0,0-2.602-7.211,18.55926,18.55926,0,0,0-6.913-4.163,99.45515,99.45515,0,0,0-9.663-2.899,110.6498,110.6498,0,0,1-15.462-4.757,45.038,45.038,0,0,1-11.299-6.319,23.84449,23.84449,0,0,1-6.987-8.771,28.94176,28.94176,0,0,1-2.379-12.265,29.44592,29.44592,0,0,1,5.129-17.395A32.71617,32.71617,0,0,1,371.51,3.93892q9.366-3.9375,22.3-3.939a72.22352,72.22352,0,0,1,16.651,1.933,67.68455,67.68455,0,0,1,14.718,5.204v20.219a56.13379,56.13379,0,0,0-14.792-6.244,63.27662,63.27662,0,0,0-16.577-2.231q-9.07045,0-14.049,3.122a9.935,9.935,0,0,0-4.981,8.92,9.09272,9.09272,0,0,0,2.379,6.616,17.3599,17.3599,0,0,0,6.765,4.014q4.383,1.5615,10.332,3.048,7.58248,1.935,14.124,4.237a45.86268,45.86268,0,0,1,11.521,5.872,24.45917,24.45917,0,0,1,7.731,9.069,30.06172,30.06172,0,0,1,2.75,13.529q0,10.55852-5.203,18.063a32.29,32.29,0,0,1-15.016,11.447Q400.353,110.75842,386.525,110.75892Z" transform="translate(0 0.0001)" style="fill:#fff"></path></svg><div class="header">
                
            </div>
            <div class="options">
                <hr class="d-block d-md-none">
                <div class="d-flex d-md-none">
                    <div style="width: 50%; text-align: center; padding: 8px; font-family: 'Helvetica', sans-serif; color: #ffffff; font-weight: 700;">
                        Latest Stories
                    </div>
                    <div style="width: 50%; text-align: center; padding: 8px; font-family: 'Helvetica', sans-serif; color: #ffffff; font-weight: 700; background-color: #990000;">
                        Most Read
                    </div>
                </div>
                <div class="d-none d-md-flex header-options" style="font-family: 'Helvetica', sans-serif; color: #ffffff;">
                    
                <div style="padding: 8px 13px 8px 0px;/*! font-weight: bold; */">Home</div><div class="header-separator" style="align-self: center;"></div><div style="padding: 8px 13px 8px 13px;/*! font-weight: bold; */">Linuxit</div><div class="header-separator" style="align-self: center;"></div><div style="padding: 8px 13px 8px 13px;/*! font-weight: bold; */">Electron Virus</div><div class="header-separator" style="align-self: center;"></div><div style="padding: 8px 13px 8px 13px;/*! font-weight: bold; */">Web Alliance</div><div class="header-separator" style="align-self: center;font-weight: bold;"></div><div class="d-none d-lg-block" style="padding: 8px 13px 8px 13px;/*! font-weight: bold; */">United Native Alliance</div><div class="header-separator d-none d-lg-block" style="align-self: center;font-weight: bold;"></div><div class="d-none d-lg-block" style="padding: 8px 13px 8px 13px;/*! font-weight: bold; */">Dev Country Conflicts</div><div class="header-separator d-none d-lg-block" style="align-self: center;font-weight: bold;"></div><div class="d-none d-lg-block" style="padding: 8px 13px 8px 13px;/*! font-weight: bold; */">Stories</div><div class="header-separator d-none d-lg-block" style="align-self: center;"></div><div class="d-none d-lg-block" style="padding: 8px 13px 8px 13px;/*! font-weight: bold; */">World News TV</div></div>
            </div>
        </div>
    </div>
	`;

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
