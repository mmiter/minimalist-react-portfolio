import PropTypes from 'prop-types'
import { Stack, Link, Button } from '@mui/material'
import { Email as EmailIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon } from '@mui/icons-material'

SocialsButton.propTypes = {
    links: PropTypes.objectOf(PropTypes.string)
}

export default function SocialsButton({ links = {} }) {
    const SOCIALS = [
        {
            name: 'Send an email',
            icon: <EmailIcon />,
            socialColor: 'gradientOne',
            path: links.email || '#email-link'
        },
        {
            name: 'Linkedin',
            icon: <LinkedInIcon/>,
            socialColor: 'gradientTwo',
            path: links.linkedin || '#linkedin-link'
        },
        {
            name: 'Github',
            icon: <GitHubIcon/>,
            socialColor: 'gradientThree',
            path: links.github || '#github-link'
        },
    ]

    return (
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} flexWrap="wrap" alignItems="center" sx={{ my: { xs: '4em !important', lg: '8em !important' } }}>
            {SOCIALS.map((social) => {
                const { name, icon, path, socialColor } = social;
                return (
                    <Link key={name} href={path} target="_blank">
                        <Button variant={socialColor} size="large" startIcon={icon}>{name}</Button>
                    </Link>
                )
            })}
        </Stack>
    )
}
