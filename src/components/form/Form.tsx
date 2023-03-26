import { Component, createRef } from 'react';

import validateFirstName from './validation/validateFirstName';
import validateBirthday from './validation/validateBirthday';
import validateContinent from './validation/validateContinent';
import validateSkills from './validation/validateSkills';
import validateGender from './validation/validateGender';
import validateFile from './validation/validateFile';
import { IFormProps, IFormState } from '../../types/types';

import './form.scss';

class Form extends Component<IFormProps, IFormState> {
  state = {
    firstNameError: false,
    birthdayError: false,
    continentError: false,
    skillsError: false,
    genderError: false,
    fileError: false,
    success: false,
    disabledSubmit: false,
  };

  firstNameRef: React.RefObject<HTMLInputElement> = createRef();
  birthdayRef: React.RefObject<HTMLInputElement> = createRef();
  continentRef: React.RefObject<HTMLSelectElement> = createRef();
  skillsHTMLRef: React.RefObject<HTMLInputElement> = createRef();
  skillsCSSRef: React.RefObject<HTMLInputElement> = createRef();
  skillsJSRef: React.RefObject<HTMLInputElement> = createRef();
  genderMaleRef: React.RefObject<HTMLInputElement> = createRef();
  genderFemaleRef: React.RefObject<HTMLInputElement> = createRef();
  fileRef: React.RefObject<HTMLInputElement> = createRef();

  resetError = () => {
    this.setState({
      firstNameError: false,
      birthdayError: false,
      continentError: false,
      skillsError: false,
      genderError: false,
      fileError: false,
      success: false,
    });
  };

  handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    this.resetError();
    const firstNameError = validateFirstName(this.firstNameRef);
    const birthdayError = validateBirthday(this.birthdayRef);
    const continentError = validateContinent(this.continentRef);
    const skillsError = validateSkills(this.skillsHTMLRef, this.skillsCSSRef, this.skillsJSRef);
    const genderError = validateGender(this.genderMaleRef, this.genderFemaleRef);
    const fileError = validateFile(this.fileRef);
    this.setState({
      firstNameError,
      birthdayError,
      continentError,
      skillsError,
      genderError,
      fileError,
    });

    if (
      firstNameError ||
      birthdayError ||
      continentError ||
      skillsError ||
      genderError ||
      fileError
    ) {
      return;
    }
    this.setState({ success: true, disabledSubmit: true });
    const firstName = this.firstNameRef.current?.value as string;
    const birthday = this.birthdayRef.current?.value as string;
    const continent = this.continentRef.current?.value as string;
    const skills = [
      this.skillsHTMLRef.current?.checked ? 'HTML' : '',
      this.skillsCSSRef.current?.checked ? 'CSS' : '',
      this.skillsJSRef.current?.checked ? 'JS' : '',
    ].filter((el) => el !== '');
    const gender = (this.genderFemaleRef.current?.checked as boolean) ? 'female' : 'male';
    const files = this.fileRef.current?.files as FileList;
    const image = URL.createObjectURL(files[0]);

    this.props.addProfile(firstName, birthday, continent, skills, gender, image);

    setTimeout(() => {
      const target = e.target as HTMLFormElement;
      target.reset();
      this.setState({ success: false, disabledSubmit: false });
    }, 1000);
  };

  render(): JSX.Element {
    const {
      firstNameError,
      birthdayError,
      continentError,
      skillsError,
      genderError,
      fileError,
      success,
      disabledSubmit,
    } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Name" name="first" ref={this.firstNameRef} />
        {firstNameError ? <span className="form__error">Invalid input</span> : null}

        <label htmlFor="birthday">Birthday</label>
        <input id="birthday" type="date" name="date" ref={this.birthdayRef} />
        {birthdayError ? <span className="form__error">Invalid input</span> : null}

        <label htmlFor="continent">Continent</label>
        <select name="continent" id="continent" ref={this.continentRef}>
          <option></option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
        {continentError ? <span className="form__error">Invalid input</span> : null}

        <legend>Skills</legend>
        <label htmlFor="html">
          <input id="html" type="checkbox" value="html" name="skills" ref={this.skillsHTMLRef} />
          HTML
        </label>

        <label htmlFor="css">
          <input id="css" type="checkbox" value="css" name="skills" ref={this.skillsCSSRef} />
          CSS
        </label>

        <label htmlFor="js">
          <input id="js" type="checkbox" value="js" name="skills" ref={this.skillsJSRef} />
          JavaScript
        </label>
        {skillsError ? <span className="form__error">Invalid input</span> : null}

        <legend>Gender</legend>
        <label htmlFor="male">
          <input id="male" type="radio" name="gender" ref={this.genderMaleRef} />
          Male
        </label>

        <label htmlFor="female">
          <input id="female" type="radio" name="gender" ref={this.genderFemaleRef} />
          Female
        </label>
        {genderError ? <span className="form__error">Invalid input</span> : null}

        <label htmlFor="picture">Picture</label>
        <input id="picture" type="file" accept="image/*" ref={this.fileRef} />
        {fileError ? <span className="form__error">Invalid input</span> : null}

        <button className="form__submit" disabled={disabledSubmit}>
          Submit
        </button>
        {success ? <span className="form__success">Successfuly</span> : null}
      </form>
    );
  }
}

export default Form;
