// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/app/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#4f46e5",
//         "primary-dim": "#4338ca",
//         "primary-light": "#818cf8",
//         "background-light": "#f8fafc",
//         "surface-light": "#ffffff",
//         "surface-dim": "#f1f5f9",
//         "text-main": "#0f172a",
//         "text-muted": "#64748b",
//       },
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//       },
//       backgroundImage: {
//         "grid-pattern":
//           "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
//       },
//       animation: {
//         float: "float 8s ease-in-out infinite",
//         "float-delayed": "float 8s ease-in-out 4s infinite",
//         "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
//         shine: "shine 2s infinite",
//       },
//       keyframes: {
//         float: {
//           "0%,100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-15px)" },
//         },
//         shine: {
//           "0%": { transform: "translateX(-100%)" },
//           "100%": { transform: "translateX(100%)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#4f46e5",
				"primary-dim": "#4338ca",
				"primary-light": "#818cf8",
				"background-light": "#f8fafc",
				"surface-light": "#ffffff",
				"surface-hover": "#fcfcfc",
				"surface-dim": "#f1f5f9",
				"text-main": "#0f172a",
				"text-muted": "#64748b",
				"text-secondary": "#475569",
				"border-light": "#e2e8f0",
			},
			fontFamily: {
				display: ["Inter", "sans-serif"],
				body: ["Inter", "sans-serif"],
			},
			borderRadius: {
				DEFAULT: "0.5rem",
				lg: "1rem",
				xl: "1.5rem",
				"2xl": "2rem",
				full: "9999px",
			},
			boxShadow: {
				soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
				glow: "0 0 20px rgba(249, 245, 6, 0.4)",
			},
			backgroundImage: {
				"grid-pattern":
					"linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
			},
			animation: {
				float: "float 8s ease-in-out infinite",
				"float-delayed": "float 8s ease-in-out 4s infinite",
				flow: "flow 3s linear infinite",
				shine: "shine 1.5s infinite",
			},
			keyframes: {
				float: {
					"0%,100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-15px)" },
				},
				flow: {
					"0%": { strokeDashoffset: "1000" },
					"100%": { strokeDashoffset: "0" },
				},
				shine: {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(100%)" },
				},
			},
		},
	},
	plugins: [],
};
