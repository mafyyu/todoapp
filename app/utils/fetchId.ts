import { supabase } from "../utils/supabaseClient";
import { useEffect, useState } from "react";

export default function FetchID() {
    const [id,setId] = useState<string | null>(null);
      useEffect(()=>{
          const fetchSession = async () => {
              const { data: { session } } = await supabase.auth.getSession();
              if (session) {
                console.log(session.user.id); // ユーザーがログインしている場合、ユーザー情報をstateにセット
                setId(session.user.id)
              } else {
                console.log("not login now"); // ログインしていない場合、stateをnullに設定
              }           
            };
        fetchSession()
      })
    return id;
}