import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from 'react';

export type SearchTextBoxProps = {
  value?: string;
  id: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  inputClassName?: string;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  readOnly?: boolean;
  placeHolder?: string;
  cursor?: string;
};

function SearchTextBox(props: SearchTextBoxProps) {
  return (
    <div>
      {props.label && (
        <label htmlFor={props.id} className='mb-2 text-md text-white'>
          {props.label}
        </label>
      )}
      <input
        value={props.value}
        type={props.type}
        id={props.id}
        className={`text-left mt-2 bg-[#29292956] block p-4 w-full text-sm text-white rounded-lg border border-gray-300 focus:outline-none text-white cursor-pointer hover:border-purple-500 focus:border-purple-700 ${
          props.inputClassName ?? ''
        }`}
        placeholder={props.placeHolder}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onChange={props.onChange}
        readOnly={props.readOnly}
        style={{
          cursor: props.cursor,
        }}
      />
    </div>
  );
}

export default SearchTextBox;
