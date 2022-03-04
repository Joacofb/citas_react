import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if( Object.keys(paciente).length > 0  ) {
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
    }
}, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del Formulario
    if( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
      console.log('Todos los campos son requeridos.')
      setError(true)
      return;
    } 

    setError(false)
    
    // Objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if(paciente.id) {
      // Editando el paciente
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente])
    }

    // Reiniciar Formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

        <p className='text-lg mt-5 text-center mb-5'>Agrega pacientes y {''}
          <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form
          onSubmit={handleSubmit} 
          className='bg-white shadow-md rounded-md py-10 px-5 mb-10'
        >
          { error && <Error><p>Todos los campos son requeridos</p></Error>}
          <div>
            <label htmlFor='mascota' className='block text-gray-600 uppercase font-bold'>
              Nombre Mascota
            </label>
            <input
              id="mascota"
              type="text" 
              placeholder='Nombre de la mascota'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
              value={nombre}
              onChange={ (e) => setNombre(e.target.value) }
            />
          </div>
          <div>
            <label htmlFor='propietario' className='block text-gray-600 uppercase font-bold'>
              Nombre Propietario
            </label>
            <input
              id="propietario"
              type="text" 
              placeholder='Nombre del propietario'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
              value={propietario}
              onChange={ (e) => setPropietario(e.target.value) }
            />
          </div>  
          <div>
            <label htmlFor='email' className='block text-gray-600 uppercase font-bold'>
              Email de contacto
            </label>
            <input
              id="email"
              type='email' 
              placeholder='Email'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
              value={email}
              onChange={ (e) => setEmail(e.target.value) }
            />
          </div>
          <div>
            <label htmlFor='fecha' className='block text-gray-600 uppercase font-bold'>
              Fecha de visita
            </label>
            <input
              id="fecha"
              type="date" 
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
              value={fecha}
              onChange={ (e) => setFecha(e.target.value) }
            />
          </div>
          <div>
            <label htmlFor="sintomas" className='block text-gray-600 uppercase font-bold'>
              Sintomas
            </label>
            <textarea
              id="sintomas"
              className='border-2 w-full p-2 mt-2 mb-5 rounded-md'
              placeholder='Describa los sintomas de la mascota'
              value={sintomas}
              onChange={ (e) => setSintomas(e.target.value) }
            />
          </div>

          <input 
            type="submit"
            className='bg-indigo-600 w-full rounded-md text-white p-3 font-bold uppercase hover:bg-indigo-800 cursor-pointer transition-all'
            value={ paciente.id ? 'Editar paciente' : 'Agregar paciente' }
          />
        </form>
    </div>
  )
}

export default Formulario