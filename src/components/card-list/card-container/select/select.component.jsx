import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({sortBy, setSortBy, contacts, setContacts}) {

  function compareName( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  function compareID( a, b ) {
    if ( a.id < b.id ){
      return -1;
    }
    if ( a.id > b.id ){
      return 1;
    }
    return 0;
  }

  const handleChange = (event) => {
    
    setSortBy(event.target.value);
    
    if(event.target.value==="Name"){
    const result = contacts.slice().sort(compareName);
    setContacts(result);
    }
    else{
      const result = contacts.slice().sort(compareID);
      setContacts(result);
    }

  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"Name"}>Name</MenuItem>
          <MenuItem value={"ID"}>ID</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}