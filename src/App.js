import React, { useMemo } from 'react';

// import redux for auth guard
import { useSelector } from 'react-redux';

// import layout
import Layout from 'layout/Layout';

// import routing modules
import RouteIdentifier from 'routing/components/RouteIdentifier';
import { getRoutes } from 'routing/helper';
import routesAndMenuItems from 'routes.js';
import Loading from 'components/loading/Loading';

import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const { currentUser, isLogin } = useSelector((state) => state.auth);

  const routes = useMemo(() => getRoutes({ data: routesAndMenuItems, isLogin, userRole: currentUser.role }), [isLogin, currentUser]);
  if (routes) {
    return (


      
      <BrowserRouter basename="/criptocommerce">
        
         {/* ESTO ES SOLAMENTE UN PARCHE BIZARRO 
         QUE ANDA DE OJETE PERO ROMPE Y TRAE PROBLEMAS DESPUES PORQUE
          NO TE DEJA ACCEDER DIRECTAMENTE A UNA SUBPAGINA <<-- cual subpagina? comenta bien pelotudo */}




        <Layout>
          <RouteIdentifier routes={routes} fallback={<Loading />} />
        </Layout>

      </BrowserRouter>
    );
  }
  return <></>;
};

export default App;
