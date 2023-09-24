import React, { useState } from 'react';
import { useEffect } from "react";
import Layout from "@/component/Layout"
import Loading from "@/component/Loading"
import NProgress from 'nprogress'
import PropTypes from 'prop-types'
import '@/styles/globals.css'
import { useRouter } from 'next/router';


const MyApp = (props) => {
  const { Component, pageProps } = props;
  const router = useRouter();
  const [ awaitLoading, setAwaitLoading ] = useState(true)


  useEffect(()=> {
    const handleRouteChange = (url, { shallow }) => {
      if(!shallow){
        NProgress.start()
      }
    }
    router.events.on("routeChangeStart", handleRouteChange)
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())

    // If the component is unmounted, unsubscribe
		// from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange)
      router.events.off("routeChangeComplete", () => NProgress.done())
      router.events.off("routeChangeError", () => NProgress.done())
    }
  }, [])

  useEffect(()=> {
    setAwaitLoading(false);
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
      <Loading fullscreen isLoading={awaitLoading} />
    </Layout>
  )
}

MyApp.getInitialProps = async(context) => {
  const { ctx, Component } = context;

  let pageProps = {};

  if(Component?.getInitialProps){
    pageProps = await Component?.getInitialProps(ctx)
  }

  let layoutProps = {}

  if(Component?.Layout){
    layoutProps = await Component?.Layout?.getInitialProps({
      ...ctx,
      pageProps: propsData
    })
  }

  const propsData = {
    ...pageProps,
    ...layoutProps
  }

  return {
    pageProps: {
      ...propsData
    }
  }
}

MyApp.propsTypes = {
  Component : PropTypes.node,
  pageProps: PropTypes.object
}

export default MyApp;