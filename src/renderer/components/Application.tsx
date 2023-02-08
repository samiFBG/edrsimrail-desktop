import React, {Fragment, Suspense} from 'react';
import "./Application.scss"
import {Flowbite} from "flowbite-react/lib/esm/components/Flowbite";
import {Spinner} from "flowbite-react/lib/esm/components/Spinner";
import {useSoundNotification} from "./EDR/hooks/useSoundNotification";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { SupportsWebp } from './EDR/functions/webp';
const ServerSelect = React.lazy(() => import("./SelectMenu/ServerSelect"));
const PostSelect = React.lazy(() => import("./SelectMenu/PostSelect"));
const EDR = React.lazy(() => import("./EDR"));
function App() {
  const [SoundNotification, playSoundNotification] = useSoundNotification();
  let [isWebpSupported, setIsWebpSupported] = React.useState(false);
  React.useEffect(() => {
    SupportsWebp().then(result => setIsWebpSupported(result));
  }, [isWebpSupported]);

  return <SnackbarProvider autoHideDuration={3000} maxSnack={3}>
    <Flowbite>
      <SoundNotification />
      <div className="min-h-screen dark:bg-slate-800 text-black dark:text-white">
        <BrowserRouter>
          <Fragment>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<ServerSelect isWebpSupported={isWebpSupported} />} />
                <Route path="/:serverCode" element={<PostSelect isWebpSupported={isWebpSupported}/>} />
                <Route path="/:serverCode/station/:post" element={<EDR playSoundNotification={playSoundNotification} isWebpSupported={isWebpSupported}/>} />
              </Routes>
            </Suspense>
          </Fragment>
        </BrowserRouter>
      </div>
    </Flowbite>
  </SnackbarProvider>
}

export default App;
