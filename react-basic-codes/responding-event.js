// Responding to events

function MyButton() {
  function handleClick() {
    alert('your clicked the button')
  }

  return(
    <button onClick={handleClick}>
      Click
    </button>
  )
}
