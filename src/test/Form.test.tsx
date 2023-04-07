import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../components/form/Form';

const addProfile = (
  name: string,
  birthday: string,
  continent: string,
  skills: string[],
  gender: string,
  picture: string
): void => {};

describe('Form component', () => {
  test('renders all form fields', () => {
    render(<Form addProfile={addProfile} />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Birthday')).toBeInTheDocument();
    expect(screen.getByLabelText('Continent')).toBeInTheDocument();
    expect(screen.getByLabelText('HTML')).toBeInTheDocument();
    expect(screen.getByLabelText('CSS')).toBeInTheDocument();
    expect(screen.getByLabelText('JavaScript')).toBeInTheDocument();
    expect(screen.getByLabelText('Male')).toBeInTheDocument();
    expect(screen.getByLabelText('Female')).toBeInTheDocument();
    expect(screen.getByLabelText('Picture')).toBeInTheDocument();
  });

  test('validates form fields correctly', async () => {
    render(<Form addProfile={addProfile} />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    const nameInput = screen.getByLabelText('Name');
    await userEvent.type(nameInput, 'jane');
    fireEvent.click(submitButton);
    expect(
      await screen.findByText('The name must start with a capital letter')
    ).toBeInTheDocument();

    const birthdayInput = screen.getByLabelText('Birthday');
    await userEvent.type(birthdayInput, '2025-01-01');
    fireEvent.click(submitButton);
    expect(await screen.findByText('Date of birth no later than today')).toBeInTheDocument();

    fireEvent.click(submitButton);
    expect(await screen.findAllByText('This field is required')).toHaveLength(4);

    await userEvent.type(nameInput, '{selectall}Jane');
    await userEvent.type(birthdayInput, '{selectall}2000-01-01');
    fireEvent.change(screen.getByLabelText('Continent'), { target: { value: 'Europe' } });
    fireEvent.click(screen.getByLabelText('HTML'));
    fireEvent.click(screen.getByLabelText('Female'));
    const pictureInput = screen.getByLabelText('Picture');
    Object.defineProperty(pictureInput, 'files', {
      value: [new File(['test'], 'chucknorris.png', { type: 'image/png' })],
    });
    fireEvent.click(submitButton);
  });
});
