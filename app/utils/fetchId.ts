import { supabase } from "../utils/supabaseClient";
import { useEffect } from "react";

export default function FetchID() {
      useEffect(()=>{
          const fetchSession = async () => {
              const { data: { session } } = await supabase.auth.getSession();
              if (session) {
                console.log(session.user.id); // ユーザーがログインしている場合、ユーザー情報をstateにセット
              } else {
                console.log("not login now"); // ログインしていない場合、stateをnullに設定
              }
            };
        fetchSession()
      })
}