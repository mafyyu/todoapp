"use client";

import Head from "next/head";
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../utils/supabaseClient';

export default function Google(){
  return (
    <>
      <div >
      <Head>
        <title>Google認証画面</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={['google']}
            redirectTo="localhost:3000/home"
          />
        </div>
      </main>
      <footer>
      </footer>
    </div>
    </>
  )
}

