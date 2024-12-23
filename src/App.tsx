import './App.css'
import { useAuth } from './hooks';

import { Routes } from "react-router"
import { BrowserRouter, Route } from 'react-router-dom';
import { Login, Layout, Home } from './pages';
import { AppContainer, BlueCircle, ThreeDots, TopBanner, TopBannerContainer, TopBannerShadow } from './App.styled';

function App() {
  const { isAuthenticated, isLoading } = useAuth();

  const authenticatedRoutes = (
    <Route path="/" element={<Layout />}>
      <Route path="*" element={<Home />} />
    </Route>
  );

  if (isLoading) {
    return <AppContainer />;
  }

  return (
    <AppContainer>
      <TopBannerContainer>
      <TopBanner />
      <TopBannerShadow />
      <BlueCircle />
      <ThreeDots />
      </TopBannerContainer>
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? authenticatedRoutes : (
            <Route path="*" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </AppContainer>
  )
}

export default App
