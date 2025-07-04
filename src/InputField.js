export function FormGroup({children}) {
  return (
    <div className="form-box">
      {children}
    </div>
  )
}


export default function InputField({label, type='text', name, value, onChange, ...rest}) {
  return (
    <label>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </label>
  )
}