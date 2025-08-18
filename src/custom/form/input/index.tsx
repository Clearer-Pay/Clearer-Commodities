import {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  HTMLInputTypeAttribute,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
// import { PiEyeLight, PiEyeSlash } from 'react-icons/pi';
import './index.css';
// import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';
import useClickOutside from '../../../hooks/useClickOutside';
import { color } from 'framer-motion';

interface InputTempProps {
  label?: string;
  name?: string;
  accept?: string;
  multiple?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  id?: string;
  inputType?: HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  defaultValue?: any;
  value?: any;
  children?: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onChangeT?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlurT?: FocusEventHandler<HTMLTextAreaElement> | undefined;
  onClick?: (row: any) => void;
  fieldClass?: string;
  disabled?: boolean;
  autoComplete?: string;
  errors?: any;
  touched?: any;
  handlePasswordShowHide?: any;
  classNames?: string;
  setFieldValue?: any;
  showDropDownState?: boolean;
  data?: any;
  svgIconComponent?: React.ReactNode;
  maxLength?: number;
  onDrop?: (e: React.DragEvent<HTMLInputElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLInputElement>) => void;
  onDragLeave?: (e: React.DragEvent<HTMLInputElement>) => void;

}

export const InputTemp = forwardRef<HTMLInputElement, InputTempProps>(
  (
    {
      label,
      name,
      accept,
      multiple,
      id,
      inputType,
      placeholder,
      defaultValue,
      value,
      onChange,
      onBlur,
      onFocus,
      disabled,
      errors,
      touched,
      classNames,
      svgIconComponent,
      onDragOver,
      onDrop,
      onDragLeave,
    },
    ref
  ) => {
  return (
    <div className="field">
      {label && <label>
        <h4>{label}</h4>
      </label>}
      <div className={classNames}>
        {svgIconComponent && <span className="icon-wrapper">
          {svgIconComponent}
        </span>}
        <input
          autoComplete={'off'}
          disabled={disabled}
          placeholder={placeholder}
          type={inputType}
          id={id}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          accept={accept}
          multiple={multiple || false}
          ref={ref}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onDragLeave={onDragLeave}
        />
      </div>
      {(name && errors[name] && touched[name]) ? (
        <p className="error-message">{String(errors[name])}</p>
      ) : null}
    </div>
  );
})

// export const PasswordInputTemp = ({
//   label,
//   name,
//   id,
//   placeholder,
//   defaultValue,
//   value,
//   onChange,
//   onBlur,
//   disabled,
//   errors,
//   touched,
// }: InputTempProps) => {
//   const [showPassword, setShowPassword] = useState(false);
//   return (
//     <div className="field">
// {
//   label && <label>
//     <h4>{label}</h4>
//   </label>
// }
//       <div className="pass">
//         <input
//           autoComplete="off"
//           disabled={disabled}
//           placeholder={placeholder}
//           type={showPassword ? 'text' : 'password'}
//           id={`${id}Input`}
//           name={name}
//           value={value}
//           defaultValue={defaultValue}
//           onBlur={onBlur}
//           onChange={onChange}
//           className="custom-inputs"
//         />
//         <button
//           type="button"
//           id={id}
//           className="show-hide"
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ? <PiEyeLight /> : <PiEyeSlash />}
//         </button>
//       </div>
//       {errors[name || ''] && touched[name || ''] && (
//         <p className="error-message">{String(errors[name || ''])}</p>
//       )}
//     </div>
//   );
// };

export const TextAreaTemp = ({
  label,
  name,
  id,
  placeholder,
  defaultValue,
  value,
  onChangeT,
  onBlurT,
  disabled,
  errors,
  touched,
  classNames,
  maxLength,
}: InputTempProps) => {
  const [charCount, setCharCount] = useState(value?.length || 0);
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
    onChangeT && onChangeT(e);
  };
  return (
    <div className="field">
      {label && <label>
        <h4>{label}</h4>
        {maxLength && <p style={charCount > maxLength ? { color: 'red' } : {}}>{charCount}/{maxLength}</p>}
      </label>}
      <textarea
        autoComplete={'off'}
        disabled={disabled}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onBlur={onBlurT}
        onChange={handleInputChange}
        className={classNames}
      />
      {(name && errors[name] && touched[name]) ? (
        <p className="error-message">{String(errors[name])}</p>
      ) : null}
    </div>
  );
};

// export const PhoneNumberTemp = ({
//   label,
//   name,
//   id,
//   defaultValue,
//   value,
//   onBlur,
//   disabled,
//   errors,
//   touched,
//   setFieldValue,
// }: InputTempProps) => {
//   return (
//     <div className="field phone-input-cont">
// {
//   label && <label>
//     <h4>{label}</h4>
//   </label>
// }
//       <PhoneInput
//         autoComplete={'off'}
//         disabled={disabled}
//         placeholder="Enter phone number"
//         id={id}
//         name={name}
//         className={'phone-input-cont-2'}
//         value={value}
//         defaultValue={defaultValue}
//         onBlur={onBlur}
//         onChange={(phoneNumber) => setFieldValue(name, phoneNumber)}
//         defaultCountry="NG"
//       />
// {
//   (name && errors[name] && touched[name]) ? (
//     <p className="error-message">{String(errors[name])}</p>
//   ) : null
// }
//     </div>
//   );
// };

export const SelectTemp = ({
  label,
  name,
  accept,
  multiple,
  id,
  inputType,
  placeholder,
  defaultValue,
  value,
  onChange,
  onBlur,
  disabled,
  errors,
  touched,
  classNames,
  data,
  onClick,
  svgIconComponent,
}: InputTempProps) => {
  const [inputValue, setInputValue] = useState(value);
  const selectRef = useRef<HTMLDivElement>(null);
  const [showRows, setShowRows] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputFocused, setInputFocused] = useState(false);


  const handleOutsideClick = () => {
    setShowRows(false);
    setInputValue(value);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useClickOutside(selectRef, ()=> setShowRows(false));

  const handleIconClick = () => {
    if (inputRef.current) {
      if (inputFocused) {
        inputRef.current.blur();
        setInputFocused(false);
      } else {
        inputRef.current.focus();
        setInputFocused(true);
      }
    }
    setShowRows((prev) => !prev);
  };


  return (
    <div ref={selectRef} className="dropdown-section field">
      {label && (
        <label>
          <h4>{label}</h4>
        </label>
      )}

      <div className={classNames}>
        <input
          autoComplete={'off'}
          disabled={disabled}
          placeholder={placeholder}
          type={inputType}
          id={id}
          name={name}
          value={inputValue}
          defaultValue={defaultValue}
          style={{ opacity: disabled ? .5 : 1 }}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            }
            setInputValue(e.target.value);
          }}
          onClick={() => setShowRows(true)}
          className={classNames}
          accept={accept}
          multiple={multiple || false}
        />
        {svgIconComponent && <span onClick={handleIconClick} className="icon-wrapper">
          {svgIconComponent}
        </span>}
      </div>
      {(name && errors[name as string] && touched[name as string]) ? (
        <p className="error-message">{String(errors[name])}</p>
      ) : null}
      <div
        data-visible={showRows ? 'true' : 'false'}
        id="states-list-1"
        className="dropdown-list"
      >
        {showRows && data?.length > 0 && (<ul>
          {data?.map((row: any, index: number) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => {
                  if (onClick) {
                    onClick(row);
                  }
                  setShowRows(false);
                  setInputValue(row.name);
                  
                }}
              >
                {row?.name}
              </button>
            </li>
          ))}
        </ul>)}
      </div>
    </div>
  );
};

export const SelectTempWithFlag = ({
  label,
  name,
  accept,
  multiple,
  id,
  inputType,
  placeholder,
  defaultValue,
  value,
  onChange,
  onBlur,
  disabled,
  errors,
  touched,
  classNames,
  data,
  onClick,
  svgIconComponent,
}: InputTempProps) => {
  const [inputValue, setInputValue] = useState(value);
  const stateRef = useRef<HTMLDivElement>(null);
  const [showRows, setShowRows] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputFocused, setInputFocused] = useState(false);
  const [countryCode, setCountryCode] = useState<string>('');

  const handleOutsideClick = () => {
    setShowRows(false);
    setInputValue(value);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useClickOutside(stateRef, handleOutsideClick);

  const handleIconClick = () => {
    if (inputRef.current) {
      if (inputFocused) {
        inputRef.current.blur();
        setInputFocused(false);
      } else {
        inputRef.current.focus();
        setInputFocused(true);
      }
    }
    setShowRows((prev) => !prev);
  };

  const filteredData = data?.filter((row: any) =>
    row.name.toLowerCase().startsWith(inputValue.toLowerCase())
  );

  return (
    <div className="dropdown-section field" ref={stateRef}>
      {label && (
        <label>
          <h4>{label}</h4>
        </label>
      )}

      <div className={classNames}>
        <span onClick={handleIconClick} className="icon-wrapper">
          {countryCode === '' && svgIconComponent}
          {countryCode && (
            <img
              alt={countryCode}
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
            />
          )}
        </span>
        <input
          ref={inputRef}
          autoComplete={'off'}
          disabled={disabled}
          placeholder={placeholder}
          type={inputType}
          id={id}
          name={name}
          value={inputValue}
          defaultValue={defaultValue}
          style={{ opacity: disabled ? 0.5 : 1 }}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            }
            const matched = filteredData.find((data: { name: string; code: string; }) => data.name.toLowerCase() === e.target.value.toLowerCase())
            if (matched) {
              setCountryCode(matched.code)
            } else {
              setCountryCode('')
            }

            setInputValue(e.target.value);
          }}
          onClick={() => setShowRows(true)}
          className={classNames}
          accept={accept}
          multiple={multiple || false}
        />
      </div>

      {name && errors[name as string] && touched[name as string] ? (
        <p className="error-message">{String(errors[name])}</p>
      ) : null}

      <div
        data-visible={showRows ? 'true' : 'false'}
        id="states-list-1"
        className="dropdown-list"
      >
        {showRows && filteredData?.length > 0 && (
          <ul>
            {filteredData.map((row: any, index: number) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => {
                    if (onClick) {
                      onClick(row);
                    }
                    setShowRows(false);
                    setInputValue(row.name);
                    setCountryCode(row.code);
                  }}
                >
                  {row.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};


export default SelectTemp;
