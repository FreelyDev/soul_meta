import Loading from 'components/loading/Loading';
import { createContext, useState } from 'react'




const LoadingCtx = createContext({
  loading : false,
  setLoading: (val : boolean) => {}
  // message : '',
  // setMessage: (val : string) => {},
  }
  );

export default LoadingCtx;


export function LoadingProvider(props) {
  const [loading, setLoading] = useState(false)
  const value = { loading , setLoading }

  return (
    <LoadingCtx.Provider value={value}>
      {props.children}
      <Loading isLoading = {value.loading}  />
    </LoadingCtx.Provider>
  )
}
