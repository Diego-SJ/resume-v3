import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { sendUserForm } from 'src/redux/appSlice';
import { RESPONSE } from 'src/constants/http';
import { useTranslation } from 'react-i18next';
import { gaSendEvent } from 'src/config/google';
import ButtonPrimary from 'src/components/common/ButtonPrimary';
import './ContactForm.scss';

const ContactForm = () => {
  const { t } = useTranslation();
  const { addToast } = useToasts();
  const [dataForm, setDataform] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const updateDataForm = (e) => {
    setDataform({ ...dataForm, [e.target.name]: e.target.value });
  };

  const showToast = (message, type) => {
    addToast(`${t(message)}`, {
      appearance: type,
      autoDismiss: true,
      autoDismissTimeout: 5000,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    gaSendEvent({ category: 'contact', action: 'Send contact form' });
    setLoading(true);

    const result = await sendUserForm(dataForm);
    if (result === RESPONSE.SUCCESS) setDataform(initialFormState);
    showToast(`CONTACT.FORM.MESSAGES.${result}`, result);

    setLoading(false);
  };

  return (
    <form id="contactForm" className="form" onSubmit={(e) => sendEmail(e)}>
      <h1 className="secondary">
        <span>{t('CONTACT.FORM.getInTouch')}</span>
      </h1>
      <div className="form__group">
        <input
          name="sender"
          type="text"
          onChange={(e) => updateDataForm(e)}
          value={dataForm.sender}
          className="form__input"
          required
        />
        <label htmlFor="name">{t('CONTACT.FORM.name')} *</label>
      </div>
      <div className="form__group">
        <input
          name="email"
          type="email"
          onChange={(e) => updateDataForm(e)}
          value={dataForm.email}
          className="form__input"
          required
        />
        <label htmlFor="name">{t('CONTACT.FORM.email')} *</label>
      </div>
      <div className="form__group">
        <input
          name="subject"
          type="text"
          onChange={(e) => updateDataForm(e)}
          value={dataForm.subject}
          className="form__input"
          required
        />
        <label htmlFor="subject">{t('CONTACT.FORM.subject')} *</label>
      </div>
      <div className="form__group">
        <textarea
          name="message"
          onChange={(e) => updateDataForm(e)}
          value={dataForm.message}
          className="form__input-ta"
          required
        />
        <label htmlFor="message">{t('CONTACT.FORM.message')} *</label>
      </div>
      <ButtonPrimary loading={loading} type="submit" content={`${t('CONTACT.FORM.send')}`} />
    </form>
  );
};

const initialFormState = {
  sender: '',
  email: '',
  subject: '',
  message: '',
};

export default ContactForm;
