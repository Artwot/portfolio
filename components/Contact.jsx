import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Contact = () => {
  const validate = () => {};

  const handleSubmit = (values) => {
    console.log("Perfectirijillo");
    console.log(values);
  };

  return (
    <div
      id="contact"
      className="w-full h-max rounded-2xl relative top-[66px] md:top-[80px] p-8 mb-5 lg:px-20 "
    >
      <h2 className="subtitle">Contacto</h2>
      <p className="paragraph">
        Si está buscando un desarrollador, tiene alguna pregunta o solo desea
        conectar, por favor, deje un mensaje.
      </p>
      <div className="contact-container bg-slate-300 lg:flex lg:w-full lg:image-gradient lg:py-20 rounded-2xl h-3/5">
        <div className="medio-hero hidden lg:flex lg:w-1/2 lg:relative ">
          <Image
            src="/images/White-in-Basic10.png"
            alt="Contacto"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="aqui-fromulario lg:w-1/2 lg:flex lg:justify-center items-center">
          {/* Form */}
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validate={validate}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form className="formulario flex flex-col px-8 py-4 lg:px-12 lg:w-full ">
              <label className="text-slate-900 font-light">Nombre</label>
              <Field
                name="name"
                type="text"
                placeholder="Escriba su nombre"
                className="form"
              />
              <ErrorMessage name="name" />
              <label className="text-slate-900 font-light">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="john@doe.com"
                className="form"
              />
              <ErrorMessage name="email" />
              <label className="text-slate-900 font-light">Asunto</label>
              <Field
                name="subject"
                type="text"
                placeholder="Es usted muy guapo"
                className="form"
              />
              <ErrorMessage name="subject" />
              <label className="text-slate-900 font-light">Mensaje</label>
              <Field
                name="message"
                as="textarea"
                placeholder="Es usted muy guapo"
                className="form"
              />
              <ErrorMessage name="name" />
              <button
                type="submit"
                className="bg-slate-900 text-white hover:bg-slate-900 hover:text-white p-2 rounded-lg"
              >
                Enviar
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
