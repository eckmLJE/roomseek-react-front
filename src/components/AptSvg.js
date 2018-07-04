import React from 'react';

const AptSvg = () => {
  return (
    <svg viewBox="-10 0 550 900">
    {/* <!-- north apartments --> */}
    <rect className="rect-br1 brBox" x="0" y="40" width="175" height="250" stroke="black" fill="transparent" strokeWidth="3" />
    <text className="br1 brBox" x="25" y="90" fontFamily="Verdana" fontSize="20" fill="black">Test</text>

    <rect className="rect-br2 brBox" x="175" y="40" width="175" height="250" stroke="black" fill="transparent" strokeWidth="3" />
    <text className="br2 brBox" x="200" y="90" fontFamily="Verdana" fontSize="20" fill="black"></text>

    <rect className="rect-br3 brBox" x="350" y="40" width="175" height="250" stroke="black" fill="transparent" strokeWidth="3" />
    <text className="br3 brBox" x="375" y="90" fontFamily="Verdana" fontSize="20" fill="black"></text>

    {/* <!-- south apartments --> */}
    <polygon className="rect-br4 brBox" points="0,615 165,615 165,725 200,725 200,840 0,840" stroke="black" fill="transparent" strokeWidth="3"
    />
    <text className="br4 brBox" x="25" y="665" fontFamily="Verdana" fontSize="20" fill="black"></text>

    <polygon className="rect-br5 brBox" points="400,615 235,615 235,725 200,725 200,840 400,840" stroke="black" fill="transparent"
        strokeWidth="3" />
    <text className="br5 brBox" x="250" y="665" fontFamily="Verdana" fontSize="20" fill="black"></text>

    {/* <!-- living/kitchen --> */}
    <polygon points="0,290 400,290 400,615 235,615 235,725 165,725 165,615 0,615" stroke="black" fill="transparent" strokeWidth="2.5"
    />
    {/* <!-- kitchen wall --> */}
    <rect x="0" y="290" width="40" height="325" stroke="black" fill="transparent" strokeWidth="2" />
    {/* <!-- kitchen bar --> */}
    <rect x="100" y="350" width="60" height="200" stroke="black" fill="transparent" strokeWidth="2" />
    {/* <!-- stools --> */}
    <circle cx="176" cy="365" r="8" stroke="black" fill="transparent" strokeWidth="2" />
    <circle cx="176" cy="390" r="8" stroke="black" fill="transparent" strokeWidth="2" />
    <circle cx="176" cy="415" r="8" stroke="black" fill="transparent" strokeWidth="2" />
    <circle cx="176" cy="440" r="8" stroke="black" fill="transparent" strokeWidth="2" />
    <circle cx="176" cy="465" r="8" stroke="black" fill="transparent" strokeWidth="2" />
    {/* <!-- sink --> */}
    <rect x="110" y="475" width="35" height="60" stroke="black" fill="transparent" strokeWidth="2" />
    <circle cx="128.5" cy="505" r="3" stroke="black" fill="transparent" strokeWidth="2" />
    <line x1="136" x2="145" y1="505" y2="505" stroke="black" strokeWidth="3" />
    {/* <!-- fridge --> */}
    <rect x="0" y="290" width="34" height="70" stroke="black" fill="transparent" strokeWidth="2" />
    <line x1="34" x2="40" y1="325" y2="325" stroke="black" strokeWidth="1" />
    <line x1="34" x2="40" y1="360" y2="360" stroke="black" strokeWidth="2" />
    {/* <!-- range burners --> */}
    <rect x="0" y="455" width="40" height="55" stroke="black" fill="transparent" strokeWidth="2" />
    <circle cx="12" cy="463" r="1" stroke="black" fill="black" strokeWidth="1" />
    <circle cx="18" cy="463" r="1" stroke="black" fill="black" strokeWidth="1" />
    <circle cx="22" cy="463" r="1" stroke="black" fill="black" strokeWidth="1" />
    <circle cx="28" cy="463" r="1" stroke="black" fill="black" strokeWidth="1" />
    {/* <!-- range dials --> */}
    <circle cx="12.5" cy="475" r="6.5" stroke="black" fill="transparent" strokeWidth="1" />
    <circle cx="29" cy="475" r="6.5" stroke="black" fill="transparent" strokeWidth="1" />
    <circle cx="12.5" cy="495.5" r="6.5" stroke="black" fill="transparent" strokeWidth="1" />
    <circle cx="29" cy="495.5" r="6.5" stroke="black" fill="transparent" strokeWidth="1" />
    {/* <!-- living rug --> */}
    <rect x="225" y="390" width="140" height="170" stroke="black" fill="transparent" strokeWidth="2" />
    {/* <!-- couch  --> */}
    <rect x="245" y="425" rx="5" ry="5" width="50" height="105" stroke="black" fill="transparent" strokeWidth="2" />
    <rect x="255" y="437" rx="5" ry="5" width="39" height="81" stroke="black" fill="transparent" strokeWidth="2" />
    <line x1="255" x2="295" y1="464" y2="464" stroke="black" strokeWidth="1" />
    <line x1="255" x2="295" y1="491" y2="491" stroke="black" strokeWidth="1" />
    {/* <!-- chair --> */}
    <rect x="312.5" y="395" rx="5" ry="5" width="35" height="30" stroke="black" fill="transparent" strokeWidth="2" />
    <rect x="317.5" y="400" rx="5" ry="5" width="25" height="25" stroke="black" fill="transparent" strokeWidth="2" />
    {/* <!-- living tables --> */}
    <rect x="262.5" y="402.5" width="16" height="16" stroke="black" fill="transparent" strokeWidth="2" />
    <rect x="262.5" y="538" width="16" height="16" stroke="black" fill="transparent" strokeWidth="2" />
    <rect x="315" y="440" width="30" height="75" stroke="black" fill="transparent" strokeWidth="2" />
    {/* <!-- entry door --> */}
    <line x1="400" x2="380" y1="310" y2="345" stroke="black" strokeWidth="3" />
    <path d="M400 350 Q 390 355 380 345" stroke="black" fill="transparent" strokeWidth="1.25" />
</svg>
  )
};

export default AptSvg;
