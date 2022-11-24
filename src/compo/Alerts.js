import React from 'react'

export default function Alerts() {
  return (
    <>
    <div>

    <div className="alerts alert-error"> <i class="fa-solid fa-circle-exclamation"></i> There seems to be an error</div>
        <div className="alerts alert-success"> <i class="fa-solid fa-check"></i> Everything seems to be working</div>
        <div className="alerts alert-warning"> <i class="fa-solid fa-triangle-exclamation"></i> warning! Check your code</div>
        <div className="alerts alert-info"> <i class="fa-solid fa-circle-info"></i>  Just informing you</div>
      
        <iframe
  src="https://carbon.now.sh/embed/BgDkjMpCNYAo7LjuU5ee"
  style={{width: "1024px", height: "190px", border:"0", transform: "scale(1)", overflow:"hidden"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
      
    </div>
    </>
  )
}
