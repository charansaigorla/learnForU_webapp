import React from 'react'

export default function Home() {
  return (
    <>
    <div>
    <header className="bgimg-1 w3-display-container w3-grayscale-min" id="home" style={{ paddingTop: 480, backgroundColor:'yellow' }}>
        <div className="w3-display-left w3-text-white" style={{padding: '48px'}}>
          <span className="w3-jumbo w3-hide-small">Start Learning For Yourself!</span><br />
          <span className="w3-xxlarge w3-hide-large w3-hide-medium">Share Knowledge..Gain Knowledge</span><br />
          <span className="w3-large">Share Knowledge..Gain Knowledge</span>
          <p><a href="#about" className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Learn more and start today</a></p>
        </div> 
        <div className="w3-display-bottomleft w3-text-grey w3-large" style={{padding: '24px 48px'}}>
          <i className="fa fa-facebook-official w3-hover-opacity" />
          <i className="fa fa-instagram w3-hover-opacity" />
          <i className="fa fa-snapchat w3-hover-opacity" />
          <i className="fa fa-pinterest-p w3-hover-opacity" />
          <i className="fa fa-twitter w3-hover-opacity" />
          <i className="fa fa-linkedin w3-hover-opacity" />
        </div>
      </header>
      <div>
        <div className="w3-container" style={{padding: '128px 16px'}} id="about">
          <h3 className="w3-center">ABOUT THE COMPANY</h3>
          <p className="w3-center w3-large">Key features of our company</p>
          <div className="w3-row-padding w3-center" style={{marginTop: '64px'}}>
            <div className="w3-quarter">
              <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center" />
              <p className="w3-large">Responsive</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className="w3-quarter">
              <i className="fa fa-heart w3-margin-bottom w3-jumbo" />
              <p className="w3-large">Passion</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className="w3-quarter">
              <i className="fa fa-diamond w3-margin-bottom w3-jumbo" />
              <p className="w3-large">Design</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className="w3-quarter">
              <i className="fa fa-cog w3-margin-bottom w3-jumbo" />
              <p className="w3-large">Support</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
          </div>
        </div>
       
      </div>
      <footer class="w3-center w3-black w3-padding-64">
     <a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
     <div class="w3-xlarge w3-section">
       <i class="fa fa-facebook-official w3-hover-opacity"></i>
       <i class="fa fa-instagram w3-hover-opacity"></i>
       <i class="fa fa-snapchat w3-hover-opacity"></i>
      <i class="fa fa-pinterest-p w3-hover-opacity"></i>
      <i class="fa fa-twitter w3-hover-opacity"></i>
      <i class="fa fa-linkedin w3-hover-opacity"></i>
    </div>
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="LearnForU" target="_blank" class="w3-hover-text-green">LearnForU</a></p>
</footer>
    </div>
    </>
  )
}
