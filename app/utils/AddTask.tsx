import { supabase } from "./supabaseClient";
 
export async function AddTask (
    userId:number,
    title:string,
    deadline:Date|null,
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
                detail
            }
        ])
    }catch(error){
        console.log(error)
    }
}