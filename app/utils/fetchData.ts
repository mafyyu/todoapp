import { supabase } from "../utils/supabaseClient";

export async function fetchData(){
    const { data, error } = await supabase
    .from("Task")
    .select("*")

    if (error){
        console.log("fetch error",error.message)
    };
    return data
};