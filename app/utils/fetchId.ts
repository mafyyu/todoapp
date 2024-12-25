import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";


export default function useFetchID() {
    const [id,setId] = useState<string | null>(null);

      useEffect(()=>{
          const fetchSession = async () => {
              const { data: { session } } = await supabase.auth.getSession();
              if (session) {
                console.log(session.user.id); // ユーザーがログインしている場合、ユーザー情報をstateにセット
                setId(session.user.id)
              } else {
                setId(null)
                console.log("not login now"); // ログインしていない場合、stateをnullに設定
              }           
            };
        fetchSession()
    },[]);

    return id;
};