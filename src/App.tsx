import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';

import GitHubIcon from '@mui/icons-material/GitHub';

function VenessaAvatar(props: { loading?: boolean }) {
  const { loading = false } = props;

  return (
    <div>
      { loading ? (
        <Skeleton variant="circular">
          <Avatar sx={{ width: '100%', height: 'auto', aspectRatio: '1' }} />
        </Skeleton>
      ) : (
        <Avatar src="https://cloudflare.endpoint.amaneus.net/avatars/avatar.webp" sx={{ width: '100%', height: 'auto', aspectRatio: '1' }} />
      )}
    </div>
  );
} 

function Copyright() {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}{new Date().getFullYear()}{' '}
        <Link color="inherit" href="https://github.com/Nofated095">
          Amane
        </Link>
        .
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        <Link color="inherit" href="https://icp.gov.moe/?keyword=20230721">
          萌 ICP 备 20230721 号
        </Link>
      </Typography>
    </>
  );
}

export default function App() {
  let kawaii_face = '(>▽'

  return (
    <Container maxWidth="sm">
      <Box sx={{
        mt: 10,
      }}>
        <Grid container spacing={ 3 }>
          <Grid size={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <VenessaAvatar />
          </Grid>
            <Grid size={9}>
              <Typography component="h1" sx={{ fontSize: { xs: 'h4.fontSize', sm: 'h2.fontSize' }, fontFamily: 'Red Hat Display', fontWeight: 'bold'}} >
                Amane
              </Typography>
              <Typography sx={{ fontSize: 'h7.fontSize', color: 'text.secondary'}} >
                Forgive me.
              </Typography>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Box sx={{ width: '100%', m: 1, p: 0 }}>
            <Box sx={{ my: 1 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                <strong>Ciallo～</strong>
              </Typography>
              <Typography>             
                I'm Amane. Amane is meaning kawaii! {kawaii_face}
              </Typography>
            </Box>
            <Box sx={{ my: 1 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                <strong>Wonderhoy!</strong>
              </Typography>
              <Typography>
                📒️ I have a <Link href="https://blog.amane.icu/">blog</Link> with infinite creativiy.<br />
                ⌨️ Open-source is great!<br />
                🧪 iGEMer in 2023 with a 🥈silver medal, and iGEM Advisor in 2024.<br />
                🎵 Fan of <Link href="https://www.youtube.com/@feryquitous6012">Feryquitous</Link>.
              </Typography>
            </Box>
            <Box sx={{ my: 1 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                <strong>Find me at</strong>
              </Typography>
              <Stack spacing={2} direction="row">
                <Button variant="text" color="inherit" href="https://github.com/Nofated095" startIcon={<GitHubIcon />}>
                  GitHub
                </Button>
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Copyright />
      </Box>
    </Container>
  );
}
