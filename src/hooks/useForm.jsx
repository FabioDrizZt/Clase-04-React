import { useState } from "react"

export default function useForm() {
  const [inputValues, setInputValues] = useState({
    name: '',
    lastName: '',
    email: '',
    password: ''
  })

  const emailRegex = /^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, lastName, email, password } = inputValues
    if (!name) {
      alert('ingrese su nombre')
    } else if (!lastName) {
      alert('ingrese su apellido')
    } else if (!email || !emailRegex.test(email)) {
      alert('ingrese bien su correo')
    } else if (!password || password.length < 8) {
      alert('Ingrese contraseña de 8 caracteres o mas')
    } else {
      // send data to server
      alert(`Gracias ${name} por registrarse`)
      handleCleanup()
    }
  }

  const handleCleanup = () => {
    setInputValues({
      name: '',
      lastName: '',
      email: '',
      password: ''
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputValues({ ...inputValues, [name]: value })
  }

  return { handleSubmit, handleChange, inputValues, handleCleanup }
}