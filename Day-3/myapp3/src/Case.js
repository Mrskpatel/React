import React from 'react'

function Case() {
  return (
    <div>
        <center>
        <h1>case studies</h1>
        <p>Hub IT allows your business and technology computers to store, transmit, <br /> analyze, and manipulate big data.</p>
        </center>

        <div className="studies">
            <div className="sub-studies">
                <center>
                    <i class="fa-solid fa-map"></i>
                    <p>grow your brand <br />and business</p>
                </center>
            </div>
            <div className="sub-studies">
                <center>
                <i class="fa-solid fa-user-graduate"></i>
                <p>business plan <br />consulting</p>
                </center>
            </div>
            <div className="sub-studies">
                <center>
                <i class="fa-solid fa-calculator"></i>
                <p>increase your <br />conversion rate</p>
                </center>
            </div>
            <div className="sub-studies">
                <center>
                    <i class="fa-solid fa-shield-halved"></i>
                    <p>business startup <br />analysis</p>
                </center>
            </div>
        </div>
        <center> <br /><span id='see'>see more services</span></center>
    </div>
  )
}

export default Case