import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SocialsButton from "../components/SocialsButton";

const GradientText = styled('div')(() => ({
    background: `linear-gradient(90deg, rgba(152,69,232,1) 0%, rgba(51,210,255,1) 50%, rgba(221,87,137,1) 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
}));

export default function Home() {
    return (
        <Box>
            <Typography variant="subtitle1">
                Hey, I&apos;m
            </Typography>
            <GradientText>
                <Typography variant="h1">
                    Your name
                </Typography>
            </GradientText>
            <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat placerat volutpat. Integer varius nisl vel odio pellentesque, id feugiat tellus porttitor. Nam id turpis semper, lobortis neque vel, lobortis metus. Aliquam auctor pulvinar sem, a ornare ex consectetur in. Phasellus dapibus, ex a cursus egestas, justo tellus finibus mauris, eu fringilla erat arcu sit amet eros. Aliquam accumsan lacus metus, quis posuere enim aliquet in. Integer vulputate pretium massa, ac commodo dolor lobortis vitae.
            </Typography>
            <SocialsButton links={{ email: 'mailto: youremail@mail.com', linkedin: 'https://linkedin.com/', github: 'https://github.com'}}/>
        </Box>
    )
}