import { Button, Typography } from '@mui/material'
import { useColorScheme } from '@mui/material/styles';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
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
      <ModeToggle />
    </>
  )
}

export default App
