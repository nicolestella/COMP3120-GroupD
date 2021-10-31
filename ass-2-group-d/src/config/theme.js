import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		// background: {
		// 	default: '#EDEDED',
		// },
		// background: '#EDEDED',
		primary: {
			main: '#13e0e7',
		},
	},
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
})

export default theme
