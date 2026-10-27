import "./Popup.scss"
import { useEffect, useRef, useState } from "react"
import { RxCross2 } from "react-icons/rx";
const Popup = ({setIsOpen,isOpen}) => {

  const [message, setMessage] = useState("")
  const nameInputRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)
    nameInputRef.current?.focus()

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [isOpen])

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage("Online booking isn't connected yet. Please call us to confirm your appointment.")
  }

  return (
    <div className="appointment_popup">
  
        <div
          className="appointment_popup_backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false)
          }}
        >
          <section
            className="appointment_popup_dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment_popup_title"
          >
            <button
              className="appointment_popup_close"
              type="button"
              aria-label="Close appointment form"
              onClick={() => setIsOpen(false)}
            >
             <RxCross2 />
            </button>

            <p className="appointment_popup_eyebrow">1991 Tattoos</p>
            <h2 id="appointment_popup_title">Book an appointment</h2>
            <p className="appointment_popup_intro">
              Tell us a little about what you have in mind and we’ll help you plan your visit.
            </p>

            <form className="appointment_popup_form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  ref={nameInputRef}
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Number
                <input
                  type="tel"
                  name="number"
                  autoComplete="tel"
                  placeholder="Your phone number"
                  required
                />
              </label>

              <label>
                Service
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  <option value="permanent tattoo">Permanent Tattoo</option>
                  <option value="consultation">Consultation</option>
                   <option value="tattoo removal">Tattoo Removal</option>
                   <option value="piercing">Piercing</option>
                  <option value="cover-up">Cover-up</option>
                  
                </select>
              </label>

              <label>
                Date
                <input type="date" name="date" required />
              </label>

              <label>
                Time
                <input type="time" name="time" required />
              </label>

              <button className="appointment_popup_submit" type="submit">
                Request appointment
              </button>
              {message && (
                <p className="appointment_popup_message" role="status">
                  {message}
                </p>
              )}
            </form>
          </section>
        </div>
     
    </div>
  )
}

export default Popup