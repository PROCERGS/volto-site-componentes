import React from 'react';

const formatPhoneNumber = (phoneNumber) => {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');

  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return phoneNumber;
};

const Contato = ({ content }) => {
  const {
    email,
    fax,
    telefone_fax,
    tel_comercial,
    tel_celular,
    voip,
    skype,
    whatsapp,
    url,
    horarios,
    link_whatsapp,
    telefones,
  } = content;

  return (
    <div className="telefone-wrapper">
      <div>
        {tel_comercial && (
          <span className="telefone-tel_comercial">
            <strong>Telefone Comercial: </strong>
            {formatPhoneNumber(tel_comercial)}
          </span>
        )}
      </div>
      <div>
        {tel_celular && (
          <span className="telefone-tel_celular">
            <strong>Telefone Celular: </strong>
            {formatPhoneNumber(tel_celular)}
          </span>
        )}
      </div>
      <div>
        {url && (
          <span className="telefone-url">
            <strong>URL: </strong>
            <a href={url}>{url}</a>
          </span>
        )}
      </div>
      <div>
        {email && (
          <span className="telefone-email">
            <strong>E-mail: </strong>
            {email}
          </span>
        )}
      </div>
      <div>
        {whatsapp && (
          <span className="telefone-whatsapp">
            <strong>WhatsApp: </strong>
            {whatsapp}
          </span>
        )}
      </div>
    </div>
  );
};

export default Contato;
