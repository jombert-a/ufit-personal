
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const USkeletonTheme: CustomThemeConfig = {
    name: 'u-skeleton-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #FFD700 
		"--color-primary-50": "255 249 217", // #fff9d9
		"--color-primary-100": "255 247 204", // #fff7cc
		"--color-primary-200": "255 245 191", // #fff5bf
		"--color-primary-300": "255 239 153", // #ffef99
		"--color-primary-400": "255 227 77", // #ffe34d
		"--color-primary-500": "255 215 0", // #FFD700
		"--color-primary-600": "230 194 0", // #e6c200
		"--color-primary-700": "191 161 0", // #bfa100
		"--color-primary-800": "153 129 0", // #998100
		"--color-primary-900": "125 105 0", // #7d6900
		// secondary | #4F46E5 
		"--color-secondary-50": "229 227 251", // #e5e3fb
		"--color-secondary-100": "220 218 250", // #dcdafa
		"--color-secondary-200": "211 209 249", // #d3d1f9
		"--color-secondary-300": "185 181 245", // #b9b5f5
		"--color-secondary-400": "132 126 237", // #847eed
		"--color-secondary-500": "79 70 229", // #4F46E5
		"--color-secondary-600": "71 63 206", // #473fce
		"--color-secondary-700": "59 53 172", // #3b35ac
		"--color-secondary-800": "47 42 137", // #2f2a89
		"--color-secondary-900": "39 34 112", // #272270
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #00CC66 
		"--color-success-50": "217 247 232", // #d9f7e8
		"--color-success-100": "204 245 224", // #ccf5e0
		"--color-success-200": "191 242 217", // #bff2d9
		"--color-success-300": "153 235 194", // #99ebc2
		"--color-success-400": "77 219 148", // #4ddb94
		"--color-success-500": "0 204 102", // #00CC66
		"--color-success-600": "0 184 92", // #00b85c
		"--color-success-700": "0 153 77", // #00994d
		"--color-success-800": "0 122 61", // #007a3d
		"--color-success-900": "0 100 50", // #006432
		// warning | #FF9900 
		"--color-warning-50": "255 240 217", // #fff0d9
		"--color-warning-100": "255 235 204", // #ffebcc
		"--color-warning-200": "255 230 191", // #ffe6bf
		"--color-warning-300": "255 214 153", // #ffd699
		"--color-warning-400": "255 184 77", // #ffb84d
		"--color-warning-500": "255 153 0", // #FF9900
		"--color-warning-600": "230 138 0", // #e68a00
		"--color-warning-700": "191 115 0", // #bf7300
		"--color-warning-800": "153 92 0", // #995c00
		"--color-warning-900": "125 75 0", // #7d4b00
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #495a8f 
		"--color-surface-50": "228 230 238", // #e4e6ee
		"--color-surface-100": "219 222 233", // #dbdee9
		"--color-surface-200": "210 214 227", // #d2d6e3
		"--color-surface-300": "182 189 210", // #b6bdd2
		"--color-surface-400": "128 140 177", // #808cb1
		"--color-surface-500": "73 90 143", // #495a8f
		"--color-surface-600": "66 81 129", // #425181
		"--color-surface-700": "55 68 107", // #37446b
		"--color-surface-800": "44 54 86", // #2c3656
		"--color-surface-900": "36 44 70", // #242c46
	}
}