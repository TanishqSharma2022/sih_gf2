import { createClient } from '@supabase/supabase-js';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// export function initSupabase(){
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// const supabase = createClient(supabaseUrl, supabaseKey);
const supabase = createClientComponentClient();
// return {supabase}
// }
export default supabase;
