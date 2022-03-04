import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5'>

      { pacientes && pacientes.length ? (
        <>
          <h2 className="text-center text-3xl font-black">Listado Pacientes</h2>
          <p className='text-lg mt-5 text-center mb-5'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold'> Clientes y Citas</span>
          </p>
          <div className='h-screen overflow-y-scroll'>
            
            {pacientes.map( paciente => (
              <Paciente 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-center text-3xl font-black">Listado Pacientes Vacio</h2>
          <p className='text-lg mt-5 text-center mb-5'>
            Agrega tus {''}
            <span className='text-indigo-600 font-bold'> Clientes y Citas AQUI</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes