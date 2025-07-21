"use client"

import { Avatar } from "@mui/material";
import { RxAvatar } from "react-icons/rx";

const Comment = ({prd} : {prd:any}) => {
  console.log(prd ,"prd");
  return (
    <div className="border w-full md:w-1/2 p-2 rounded-lg m-3">
      {/* <Avatar image={prd?.user?.image}/> */}
      <div className="flex items-center gap-1">
        <RxAvatar />
        <div>{prd?.user?.name}</div>
      </div>
      <div className="text-slate-500">{prd.comment}</div>
    </div>
  );
}

export default Comment