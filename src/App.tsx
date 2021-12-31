import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import * as S from './styles'
import GlobalStyle from './styles/global'
import defaultTheme from './styles/themes/default'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />

        <S.Container>
          <Routes />
        </S.Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
