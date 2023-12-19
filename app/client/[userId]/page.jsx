import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Profile from "../Profile";

export default async function User({params}){
  const id = params.userId;
  const subid = id.substring(0, id.length-3)
  const supabase = createClientComponentClient()
    const { data: sih, error } = await supabase.from("sih").select().eq('user_id', subid)
    // console.log(sih)
    const session = supabase.auth.getSession()


    return session  ? (
      <>
      {/* <pre>{JSON.stringify(sih, null, 2)}</pre> */}
      <div className="w-full p-4 bg-gray-100 h-[150vh] flex md:p-6 justify-center">
            {sih && <Profile data={sih[0]} />}
      </div>
      </>
    ) : (<>
      <div className="w-full bg-black/10 h-[100vh] flex md:p-12 justify-center">
    No data found
    </div>
    </>)
}