import { Button, Typography } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box';
function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectMode = event.target.value
    setMode(selectMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
          >
            <LightModeIcon fontSize='small' /> Light
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
          >
            <DarkModeIcon fontSize='small' /> Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              gap: '4px'
            }}
          >
            <SettingsBrightnessIcon fontSize='small' /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
function ModeToggle() {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // console.log(prefersDarkMode)
  // const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {

  return (
    <>
      <Typography variant='body2' color="text.secondary">Duy</Typography>
      <div>Khanh Duy</div>
      <Button variant='contained'>Hello World</Button>
      <Button variant='text'>Hello World</Button>
      <Button variant='outlined'>Hello World</Button>
      <Button variant=''></Button>
      <hr />
      <ModeSelect />
      <hr />
      <ModeToggle />
    </>
  )
}

export default App
