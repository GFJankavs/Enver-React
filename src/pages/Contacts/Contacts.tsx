import { FieldValues, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './Contacts.scss';

import buttonStyles from '../../styles/Buttons.module.scss';

const Contacts = () => {
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm();

  const submitHandler = (data: FieldValues) => {
    toast.success('Mensaje enviado. ¡Gracias!', {
      position: 'bottom-right',
    });
    reset();
  };

  return (
    <div className="contacts">
      <div className="contacts__container">
        <div className="contacts__text-container">
          <h1 className="heading__1">¡Hablemos!</h1>
          <p>Si estás interesado en mi trabajo o tienes alguna inquietud, no dudes en escribirme!</p>
        </div>
        <form
          className="form"
          onSubmit={handleSubmit(submitHandler)}
        >
          <label
            htmlFor="name"
            className="form__input-container"
          >
            <span
              className="form__input-text"
            >
              Tu nombre
            </span>
            <input
              type="text"
              {...register('name', {
                required: true,
                pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
              })}
              placeholder="Nombre"
              id="name"
              className="form__input"
            />
          </label>
          {errors.name?.type === 'required' && (
            <span className="form__error">Este campo de entrada es obligatorio</span>
          )}
          {errors.name?.type === 'pattern' && (
            <span className="form__error">Por favor ingrese un nombre valido</span>
          )}
          <label
            htmlFor="email"
            className="form__input-container"
          >
            <span
              className="form__input-text"
            >
              Tu E-mail
            </span>
            <input
              type="email"
              {...register('email', {
                required: true,
                pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
              })}
              placeholder="Ejemplo@hotmail.com"
              id="email"
              className="form__input"
            />
          </label>
          {errors.email?.type === 'required' && (
            <span className="form__error">Este campo de entrada es obligatorio</span>
          )}
          {errors.email?.type === 'pattern' && (
            <span className="form__error">Por favor introduzca una dirección de correo electrónico válida</span>
          )}
          <label
            htmlFor="text"
            className="form__input-container"
          >
            <span
              className="form__input-text"
            >
              Tu mensaje
            </span>
            <textarea
              placeholder="Hey..."
              id="text"
              cols={30}
              rows={10}
              className="form__input"
              {...register('message', {
                required: true,
                minLength: 10,
              })}
            />
          </label>
          {errors.message?.type === 'required' && (
            <span className="form__error">Este campo de entrada es obligatorio</span>
          )}
          {errors.message?.type === 'minLength' && (
            <span className="form__error">Este mensaje es demasiado corto.</span>
          )}
          <button
            className={`${buttonStyles.button} ${buttonStyles.navigate}`}
          >
            Enviar
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contacts;
