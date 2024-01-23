// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useComment = () => {

    const { user } = useContext(AuthContext);
    const email = user.email;
    const axiosPublic = useAxiosPublic();
   
    const {data: comments = [], isPending: loading, refetch} = useQuery({
        queryKey: ['comment'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/comments`);
            return res.data;
        }
    })


    return [comments, loading, refetch]
}

export default useComment;