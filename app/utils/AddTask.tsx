import { supabase } from "./supabaseClient";
 
export async function AddTask (
    userId:string|null,
    title:string,
    deadline:string|null,
    detail:string|null
) {
    try{
        const {data,error} = await supabase
        .from('Task')
        .insert([
            {
                user_id: userId,
                title: title,
                is_completed:false,
                deadline:deadline,
                detail: detail
            }
        ])
        if (error){
            console.log(error.message)
        }
    }catch(error){
        console.log("inserterror",error)
    }
}