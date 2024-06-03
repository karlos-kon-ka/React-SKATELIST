export const Visibiliti  = ({isChecked, setShowCompleted, cleanTask})=>{

    const handleDelete  = () => {
if (window.confirm('estas seguro que quieres borrar?')){
    cleanTask()
}
    }
    return(
        <div className="d-flex p-3 justify-content-between border-secondary text-center text-white bg-secondary">
          <div className="form-check form-switch" >
          <input className="form-check-input" type='checkbox' checked={isChecked}
             onChange={e=> setShowCompleted (e.target.checked) } />
           <label  >Trucos ya hechos</label>
          </div>


           <button className="btn btn-danger btn-sm" onClick={handleDelete}>Limpiar</button>
        </div>
    )
}