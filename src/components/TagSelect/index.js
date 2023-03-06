import { React } from 'react'
import { useRecoilState } from "recoil";
import { tagSelect } from "../../atoms";

// Material ui Imports
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

export default function TagSelect(props) {
  const [tag, setTag] = useRecoilState(tagSelect);

  const handleChange = (event) => {
    setTag(event.target.value)
  };

  

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel >Tags</InputLabel>
        <Select
          label="Tags"
          value={tag}
          onChange={handleChange}
          MenuProps={{
            transitionDuration: 0,
          }} 
        >
          {props.tags.map((element) => (
            <MenuItem
              key={element}
              value={element}
            >
              {element}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
