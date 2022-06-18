import React from 'react'

export default function About() {
  return (
    <>
    <div style={{ paddingTop: 80 }}>
    <div className="w3-container" style={{padding: '128px 16px'}} id="team">
        <h3 className="w3-center">THE TEAM</h3>
        <p className="w3-center w3-large">The ones who runs this company</p>
        <div className="w3-row-padding w3-grayscale" style={{marginTop: '64px',paddingLeft: 450}}>
          <div className="w3-col l3 m6 w3-margin-bottom"  >
            <div className="w3-card">
              <img src="logo2.jpg" alt="charan" style={{width: '100%'}} />
              <div className="w3-container">
                <h3>Charan Sai</h3>
                <p className="w3-opacity">CEO &amp; Founder</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope" /> Contact</button></p>
              </div>
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom" style={{paddingLeft: 50,width:300}}>
            <div className="w3-card">
              <img src="/w3images/team1.jpg" alt="suhas" style={{width: '100%'}} />
              <div className="w3-container">
                <h3>Suhas</h3>
                <p className="w3-opacity">CEO &amp; Co-Founder</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope" /> Contact</button></p>
              </div>
            </div>
          </div>
         
         
        </div>
      </div>
    </div>
    </>
  )
}
