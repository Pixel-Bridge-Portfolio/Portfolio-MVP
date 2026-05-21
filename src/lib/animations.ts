export const motionTokens = {
  duration: {
    fast: 160,
    normal: 220,
    section: 320,
  },
  easing: {
    standard: "cubic-bezier(0.2, 0.8, 0.2, 1)",
  },
  distance: {
    revealY: 14,
    hoverY: 4,
  },
} as const;

export const motionTransition = {
  card: `transform ${motionTokens.duration.normal}ms ${motionTokens.easing.standard}, box-shadow ${motionTokens.duration.normal}ms ${motionTokens.easing.standard}`,
  reveal: `opacity ${motionTokens.duration.section}ms ${motionTokens.easing.standard}, transform ${motionTokens.duration.section}ms ${motionTokens.easing.standard}`,
  navUnderline: `transform ${motionTokens.duration.fast}ms ${motionTokens.easing.standard}, opacity ${motionTokens.duration.fast}ms ${motionTokens.easing.standard}`,
} as const;
