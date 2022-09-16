const COLORS = {
  black: [
    "#000",
    "#111",
    "#222",
    "#333",
    "#444",
    "#555",
    "#666",
    "#777",
    "#888",
  ],
  white: ["#fff", "#eee", "#ddd", "#ccc", "#bbb", "#aaa"],
  blue: {
    base: "#005EBD",
    rollover: "#0054A8",
    active: "#0059B2",
    disabled: "rgba(#005EBD, 0.5)",
  },
};

const THEME = {
  colors: {
    bg: COLORS.black,
    fg: COLORS.white,
    palette: {
      primary: {
        base: COLORS.blue.base,
        rollover: COLORS.blue.rollover,
        active: COLORS.blue.active,
        disabled: COLORS.blue.disabled,
        fg: COLORS.white[1],
      },
    },
  },
};

const STORAGE = {
  visited: {
    id: "visited",
  },
  wanted: {
    id: "wanted",
  },
};

export { THEME, STORAGE };
