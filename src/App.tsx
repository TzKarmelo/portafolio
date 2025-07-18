import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './layout/footer/footer'
import Header from './layout/header/header'
import ScrollToTop from './components/ScrollToTop'
import appRoutes from './routes/appRoutes'
import type AppRoute from './routes/schemas/IappRoutes'
import type { ReactElement } from "react"

const typedAppRoutes: AppRoute[] = appRoutes

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {typedAppRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
