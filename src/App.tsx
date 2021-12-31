import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import Header from './components/Header'
import Routes from './routes'
import * as S from './styles'
import GlobalStyle from './styles/global'
import defaultTheme from './styles/themes/default'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <S.Container>
          <Header />
          <Routes />
        </S.Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
