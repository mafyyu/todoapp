import { supabase } from "./supabaseClient";
 
export async function AddTask (
    id:number,
    userId:number,
    title:string,
    is_completed:boolean,
    deadline:Date
) {
    try{
        const {data,error} = await supabase
        .from('Task')
        .insert([
            {
                id:id,
                user_id: userId,
                title: title,
                is_completed:is_completed,
                deadline:deadline
            }
        ])
    }catch(error){
        console.log(error)
    }
}