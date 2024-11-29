

function guardar(){
    const cedulag = document.querySelector('input[type="text"][name="cedula"]').value;
    const nombreg = document.querySelector('input[type="text"][name="nombre"]').value;
    const apellidog = document.querySelector('input[type="text"][name="apellido"]').value;
    
    if (!cedula || !nombre || !apellido) {
        document.getElementById('incompleto').textContent = 'Todos los campos son obligatorios.';
        return;
    }
    const profesor={
        cedula,
        nombre,
        apellido
    };
    profesor.cedula=cedulag;
    profesor.nombre=nombreg;
    profesor.apellido=apellidog;
    
    console.log('Datos guardados:', profesor); 
    
    document.getElementById('incompleto').textContent ;

   
    
}



