import { useState, useEffect } from "react"
export default function Spirit () {

    const [spiritPics, setSpiritPics] = useState([])

    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/latest_photos?api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh')
          .then(res => res.json())
          .then(res => setSpiritPics(res))
      }, [])


return (

    <div>
      <h1>TEST</h1>
        <table>
            <td><a href="/rover-photos/curiosity.js">Curiosity</a></td>
            <td><a href="/rover-photos/opportunity.js">Opportunity</a></td>
            <td><a href="/rover-photos/spirit.js">Spirit</a></td>
        </table>
    </div>

)

}
