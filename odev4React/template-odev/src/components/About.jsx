import React from 'react'

function About() {
    let architects=[
{name:'John Doe',
profession:'CEO & Founder',
info:'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodalepellentesque elementum',
},
{name:'Janen Doe',
profession:'Architect',
info:'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodalepellentesque elementum',
},
{name:'Mike Ross',
profession:'Architect',
info:'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodalepellentesque elementum',
},
{name:'Dane Star',
profession:'Architect',
info:'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodalepellentesque elementum',
},
    ]
  return (
    <div>

  {/* About Section */}
  <div className="w3-container w3-padding-32" id="about">
    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
      About
    </h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
  <div className="w3-row-padding w3-grayscale">
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John" style={{ width: "100%" }} />
      <h3>{architects[0].name}</h3>
      <p className="w3-opacity">{architects[0].profession}</p>
      <p>
       {architects[0].info}
      </p>
      <p>
        <button className="w3-button w3-light-grey w3-block">Contact</button>
      </p>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" style={{ width: "100%" }} />
      <h3>{architects[1].name}</h3>
      <p className="w3-opacity">{architects[1].profession}</p>
      <p>
      {architects[1].info}
      </p>
      <p>
        <button className="w3-button w3-light-grey w3-block">Contact</button>
      </p>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src="https://www.w3schools.com/w3images/team3.jpg" alt="Mike" style={{ width: "100%" }} />
      <h3>{architects[2].name}</h3>
      <p className="w3-opacity">{architects[2].profession}</p>
      <p>
      {architects[2].info}
      </p>
      <p>
        <button className="w3-button w3-light-grey w3-block">Contact</button>
      </p>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src="https://www.w3schools.com/w3images/team4.jpg" alt="Dan" style={{ width: "100%" }} />
      <h3>{architects[3].profession}</h3>
      <p className="w3-opacity">{architects[3].profession}</p>
      <p>
      {architects[3].info}
      </p>
      <p>
        <button className="w3-button w3-light-grey w3-block">Contact</button>
      </p>
    </div>
  </div>

    </div>
  )
}

export default About