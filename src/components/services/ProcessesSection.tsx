    "use client";

    import { Box, Typography, Paper } from "@mui/material";
    import { useEffect, useState } from "react";
    const steps = [
    {
        title: "Discovery",
        desc: "We learn about your business, users, and goals to define the right direction.",
        color: "#6366F1",
        icon: "🔍",
    },
    {
        title: "Design",
        desc: "We create clean, user-friendly designs that match your brand and engage users.",
        color: "#3B82F6",
        icon: "✏️",
    },
    {
        title: "Develop",
        desc: "We build fast, scalable, and secure solutions using modern technologies.",
        color: "#10B981",
        icon: "💻",
    },
    {
        title: "Deliver",
        desc: "We test, deploy, and support your product to ensure long-term success.",
        color: "#F97316",
        icon: "🚀",
    },
    ];

    export default function ProcessSection() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        
        <Box
        sx={{
            py: 12,
            px: 2,
            maxWidth: "1200px",
            mx: "auto",
        }}
        >
        <Box textAlign="center" mb={8}>
            <Typography sx={{ letterSpacing: 2, color: "gray" , textAlign:'center',marginBottom:'20px'}}>
            OUR PROCESS
            </Typography>

            <Typography variant="h3" fontWeight={700} sx={{textAlign:'center',color:'black'}}>
            How We Work
            </Typography>

            <Typography color="text.secondary" mt={2} sx={{textAlign:'center',paddingX:'400px',marginBottom:'80px',color:'var(--pb-muted)'}}>
            A simple, transparent process to turn your ideas into digital solutions.
            </Typography>
    
        </Box>

        <Box
            sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
            gap: 4,
            position: "relative",
            }}
        >
            <Box
            sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: "40px",
                left: 0,
                right: 0,
                height: "2px",
                background: "#e5e7eb",
                zIndex: 0,
            }}
            />

            {steps.map((step, index) => (
            <Paper
                key={index}
                elevation={3}
                sx={{
                p: 3,
                borderRadius: 4,
                textAlign: "center",
                position: "relative",
                zIndex: 1,

                opacity: show ? 1 : 0,
                transform: show ? "translateY(0px)" : "translateY(20px)",
                transition: "all 0.5s ease",
                transitionDelay: `${index * 120}ms`,

                "&:hover": {
                    transform: "translateY(-8px)",
                    transition: "all 0.25s ease",
                },
                }}
            >
                <Box
                sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: `${step.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    mx: "auto",
                    mb: 2,
                }}
                >
                {step.icon}
                </Box>

                <Typography variant="h6" fontWeight={600} mb={1}>
                {step.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                {step.desc}
                </Typography>
            </Paper>
            ))}
        </Box>
        </Box>
    );
    }