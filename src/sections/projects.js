import { Box, Card, CardActions, CardContent, CardMedia, Typography, Grid, Button, IconButton } from "@mui/material";
import { GitHub as GitHubIcon, Link as LinkIcon } from '@mui/icons-material'

export default function Projects() {
    const PROJECTS = [
        {
            name: 'Project 1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue, urna finibus ultrices posuere, ipsum purus condimentum elit, ut vulputate quam risus ut risus.',
            imageUrl: '/static/images/project.jpg',
            tags: 'React - Next.js - MaterialUI',
            liveDemo: '',
            github: 'https://github.com'
        },
        {
            name: 'Project 2',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue, urna finibus ultrices posuere, ipsum purus condimentum elit, ut vulputate quam risus ut risus.',
            imageUrl: '/static/images/project.jpg',
            tags: 'React - Next.js - MaterialUI',
            liveDemo: '',
            github: ''
        },
        {
            name: 'Project 2',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue, urna finibus ultrices posuere, ipsum purus condimentum elit, ut vulputate quam risus ut risus.',
            imageUrl: '/static/images/project.jpg',
            tags: 'React - Next.js - MaterialUI',
            liveDemo: '',
            github: ''
        },
    ]

    return (
        <Box id="Projects">
            <Typography variant="h5">
                Featured projects
            </Typography>
            <Grid container spacing={2}>
                {PROJECTS.map((project) => (
                    <Grid key={project.name} item xs={12} sm={6} md={4}>
                        <Card variant="CardProject" sx={{maxWidth: 345, mt: 5}}>
                            <CardMedia
                                component="img"
                                height="240"
                                image={project.imageUrl ? project.imageUrl : '/static/images/default-project.jpg'}
                                alt={project.name}
                            />
                            <CardContent sx={{minHeight: 200}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.desc}
                                </Typography>
                                <Typography variant="caption" color="text.tertiary">
                                    {project.tags}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {project.liveDemo ?
                                    <a href={project.liveDemo} target="_blank" rel="noreferrer">
                                        <Button
                                            variant="gradientFour" size="large"
                                            startIcon={<LinkIcon sx={{transform: 'rotate(135deg)'}}/>}
                                        >
                                            Live demo
                                        </Button>
                                    </a>
                                    :
                                    <Button
                                        variant="gradientFour" size="large"
                                        startIcon={<LinkIcon sx={{transform: 'rotate(135deg)'}}/>}
                                        disabled
                                    >
                                        Live demo
                                    </Button>
                                }
                                {project.github ?
                                    <a href={project.github} target="_blank" rel="noreferrer">
                                        <IconButton aria-label="GitHub" size="large">
                                            <GitHubIcon fontSize="inherit"/>
                                        </IconButton>
                                    </a>
                                    :
                                    <IconButton aria-label="GitHub" size="large" disabled>
                                        <GitHubIcon fontSize="inherit"/>
                                    </IconButton>
                                }
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}