import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import '../../../theme/components/Widgets/ListaAnexosWidget.css';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const MAX_FILES = 5; // Limite de arquivos

const ListaAnexosWidget = ({
  id,
  value,
  onChange,
  required,
  disabled,
  error: externalError,
  placeholder,
  title,
  description,
}) => {
  const [touched, setTouched] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [fileError, setFileError] = useState(externalError);
  const inputRef = useRef(null);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result || '';
        const [, contentType, encoding, base64] =
          typeof result === 'string'
            ? result.match(/^data:(.*);(.*),(.*)$/)
            : [];
        resolve({
          filename: file.name,
          'content-type':
            contentType || file.type || 'application/octet-stream',
          encoding: encoding || 'base64', // <-- add this
          data: base64 || '',
          size: file.size,
        });
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });

  const normalizeExisting = (item) => {
    if (!item) return { name: '', size: 0 };
    return {
      name: item.name || item.filename || '',
      size: item.size || item.filesize || 0,
    };
  };

  const handleFilesChange = async (e) => {
    const files = Array.from(e.target.files);
    await addFiles(files);
  };

  const addFiles = async (files) => {
    const currentFiles = Array.isArray(value) ? value.filter(Boolean) : [];

    const filteredFiles = files.filter((newFile) => {
      const { name: newName, size: newSize } = {
        name: newFile.name,
        size: newFile.size,
      };
      return !currentFiles.some((existing) => {
        const { name, size } = normalizeExisting(existing);
        return name === newName && size === newSize;
      });
    });

    if (currentFiles.length + filteredFiles.length > MAX_FILES) {
      setFileError(`Você pode adicionar no máximo ${MAX_FILES} arquivos.`);
      if (inputRef.current) inputRef.current.value = '';
      return;
    }

    const tooBig = filteredFiles.find((file) => file.size > MAX_FILE_SIZE);
    if (tooBig) {
      setFileError(
        `O arquivo "${tooBig.name}" excede o tamanho máximo de 5 MB.`,
      );
      if (inputRef.current) inputRef.current.value = '';
      return;
    }

    if (filteredFiles.length > 0) {
      try {
        const attachments = await Promise.all(filteredFiles.map(toBase64));
        const newValue = [...currentFiles, ...attachments];
        onChange(id, newValue);
        setTouched(true);
        setFileError(null);
      } catch (err) {
        setFileError('Não foi possível ler os arquivos. Tente novamente.');
      }
    }
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setDragActive(false);
    if (disabled) return;
    const files = Array.from(e.dataTransfer.files);
    await addFiles(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (!disabled) setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleRemove = (index) => {
    const newValue = [...(value || [])];
    newValue.splice(index, 1);
    onChange(id, newValue);
  };

  return (
    <div
      className={`field lista-anexos-widget ${touched && fileError ? 'error' : ''}`}
    >
      {title && (
        <label className="lista-anexos-titulo" htmlFor={id}>
          {title}
          {required && ' *'}
        </label>
      )}
      <div className="lista-anexos-input-wrapper">
        <div
          className={`lista-anexos-dropzone${dragActive ? ' drag-active' : ''}`}
          aria-label="Solte arquivos aqui para anexar"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => {
            if (!disabled && inputRef.current) {
              inputRef.current.click();
            }
          }}
          onKeyDown={(e) => {
            if (
              !disabled &&
              (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar')
            ) {
              e.preventDefault();
              if (inputRef.current) inputRef.current.click();
            }
          }}
          role="button"
          tabIndex={0}
          style={{
            cursor: disabled ? 'not-allowed' : 'pointer',
            display: 'block',
          }}
        >
          Solte um arquivo aqui para enviar um novo arquivo
        </div>
        <input
          ref={inputRef}
          id={id}
          name={id}
          type="file"
          multiple
          disabled={disabled}
          placeholder={placeholder}
          onChange={handleFilesChange}
          className="lista-anexos-input"
          style={{ display: 'none' }}
        />
        <label
          htmlFor={id}
          className="lista-anexos-custom-btn"
          style={{ userSelect: 'none' }}
        >
          Escolher arquivos
        </label>
        <div className="lista-anexos-list-wrapper">
          {value && value.length > 0 && (
            <ul className="lista-anexos-list">
              {value.map((file, idx) => (
                <li key={idx} className="lista-anexos-item">
                  {file.name || file.filename || 'Arquivo'}
                  <button
                    type="button"
                    onClick={() => handleRemove(idx)}
                    className="lista-anexos-remove"
                    disabled={disabled}
                    aria-label="Remover anexo"
                    onMouseUp={(e) => e.currentTarget.blur()}
                  >
                    <svg
                      className="icon-trash-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      width="16"
                      height="16"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        fill="currentColor"
                        d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {fileError && fileError.length > 0 && (
          <div className="lista-anexos-error ui basic label">{fileError}</div>
        )}
        {description && <small>{description}</small>}
      </div>
    </div>
  );
};

ListaAnexosWidget.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  placeholder: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ListaAnexosWidget;
