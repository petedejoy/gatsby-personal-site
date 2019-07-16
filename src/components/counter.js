import React, {useState} from "react"
import PropTypes from "prop-types"

const counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h3>Like this!</h3>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h3>{count}</h3>
    </div>
  )
}

export default counter
