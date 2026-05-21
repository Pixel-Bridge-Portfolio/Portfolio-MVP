'use client';

import { Box, Stack, Typography } from "@mui/material";
import PrimaryButton from "@/components/common/PrimaryButton";
import Section from "@/components/common/Section";
import SurfaceCard from "@/components/common/SurfaceCard";
import ProcessesSection from '@/components/services/ProcessesSection'
import '@/styles/globals.css';

import { motion } from "framer-motion";
import {
  homeSection,
  homeItem,
  homeButtons,
  homeCards,
} from '@/app/lib/animations'; 

export default function Home() {
  return (
    
    <motion.div
      variants={homeSection}
      initial="hidden"
      animate="show"
    >
      
      <Box sx={{ backgroundColor: "background.default" }}>

        <Section>
          <Stack spacing={4}>

            <motion.div variants={homeItem}>
              <Typography variant="h1" sx={{color:'black'}}>
                We build digital products that people remember.
              </Typography>
            </motion.div>

            <motion.div variants={homeItem}>
              <Typography
                variant="body1"
                className="text-muted"
                sx={{ maxWidth: 760 }}
              >
                Pixel Bridge is a multidisciplinary team of engineers, designers,
                and strategists. We combine strong technical execution with clear
                creative direction to deliver websites, brand experiences, and
                product solutions that perform.
              </Typography>
            </motion.div>

            <motion.div variants={homeButtons}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <PrimaryButton href="/work">View Our Work</PrimaryButton>
                <PrimaryButton variant="outlined" href="/contact">
                  Start a Project
                </PrimaryButton>
              </Stack>
            </motion.div>

            <motion.div variants={homeCards}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
                useFlexGap
                sx={{ flexWrap: "wrap" }}
              >

                <SurfaceCard sx={{ minWidth: 260 }}>
                  <Typography variant="h3">What We Do</Typography>
                  <Typography variant="body1" className="text-muted">
                    Backend, frontend, branding, visual content, social media,
                    AI workflows, and product design in one connected team.
                  </Typography>
                </SurfaceCard>

                <SurfaceCard sx={{ minWidth: 260 }}>
                  <Typography variant="h3">How We Work</Typography>
                  <Typography variant="body1" className="text-muted">
                    We run a practical process from discovery to delivery with
                    clear communication, short feedback loops, and measurable
                    outcomes.
                  </Typography>
                </SurfaceCard>

              </Stack>
            </motion.div>

          </Stack>
        </Section>

        <ProcessesSection />

      </Box>

    </motion.div>
  );
}