import { useTheme } from '@mui/material/styles';
import logoWISE from '../../public/assets/logos/logoWISE.png'
export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
<img src={logoWISE} width={100} height={50} />
  );
};
