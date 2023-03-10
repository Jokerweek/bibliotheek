import { React } from 'react'

// Material ui Imports
import { TextField, Autocomplete } from '@mui/material';

export default function TextSelect(props) {

  const handleChange = (e, value) => {
    props.callBack(value)
  }

  return (
    <Autocomplete
      sx={{ bgcolor: '#ffffff' }}
      value={props.value}
      autoHighlight
      autoSelect
      key={props.disabled}
      loading={true}
      disabled={props.disabled}
      disablePortal
      isOptionEqualToValue={(option, value) => option.name === value.name}
      id={props.label}
      options={props.data}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  )
}