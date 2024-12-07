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
    <div className="contato-wrapper">
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
      <div>
        {fax && (
          <span className="fax">
            <strong>Fax: </strong>
            {fax}
          </span>
        )}
      </div>
      <div>
        {telefone_fax && (
          <span className="telefone-fax">
            <strong>Telefone/Fax: </strong>
            {telefone_fax}
          </span>
        )}
      </div>
      <div>
        {skype && (
          <span className="skype">
            <strong>Skype: </strong>
            {skype}
          </span>
        )}
      </div>
      <div>
        {voip && (
          <span className="voip">
            <strong>VOIP: </strong>
            {voip}
          </span>
        )}
      </div>
      <div>
        {telefones && (
          <span className="telefones">
            <strong>Telefones: </strong>
            {telefones}
          </span>
        )}
      </div>
      <div>
        {link_whatsapp && (
          <span className="link-whatsapp">
            <strong>Whatsapp: </strong>
            {link_whatsapp}
          </span>
        )}
      </div>
      <div>
        {horarios && (
          <span className="horarios">
            <strong>Horarios: </strong>
            {horarios}
          </span>
        )}
      </div>
    </div>
  );
};

export default Contato;
