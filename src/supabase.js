import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://oshyrfghfvxwidibqvvy.supabase.co", process.env.SUPABASE_KEY);

export default supabase