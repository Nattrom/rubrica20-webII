import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'; 

const Create = ({ setOverview, setContent, setCreate }) => {
  const navigate = useNavigate();
  const [redirectToContent, setRedirectToContent] = useState(false);
  const [previewData, setPreviewData] = useState(null); // Estado para almacenar la vista previa

  const guardarEnLocalStorage = (datos) => {
    const tarjetasGuardadas = JSON.parse(localStorage.getItem('cards')) || [];
    tarjetasGuardadas.push(datos);
    localStorage.setItem('cards', JSON.stringify(tarjetasGuardadas));

    Swal.fire({
      icon: 'success',
      title: 'Tarjeta agregada exitosamente',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  

  const formik = useFormik({
    initialValues: {
      img: '',
      titulo: '',
      descripcion: '',
      categoria: '',
      equipo: '',
      link: '',
    },
    validationSchema: Yup.object({
      titulo: Yup.string()
        .required("Ingrese el Titulo")
        .min(3, "Minimo de 3 caracteres")
        .max(20, "Maximo de 20 caracteres"),
      descripcion: Yup.string()
        .required("Ingrese la descripcion")
        .min(50, "Minimo de 50 caracteres")
        .max(200, "Maximo de 200 caracteres"),
      categoria: Yup.string()
        .required("Ingrese la categoria")
        .oneOf(["Motor", "Mesa", "Equipo"], "Categoria no valida"),
      equipo: Yup.string()
        .required("Ingrese el equipo")
        .min(3, "Minimo de 3 caracteres")
        .max(15, "Maximo de 15 caracteres"),
      link: Yup.string()
        .required("Ingrese el link")
        .min(10, "Minimo de 10 caracteres")
        .max(50, "Maximo de 50 caracteres"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      guardarEnLocalStorage(values);
      setOverview(false);
      setContent(true);
      setCreate(false);
      setRedirectToContent(true);
    },
  });

  // Manejar la redirección cuando redirectToContent es true
  if (redirectToContent) {
    navigate('/content');
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="img" className="form-label mt-4">Link de la imagen</label>
              <input
                type="text"
                className="form-control"
                id="img"
                name="img"
                onChange={(e) => {
                  formik.handleChange(e);
                  setPreviewData({
                    ...previewData,
                    img: e.target.value,
                  });
                }}
                value={formik.values.img}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="titulo" className="form-label">Titulo</label>
              <input
                type="text"
                className="form-control"
                id="titulo"
                name="titulo"
                onChange={(e) => {
                  formik.handleChange(e);
                  setPreviewData({
                    ...previewData,
                    titulo: e.target.value,
                  });
                }}
                value={formik.values.titulo}
              />
              {formik.errors.titulo && <div className="text-danger">{formik.errors.titulo}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">Descripcion</label>
              <textarea
                className="form-control"
                id="descripcion"
                name="descripcion"
                onChange={(e) => {
                  formik.handleChange(e);
                  setPreviewData({
                    ...previewData,
                    descripcion: e.target.value,
                  });
                }}
                value={formik.values.descripcion}
                maxLength={200} // Establece la longitud máxima de caracteres
                rows={4} // Establece el número de filas (altura)
                cols={50} // Establece el número de columnas (ancho)
              />
              {formik.errors.descripcion && <div className="text-danger">{formik.errors.descripcion}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="categoria" className="form-label">Categoria</label>
              <select
                className="form-select"
                id="categoria"
                name="categoria"
                onChange={(e) => {
                  formik.handleChange(e);
                  setPreviewData({
                    ...previewData,
                    categoria: e.target.value,
                  });
                }}
                value={formik.values.categoria}
              >
                <option value="" disabled>Seleccione una opción</option>
                <option value="Motor">Motor</option>
                <option value="Mesa">Mesa</option>
                <option value="Equipo">Equipo</option>
              </select>
              {formik.errors.categoria && <div className="text-danger">{formik.errors.categoria}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="equipo" className="form-label">Equipo</label>
              <input
                type="text"
                className="form-control"
                id="equipo"
                name="equipo"
                onChange={(e) => {
                  formik.handleChange(e);
                  setPreviewData({
                    ...previewData,
                    equipo: e.target.value,
                  });
                }}
                value={formik.values.equipo}
              />
              {formik.errors.equipo && <div className="text-danger">{formik.errors.equipo}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="link" className="form-label">Link</label>
              <input
                type="text"
                className="form-control"
                id="link"
                name="link"
                onChange={(e) => {
                  formik.handleChange(e);
                  setPreviewData({
                    ...previewData,
                    link: e.target.value,
                  });
                }}
                value={formik.values.link}
              />
              {formik.errors.link && <div className="text-danger">{formik.errors.link}</div>}
            </div>

            <button
              type="submit"
              className="btn btn-danger mb-3"
              onClick={() => formik.handleSubmit()}
            >
              Guardar Tarjeta
            </button>
          </form>
        </div>
        <div className="col-md-6">
          {/* Vista previa de la tarjeta */}
          {previewData && (
            <div className="card">
              <img src={previewData.img} className="card-img-top" alt="Imagen" />
              <div className="card-body">
                <h5 className="card-title">{previewData.titulo}</h5>
                <p className="card-text">{previewData.descripcion}</p>
                <p className="card-text">Categoría: {previewData.categoria}</p>
                <p className="card-text">Equipo: {previewData.equipo}</p>
                <a href={previewData.link} className="btn btn-primary">Ir al enlace</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Create;
