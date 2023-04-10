import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IFrom, TFormProps } from '../../types/types';

import './form.scss';

const Form = (props: TFormProps) => {
  const [success, setSuccess] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFrom>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<IFrom> = ({
    name,
    birthday,
    continent,
    skills,
    gender,
    picture,
  }) => {
    setSuccess(true);
    props.addProfile(name, birthday, continent, skills, gender, URL.createObjectURL(picture[0]));
    setTimeout(() => {
      setSuccess(false);
      reset();
    }, 1000);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Name"
        {...register('name', {
          required: 'This field is required',
          pattern: {
            value: /^[A-ZА-ЯЁ][a-zа-яё]+$/,
            message: 'The name must start with a capital letter',
          },
          minLength: {
            value: 2,
            message: 'Name must contain at least 2 characters',
          },
        })}
      />
      {errors.name?.message && <span className="form__error">{errors.name?.message}</span>}

      <label htmlFor="birthday">Birthday</label>
      <input
        id="birthday"
        type="date"
        {...register('birthday', {
          required: 'This field is required',
          validate: (value) => Date.parse(value) < Date.now(),
        })}
      />
      {errors.birthday && (
        <span className="form__error">
          {errors.birthday?.message || 'Date of birth no later than today'}
        </span>
      )}

      <label htmlFor="continent">Continent</label>
      <select
        id="continent"
        {...register('continent', {
          required: 'This field is required',
          validate: (value) => value !== '',
        })}
      >
        <option></option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
      </select>
      {errors.continent && <span className="form__error">This field is required</span>}

      <legend>Skills</legend>
      <label htmlFor="html">
        <input
          id="html"
          type="checkbox"
          value="html"
          {...register('skills', { required: 'This field is required' })}
        />
        HTML
      </label>

      <label htmlFor="css">
        <input
          id="css"
          type="checkbox"
          value="css"
          {...register('skills', { required: 'This field is required' })}
        />
        CSS
      </label>

      <label htmlFor="js">
        <input
          id="js"
          type="checkbox"
          value="js"
          {...register('skills', { required: 'This field is required' })}
        />
        JavaScript
      </label>
      {errors.skills?.message && <span className="form__error">{errors.skills?.message}</span>}

      <legend>Gender</legend>
      <label htmlFor="male">
        <input
          id="male"
          type="radio"
          value="male"
          {...register('gender', { required: 'This field is required' })}
        />
        Male
      </label>

      <label htmlFor="female">
        <input
          id="female"
          type="radio"
          value="female"
          {...register('gender', { required: 'This field is required' })}
        />
        Female
      </label>
      {errors.gender?.message && <span className="form__error">{errors.gender?.message}</span>}

      <label htmlFor="picture">Picture</label>
      <input
        id="picture"
        type="file"
        accept="image/*"
        {...register('picture', { required: 'This field is required' })}
      />
      {errors.picture?.message && <span className="form__error">{errors.picture?.message}</span>}

      <button className="form__submit" disabled={success}>
        Submit
      </button>
      {success && <span className="form__success">Successfuly</span>}
    </form>
  );
};

export default Form;
