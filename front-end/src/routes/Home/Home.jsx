import { CareerCard } from "../../components/CareerCard/CareerCard";
import { Input } from "../../components/Input/Input";
import styles from "./Home.module.css";
import imgIngSoftware from '/img/ingenieria-software.jpg';
import imgContabilidad from '/img/contabilidad.jpg';
import { useNavigate } from "react-router-dom";

export const Home = () => {
  
  const navigate=useNavigate();
  return (
    <div className={styles.contenedorHome}>
      <div className={styles.contenedorTitulo}>
        <h1 className={styles.titulo}>Convocatorias 2024 de Prácticas en Perú</h1>
      </div>

      <div className={styles.contenedorParrafo}>
        <p className={styles.parrafo}>
          Encuentra en un solo lugar convocatorias para practicantes
          PreProfesionales y Profesionales
        </p>
      </div>

      <form className={styles.formulario}>
        <div className={styles.contenedorInput}>
          <Input 
            label={null}
            type='text'
            placeholder='Ingresa tu Carrera'
            classInput='inputCarrera anchoTotal'
          />
        </div>

        
        <div className={styles.contenedorSelect}>
          <select name="" id={styles.inputLugar} className={`anchoTotal ${styles.inputLugar}`}>
            <option value="">Lugar</option>
            <option value="">Lima</option>
            <option value="">Ica</option>
            <option value="">Huancayo</option>
            <option value="">Puno</option>
            <option value="">Cusco</option>
          </select>
        </div>

        <div className={styles.contenedorBoton}>
          {/* Estoy agregando un useNavigate para acceder a ofertar de empleo */}
          <button onClick={()=>navigate("/ofertas-empleo")} className={`btn btn-danger anchoTotal ${styles.btnBuscar}`}>Buscar Prácticas</button>
        </div>
      </form>

      <div className={styles.contenedorCarreras}>
        <CareerCard 
          rutaImg={imgIngSoftware}
          carrera="Ingeniería de Software"
        />
        <CareerCard 
          rutaImg={imgContabilidad}
          carrera="Contabilidad"
        />
        <CareerCard 
          rutaImg={imgIngSoftware}
          carrera="Ingeniería de Software"
        />
        <CareerCard 
          rutaImg={imgContabilidad}
          carrera="Contabilidad"
        />
        <CareerCard 
          rutaImg={imgIngSoftware}
          carrera="Ingeniería de Software"
        />
        <CareerCard 
          rutaImg={imgContabilidad}
          carrera="Contabilidad"
        />

      </div>
    </div>
  );
};
